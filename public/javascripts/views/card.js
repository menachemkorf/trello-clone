var CardView = Backbone.View.extend({
  tagName: 'li',
  template: JST.card,
  events: {
    'click .edit-card-title': 'renderEditTitleForm',
    'click a.card': 'cardDetails'
  },
  attributes: function() {
    return {
      'class': 'card',
      'data-id': this.model.id
    };
  },
  renderEditTitleForm: function(e) {
    e.stopPropagation();
    e.preventDefault();

    $('body').append(new EditTitleView({
      model: this.model,
      offset: this.$el.offset()
    }).$el);
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
  removeCard: function(model, collection) {
    var list = App.lists.get(model.get('listId'));
    if (list.cards === collection) {
      this.remove();
    }
  },
  render: function() {
    this.$el.html(this.template({
      card: this.model.toJSON(),
      labels: this.getLabels()
    }));
  },
  initialize: function() {
    this.render();
    this.listenTo(this.model, 'change', this.render);
    this.listenTo(this.model, 'remove', this.removeCard);
  }
});