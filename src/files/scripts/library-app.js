App = {
	models:{},
	collections:{},
	views:{},
	options: {
		klass:0,
		category:0,
		color:0,
		limit:100,
		offset:0
	},
	dog: {
		masonry: false
	}
}


App.paginationTemplate = '\
        <div class="pagination pagination-small"> \
            <ul> \
                <li<% if (meta.previous == null) { %> class="disabled"<% } %>><a href="<%= getPageUrl(1) %>" class="previous-<%= meta.total_count %>">«</a></li> \
                <% for (var i=pager.start; i < pager.end; i++) { %> \
                    <li<% if (meta.offset / meta.limit == i) { %> class="active"<% } %>><a href="<%= getPageUrl(i) %>" class="page-<%= meta.total_count %>" data-offset="<%= meta.limit * i  %>"><%= i %></a></li> \
                <% } %> \
                <li<% if (meta.next == null) { %> class="disabled"<% } %>><a href="<%= getPageUrl(Math.ceil(meta.total_count/meta.limit)-1) %>" class="next-<%= meta.total_count %>">»</a></li> \
            </ul> \
        </div> \
    ';


var API_ROOT = "http://www.demlution.com/company/api/v1/";

App.models.TemplateCase = Backbone.Model.extend({
	urlRoot: API_ROOT + 'templatecase'
})

App.models.Color = Backbone.Model.extend({
	urlRoot: API_ROOT + 'templatecolor'
})

App.models.Category = Backbone.Model.extend({
	urlRoot: API_ROOT + 'templatecategory'
})

App.models.Klass = Backbone.Model.extend({
	urlRoot: API_ROOT + 'templateclass'
})


App.collections.CaseCollection = Backbone.Tastypie.Collection.extend({
	// model: App.models.Case,
	urlRoot: API_ROOT + 'templatecase',
	model: App.models.TemplateCase,	
	filters: {
		offset: 0,
		limit: 200,
		is_public:true
	},
})

App.collections.ColorCollection = Backbone.Collection.extend({
	// model: App.models.Case,
	url: API_ROOT + 'templatecolor',
	model: App.models.Color,
	parse: function(response) {
		return response.objects;
	}
})

App.collections.CategoryCollection = Backbone.Collection.extend({
	// model: App.models.Case,
	url: API_ROOT + 'templatecategory',
	model: App.models.Category,
	parse: function(response) {
		return response.objects;
	}
})

App.collections.KlassCollection = Backbone.Collection.extend({
	// model: App.models.Case,
	url: API_ROOT + 'templateclass',
	model: App.models.Klass,
	parse: function(response) {
		return response.objects;
	}
})


App.views.KlassView = Backbone.View.extend({
	el: '#klass-wrap',
	events: {
		"click": "open"
	},

	initialize: function() {
		this.isLoading = false;
		this.collection = new App.collections.KlassCollection();
		this.parent = 1;
	},

	highlight: function() {
		var that = this;
		var hash = window.location.hash;
        $('.cy-nav ul li').removeClass('on');
        $('.cy-nav ul li').each(function(index, elem) {

        	var href = $(elem).find('a').attr('href');
        	var cId = parseInt(href.split('/').reverse()[0].slice(1));
        	if (cId == that.parent) {
        		$(elem).addClass('on');
        	}
        })
        return this;
	},

	render: function() {
		var that = this;
		this.collection.fetch({cache:true, success: function(klassList) {
			var klassList = that.collection.models;
			var template = _.template($('#klass-list-tpl').html());
			var currentKlass = that.collection.get({id:App.options.klass});
			if (currentKlass == undefined) {
				klassList = [];
				that.parent = null;
			}else if (currentKlass.get('parent')) {
				klassList = that.collection.get({id: currentKlass.get('parent')}).get('children');
				that.parent = currentKlass.get('parent');
			} else {
				klassList = currentKlass.get('children')
				that.parent = currentKlass.get('id');
			}
			var klassHtml = template({klassList: klassList, _:_, options:App.options, parent: that.parent});
			$(that.$el).html($(klassHtml));
			that.highlight();
		}});
		return this;
	}
})


App.views.ColorView = Backbone.View.extend({
	el: '#color-wrap',
	events: {
		"click": "open"
	},

	initialize: function() {
		this.isLoading = false;
		this.colorCollection = new App.collections.ColorCollection();
	},

	render: function() {
		var that = this;
		this.colorCollection.fetch({cache:true, success: function(colorList) {
			var colorList = that.colorCollection.models;
			var template = _.template($('#color-list-tpl').html());
			var colorHtml = template({colorList: colorList, options: App.options, _:_});
			$(that.$el).html($(colorHtml));
		}});
		return this;
	}
})

App.views.CategoryView = Backbone.View.extend({
	el: '#category-wrap',
	events: {
		"click": "open"
	},

	initialize: function() {
		this.isLoading = false;
		this.categoryCollection = new App.collections.CategoryCollection();
	},

	render: function() {
		var that = this;
		this.categoryCollection.fetch({cache:true, success: function(categoryList) {
			var categoryList = that.categoryCollection.models;
			var template = _.template($('#category-list-tpl').html());
			var categoryHtml = template({categoryList: categoryList, options: App.options, _:_});
			$(that.$el).html($(categoryHtml));
		}});
		return this;
	}
})

App.views.CaseListView = Backbone.View.extend({
	el: '#item-wrap',

	events: {
		"click": "open"
	},


	initialize: function() {
		this.isLoading = false;
		this.collection = new App.collections.CaseCollection();
		this.caseTemplate = $('#case-list-tpl').html();
		//this.listenTo(this.collection, "change reset add remove all", this.layout);
	},

	render: function() {
		this.loadCase();
		return this;
	},

	loadCase: function() {
		var that = this;
		this.isLoading = true;
		//this.caseCollection.fetch({success: function(caseList) {
		var caseList = that.collection.models;
		var template = _.template(that.caseTemplate);
		var listHtml = template({caseList: caseList, options: App.options, _:_});
		if (App.dog.masonry) {
			$(that.$el).masonry('destroy');
		} else {
			App.dog.masonry = true;
		}
		$(that.$el).html($(listHtml)).masonry({
			itemSelector: '.item',
			columnWidth: 215,
			gutterWidth: 20,
            isAnimated: true,
		})

		var pageTemplate = _.template(App.paginationTemplate);
		var meta = that.collection.meta;
		var pager = {};
		pager.first = 1;
		pager.last = meta.total_count / meta.limit;
		pager.start = meta.offset / meta.limit > 4 ? (meta.offset / meta.limit - 4) : 1;
		pager.end = meta.total_count / meta.limit - meta.offset / meta.limit > 4 ? (meta.offset / meta.limit + 4) : (meta.total_count / meta.limit);
		var pageHtml = pageTemplate({meta:that.collection.meta, getPageUrl:that.getPageUrl, pager:pager});
		$('#pagination-wrap').html(pageHtml);
		setTimeout(function(){
			$(that.$el).masonry();
		}, 500)

		that.is_loading = false;
	},

	getPageUrl: function(page) {
		var pageUrl,
		hash = window.location.hash;

		if (hash == ""){
			pageUrl = '#/t/k0/p/' + page;

		} else if (hash.split('/').reverse()[1] != "p") {
			pageUrl =   hash + '/p/' + page;
		} else  {
			pageUrl = hash.split('/').slice(0, -2).join('/') + '/p/' + page;
		}
		return pageUrl;
	}
})

var klassView = new App.views.KlassView();
var colorView = new App.views.ColorView();
var categoryView = new App.views.CategoryView();
var appView = new App.views.CaseListView();

//colorView.render();
//categoryView.render();
//appView.render();

var Workspace = Backbone.Router.extend({

	initialize: function() {
		this.route("/");
	},

	routes: {
		"": "list",
		"t/search/:query": "search",
 
		"t(/k:klass)(/c:category)(/o:color)(/p/:page)": "list",   
	},

	index: function() {
		appView.render();
	},

	list: function(klass, category, color, page, code) {
		var options = {}
		options.klass = parseInt(klass||0);
		options.category = parseInt(category||0);
		options.color = parseInt(color||0);
		if (code)
			options.code = code;
		if (page)
			options.offset = page * 100;
		else
			options.offset = 0;

		_.extend(App.options, options);
		appView.collection = new App.collections.CaseCollection([], options);
		var filters = {
			limit:100,
			is_public:true,
			is_active:true
		};
		_.each(options, function(val, key) {
			if (val != 0)
				if (key == 'klass')
					filters['cls'] = val;
				else
					filters[key] = val;
		})
		_.extend(appView.collection.filters, filters);
		var caseList = appView.collection.fetch({success: function(caseList) {

			appView.render();
			colorView.render();
			categoryView.render();
			klassView.render();
		}});
		appView.collection.on('reset', function() {
			$('#item-wrap').masonry();
		});
	},

	search: function(query) {
		this.list(0, 0, 0, 0, query);
	}
});

$(function() {
	router = new Workspace();
	Backbone.history.start();
})