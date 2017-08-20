var addListView = Backbone.View.extend({
  className: 'add-list col',
  template: JST.add_list,
  formTemplate: JST.add_list_form,
  events: {
    'click a.add': 'renderAddForm',
    'click .cancel': 'cancel',
    'submit form': 'add'
  },
  add: function(e) {
    e.preventDefault();

    var title = this.$('input[name="title"]').val();
    var data = { title: title };
    App.lists.create(data, { wait: true });
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
    this.$('input[type="text"]').focus();
  },
  initialize: function() {
    this.render();
  }
});