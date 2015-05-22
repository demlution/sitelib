App = {
	models:{},
	collections:{},
	views:{}
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



App.collections.CaseCollection = Backbone.Collection.extend({
	// model: App.models.Case,
	url: API_ROOT + 'templatecase',
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
			var template = _.template($('#color-list-tpl').html());
			var colorHtml = template({colorList: colorList, _:_});
			$(that.$el).append($(colorHtml));
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
		this.loadCase();
		return this;
	},

	loadCase: function() {
		var that = this;
		this.isLoading = true;
		this.caseCollection.fetch({success: function(caseList) {
			console.log(caseList);
			var caseList = that.caseCollection.models;
			var template = _.template($('#case-list-tpl').html());
			var listHtml = template({caseList: caseList, _:_})

			$(that.$el).append($(listHtml));
			$(that.$el).masonry({
				itemSelector: '.item',
				columnWidth: 240,
				gutterWidth: 20,
	            isAnimated: true,
			});
			that.is_loading = false;
		}})
	}
})


var colorView = new App.views.ColorView();
var appView = new App.views.CaseListView();
// colorView.render();
appView.render();
