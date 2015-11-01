// -------------------------- Masonry Column Shift -------------------------- //

// custom layout mode
$.Isotope.prototype._masonryColumnShiftReset = function() {
    // layout-specific props
    var props = this.masonryColumnShift = {
  columnBricks: []
    };
    // FIXME shouldn't have to call this again
    this._getSegments();
    var i = props.cols;
    props.colYs = [];
    while (i--) {
  props.colYs.push( 0 );
  // push an array, for bricks in each column
  props.columnBricks.push([]);
    }
};

$.Isotope.prototype._masonryColumnShiftLayout = function( $elems ) {
    var instance = this,
        props = instance.masonryColumnShift;
    $elems.each(function(){
  var $brick  = $(this);
  var setY = props.colYs;

  // get the minimum Y value from the columns
  var minimumY = Math.min.apply( Math, setY ),
            shortCol = 0;

  // Find index of short column, the first from the left
  for (var i=0, len = setY.length; i < len; i++) {
            if ( setY[i] === minimumY ) {
    shortCol = i;
    break;
            }
  }

  // position the brick
  var x = props.columnWidth * shortCol,
            y = minimumY;
  instance._pushPosition( $brick, x, y );
  // keep track of columnIndex
  $.data( this, 'masonryColumnIndex', i );
  props.columnBricks[i].push( this );

  // apply setHeight to necessary columns
  var setHeight = minimumY + $brick.outerHeight(true),
            setSpan = props.cols + 1 - len;
  for ( i=0; i < setSpan; i++ ) {
            props.colYs[ shortCol + i ] = setHeight;
  }

    });
};

$.Isotope.prototype._masonryColumnShiftGetContainerSize = function() {
    var containerHeight = Math.max.apply( Math, this.masonryColumnShift.colYs );
    return { height: containerHeight };
};

$.Isotope.prototype._masonryColumnShiftResizeChanged = function() {
    return this._checkIfSegmentsChanged();
};

$.Isotope.prototype.shiftColumnOfItem = function( itemElem, callback ) {

    var columnIndex = $.data( itemElem, 'masonryColumnIndex' );

    // don't proceed if no columnIndex
    if ( !isFinite(columnIndex) ) {
  return;
    }

    var props = this.masonryColumnShift;
    var columnBricks = props.columnBricks[ columnIndex ];
    var $brick;
    var x = props.columnWidth * columnIndex;
    var y = 0;
    for (var i=0, len = columnBricks.length; i < len; i++) {
  $brick = $( columnBricks[i] );
  this._pushPosition( $brick, x, y );
  y += $brick.outerHeight(true);
    }

    // set the size of the container
    if ( this.options.resizesContainer ) {
  var containerStyle = this._masonryColumnShiftGetContainerSize();
  containerStyle.height = Math.max( y, containerStyle.height );
  this.styleQueue.push({ $el: this.element, style: containerStyle });
    }

    this._processStyleQueue( $(columnBricks), callback );

};

$(function(){

    window.$container = $('#container');

    $container.isotope({
  itemSelector: '.item',
  itemPositionDataEnabled: true,
  layoutMode: 'masonryColumnShift',

  masonry: {
      columnWidth: 5
  },
  cellsByRow: {
      columnWidth: 220
  }
    });

    $(window).scroll(loadMore);
    window._loading = false;
    window._over = false;
    window.base_url = "http://www.demlution.com/store/api/v1/mobiletemplate?page=index&is_public=true&limit=10&format=jsonp";
             window.url = "/store/api/v1/mobiletemplate?page=index&is_public=true&limit=10&format=jsonp";
    loadMore();

    $('#nav-all').click(function(e){
  e.preventDefault();
  window.cat = 0;
  $container.isotope('remove', $('.item'), function(){
      loadMore();
      window._over = false;
      window.url = window.base_url;
  });
    });

    $('#cat-nav a').click(function() {
  window.cat = $(this).attr('data-cat');
  $container.isotope('remove', $('.item'), function(){
      loadMore();
      window._over = false;
  });
  $('#cat-nav a').removeClass('active');
  $(this).addClass('active');
  // $('#cat-nav a').css({color: '#444'});
  // $(this).css({color: '#C90000', background: '#fff'});
    });

    // $(window).resize(function() {
    //  w1 = 1200;//$('#container').innerWidth();
    //  width = Math.floor(w1/220) * 220 ;
    //  $('.wrapper').css({width: width});
    // });
});

function bindPreview(){
  $('.preview-btn').click(function() {
    var link = $(this).attr('data-link')
    window.open(link,"我的微官网", "height=650,width=400,top=0,left=" + (window.innerWidth - 400)/2 + ",toolbar=no,menubar=no,scrollbars=no, resizable=no,location=no, status=no");
  });
}

function loadMore() {
    if($('body').height() - 300 <= ($(window).innerHeight() + $(window).scrollTop()) && !window._over){
  if(!window._loading){
      window._loading = true;
      $.ajax({
    url: 'http://www.demlution.com' + window.url,
    dataType: 'jsonp'
      }).done(function(data) {
    products = data.objects;
    items = '';
    $.each(products, function(i, obj) {
        items += '<div class="item"><a href=#"' + obj.link + '">' +
      '<img width="200" src="' + obj.image + '"/>' +
      '<div class="qrlayout">' +
      '<div class="qrcode"><img width=120 src="http://www.demlution.com/store/qrcode/?data=' + obj.link + '&width=120&border=2" /><span data-link="' + obj.link + '" class="preview-btn">预览</span></div></div>' +
      '<span>风格' + obj.code + '</span></a>' +
      '</div>';
    });
    $items = $(items);
    $container.append($items).isotope('appended', $items, function(){
        $container.isotope('reLayout');
        $container.find('.item').hover(
      function() {
          // $(this).css({ height: "+=100" });
          $(this).find('p').show();
          // note that element is passed in, not jQuery object
          $container.isotope( 'shiftColumnOfItem', this );
      },
      function() {
          // $(this).css({ height: "-=100" });
          $(this).find('p').hide();
          $container.isotope( 'shiftColumnOfItem', this );
      }
        );
    });

    window._loading = false;
    if (data.meta.next == null) {
        window._over = true;
    } else {
        window.url = data.meta.next;
    }

      });
      window.$container.isotope('reLayout');

        }
    }

    bindPreview()
}
