var AddCardView = Backbone.View.extend({
  tagName: 'p',
  template: JST.add_card,
  formTemplate: JST.add_card_form,
  events: {
    'click a.add': 'renderAddForm',
    'click .cancel': 'cancel',
    'submit form': 'add'
  },
  add: function(e) {
    e.preventDefault();

    var title = this.$('textarea[name="title"]').val();
    var data = {
      title: title,
      listId: this.model.id,
      listPosition: this.model.cards.length + 1
    };

    var card = App.cards.create(data, {
      success: function() {
        this.model.cards.add(card);
        this.model.trigger('listUpdated');
      }.bind(this)
    });
  },
  cancel: function(e) {
    e.preventDefault();

    this.render();
  },
  render: function() {
    this.$el.html(this.template());
  },
  renderAddForm: function(e) {
    e.preventDefault();

    this.$el.html(this.formTemplate());
    this.$('textarea').focus();
  },
  initialize: function() {
    this.render();
  }
});