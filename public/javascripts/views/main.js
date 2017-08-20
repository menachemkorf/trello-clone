var MainView = Backbone.View.extend({
  el : 'main',
  events: {
    'sortstop .list': 'sortLists'
  },
  sortLists: function(e, ui) {
    var cardId = +ui.item.attr('data-id');
    var $list = ui.item.parent();
    var listId = +$list.attr('data-list-id');
    var position = $list.find('li').index(ui.item) + 1;

    App.trigger('moveCard', cardId, listId, position);
  },
  render: function() {
    this.$el.html('');
    this.renderLists();
    this.makeSortable();
    this.$el.append(new addListView().$el);
  },
  makeSortable: function() {
    this.$('ul.list').sortable({
      placeholder: 'sortable-placeholder',
      forcePlaceholderSize: true,
      items: '> li',
      connectWith: "ul.list",
      dropOnEmpty: true,
    });
  },
  renderLists: function() {
    this.collection.each(function(list) {
      this.$el.append(new ListView({ model: list }).$el);
    }.bind(this));
  },
  initialize: function() {
    this.render();
    this.listenTo(this.collection, 'add listsUpdated', this.render);
  }
});