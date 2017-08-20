var SearchResultView = Backbone.View.extend({
  tagName: 'li',
  attributes: function() {
    return {
      'class': 'card',
      'data-id': this.model.id
    };
  },
  template: JST.search_result,
  events: {
    'click a.card': 'cardDetails'
  },
  cardDetails: function(e) {
    e.preventDefault();
    router.navigate('/cards/' + this.model.id, { trigger: true });
  },
  getLabels: function() {
    var assignedLabels = App.labels.filter(function(label) {
      return _.contains(this.model.get('labels'), label.id);
    }.bind(this)).map(function(label) {
      return label.toJSON();
    });

    return assignedLabels;
  },
  render: function() {
    this.$el.html(this.template({
      card: this.model.toJSON(),
      labels: this.getLabels()
    }));
  },
  initialize: function() {
    this.render();
  }
});