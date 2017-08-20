var LabelView = Backbone.View.extend({
  tagName: 'li',
  attributes: function() {
    return {
      'data-id': this.model.id
    }
  },
  template: JST.label,
  events: {
    'click .label': 'toggleLabel',
  },
  toggleLabel: function() {
    var labels = this.card.get('labels').slice();

    if (this.isAssigned()) {
      this.card.save({ labels: _.without(labels, this.model.id) });
    } else {
      labels.push(this.model.id);
      this.card.save({ labels: labels });
    }
    this.render();
  },
  isAssigned: function() {
    return (this.card.get('labels').indexOf(this.model.id) > -1);
  },
  render: function() {
    var data = this.model.toJSON();
    data.assigned = this.isAssigned();
    this.$el.html(this.template(data));
  },
  initialize: function(options) {
    this.card = options.card;
    this.colors = options.colors;
    this.render();
  }
});