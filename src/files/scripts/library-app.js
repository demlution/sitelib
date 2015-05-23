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


App.collections.CaseCollection = Backbone.Collection.extend({
	// model: App.models.Case,
	initialize: function(models, options) {
		this.options = options;
		_.extend(App.options, options);
	},
	url: function() {
		var api_url = "templatecase?";
		if (this.options) {
			_.each(this.options, function(val, key) {
				api_url += key + "=" + val + "&";
			})
			return API_ROOT + api_url;	
		}
		return API_ROOT + 'templatecase';	
	},
	model: App.models.TemplateCase,
	parse: function(response) {
		return response.objects;
	}
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
		this.klassCollection.fetch({success: function(klassList) {
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
		this.colorCollection.fetch({success: function(colorList) {
			var colorList = that.colorCollection.models;
			var template = _.template($('#color-list-tpl').html());
			var colorHtml = template({colorList: colorList, options: App.options, _:_});
			$(that.$el).append($(colorHtml));
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
		this.categoryCollection.fetch({success: function(categoryList) {
			var categoryList = that.categoryCollection.models;
			var template = _.template($('#category-list-tpl').html());
			var categoryHtml = template({categoryList: categoryList, options: App.options, _:_});
			$(that.$el).append($(categoryHtml));
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
		this.caseCollection = new App.collections.CaseCollection();
	},

	render: function() {
		console.log("start render")
		this.loadCase();
		return this;
	},

	loadCase: function() {
		var that = this;
		this.isLoading = true;
		this.caseCollection.fetch({success: function(caseList) {
			var caseList = that.caseCollection.models;
			var template = _.template($('#case-list-tpl').html());
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
			});
			that.is_loading = false;
		}})
	}
})


var colorView = new App.views.ColorView();
var categoryView = new App.views.CategoryView();
var appView = new App.views.CaseListView();

colorView.render();
categoryView.render();
appView.render();

var Workspace = Backbone.Router.extend({

	initialize: function() {
		console.log('start router');
		this.route("/");
	},

	routes: {
		"": "list",
		"t/:klass": "list",
		"t/:klass/:category": "list",
		"t/:klass/:category/:color":                 "list",    // #help
		"search/:query/p:page": "search"   // #search/kiwis/p7
	},

	index: function() {

		appView.render();
	},

	list: function(klass, category, color) {
		var options = {}
		if (klass!=0)
			options.klass = klass
		if (category!=0)
			options.category = category
		if (color!=0)
			options.color = color

		appView.caseCollection = new App.collections.CaseCollection([], options);
		var caseList = appView.caseCollection.fetch({success: function(caseList) {
			appView.render();

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


