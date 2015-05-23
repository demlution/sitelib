App = {
	models:{},
	collections:{},
	views:{},
	options: {
		klass:0,
		category:0,
		color:0,
		limit:20,
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
                <li<% if (meta.next == null) { %> class="disabled"<% } %>><a href="#" class="next-<%= meta.total_count %>">»</a></li> \
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
	url: API_ROOT + 'templateklass',
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
		this.klassCollection = new App.collections.KlassCollection();
	},

	render: function() {
		var that = this;
		this.klassCollection.fetch({cache:true, success: function(klassList) {
			var klassList = that.categoryCollection.models;
			var template = _.template($('#klass-list-tpl').html());
			var klassHtml = template({klassList: klassList, _:_});
			$(that.$el).append($(klassHtml));
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

	filters: {
		offset: 0,
		limit: 20
	},

	initialize: function() {
		this.isLoading = false;
		this.caseCollection = new App.collections.CaseCollection();
		this.caseTemplate = $('#case-list-tpl').html();
		console.log(this.filters);
	},

	render: function() {
		console.log("start render")
		this.loadCase();
		return this;
	},

	loadCase: function() {
		var that = this;
		this.isLoading = true;
		//this.caseCollection.fetch({success: function(caseList) {
			var caseList = that.caseCollection.models;
			var template = _.template(that.caseTemplate);
			var listHtml = template({caseList: caseList, options: App.options, _:_});
			if (App.dog.masonry) {
				$(that.$el).masonry('destroy');
			} else {
				App.dog.masonry = true;
			}
			$(that.$el).html($(listHtml)).masonry({
				itemSelector: '.item',
				columnWidth: 240,
				gutterWidth: 20,
	            isAnimated: true,
			});

			var pageTemplate = _.template(App.paginationTemplate);
			var meta = that.caseCollection.meta;
			var pager = {};
			pager.start = meta.offset / meta.limit > 4 ? (meta.offset / meta.limit - 4) : 1;
			pager.end = meta.total_count / meta.limit - meta.offset / meta.limit > 4 ? (meta.offset / meta.limit + 4) : (meta.total_count / meta.limit);
			var pageHtml = pageTemplate({meta:that.caseCollection.meta, getPageUrl:that.getPageUrl, pager:pager});
			$('#pagination-wrap').html(pageHtml);
			that.is_loading = false;
		//}})
	},
	getPageUrl: function(page) {
		var pageUrl;
		if (window.location.hash.split('/').reverse()[1] != "p") {
			pageUrl = window.location.hash  + '/p/' + page;
		} else {
			pageUrl = window.location.hash.split('/').slice(0, -2).join('/') + '/p/' + page ;
		}
		return pageUrl;
	}
})


var colorView = new App.views.ColorView();
var categoryView = new App.views.CategoryView();
var appView = new App.views.CaseListView();

//colorView.render();
//categoryView.render();
//appView.render();

var Workspace = Backbone.Router.extend({

	initialize: function() {
		console.log('start router');
		this.route("/");
	},

	routes: {
		"": "list",
		"t/:klass": "list",
		"t/:klass/:category": "list",
		"t/:klass/:category/:color": "list",   
		"t/:klass/:category/:color/p/:page": "list",   
		"search/:query/p:page": "search"   // #search/kiwis/p7
	},

	index: function() {

		appView.render();
	},

	list: function(klass, category, color, page) {
		var options = {}
		if (klass && klass!='0')
			options.klass = parseInt(klass);
		if (category && category!='0')
			options.category = parseInt(category);
		if (color &&color!='0')
			options.color = parseInt(color);

		if (page)
			options.offset = page * 20;
		else
			options.offset = 0;

		_.extend(App.options, options);
		appView.caseCollection = new App.collections.CaseCollection([], options);
		appView.caseCollection.filters = options;
		var caseList = appView.caseCollection.fetch({success: function(caseList) {
			appView.render();
			colorView.render();
			categoryView.render();
		}});
		console.log('start list');
	},

	search: function(query, page) {
	console.log('startsearch');
	}

});


$(function() {
	router = new Workspace();
	Backbone.history.start();
})


