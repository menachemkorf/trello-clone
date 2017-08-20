var CardDetailsView = Backbone.View.extend({
  className: 'overlay',
  template: JST.card_details,
  editDescriptionTemplate: JST.edit_description,
  events: {
    'click': 'close',
    'click .close': 'back',
    'blur .title': 'editTitle',
    'click .edit-description': 'renderEditDescriptionForm',
    'click .description .cancel': 'cancelEdit',
    'submit .description form': 'editDescription',
    'keyup .add-comment': 'toggleButton',
    'submit .add-comment': 'addComment',
    'click .labels': 'renderLabelsForm',
    'click .labels-container a': 'renderLabelsForm',
    'click .due-date': 'renderDueDateForm',
    'click .move': 'renderMoveForm',
    'click .copy': 'renderCopyForm',
    'click .subscribe': 'toggleSubscribed',
    'click .archive': 'removeCard',
  },
  close: function(e) {
    if (e.target === this.el) {
      this.back();
    }
  },
  back: function() {
    this.removePopup();
    router.navigate('/', { trigger: true });
  },
  removePopup: function() {
    this.popup && this.popup.remove();
  },
  editTitle: function() {
    var val = $('.title').val();
    this.model.save({ title: val });
  },
  renderEditDescriptionForm: function(e) {
    e.preventDefault();

    this.$('.description').html(this.editDescriptionTemplate(this.model.toJSON()));
    this.$('.description').find('textarea').focus();
  },
  editDescription: function(e) {
    e.preventDefault();

    var val = this.$('.description-input').val();
    this.model.save({ description: val });
  },
  cancelEdit: function(e) {
    e.preventDefault();
    this.render();
  },
  addComment: function(e) {
    e.preventDefault();

    var time = new Date();
    var val = $(e.target).find('textarea').val();
    var comments = this.model.get('comments');
    comments.unshift({time: time, body: val});
    this.model.save();
  },
  toggleButton: function(e) {
    var $f = $(e.currentTarget);
    var $button = $f.find('[type="submit"]');
    if ($(e.target).val().length) {
      $button.prop('disabled', false);
    } else {
      $button.prop('disabled', true);
    }
  },
  renderLabelsForm: function(e) {
    e.preventDefault();

    this.removePopup();
    var $container = $(e.target).parent();

    this.popup = new LabelsView({
      model: this.model,
      labels: App.labels,
      colors: App.colors,
      offset: $container.offset()
    });

    $('body').append(this.popup.$el);
  },
  renderDueDateForm: function(e) {
    e.preventDefault();

    this.removePopup();
    var $container = $(e.target).parent();

    this.popup = new EditDueDateView({
      model: this.model,
      offset: $container.offset()
    });

    $('body').append(this.popup.$el);
  },
  renderMoveForm: function(e) {
    e.preventDefault();

    this.removePopup();
    var $container = $(e.target).parent();

    this.popup = new MoveCardView({
      model: this.model,
      lists: App.lists,
      offset: $container.offset()
    });

    $('body').append(this.popup.$el);
  },
  renderCopyForm: function(e) {
    e.preventDefault();

    this.removePopup();
    var $container = $(e.target).parent();

    this.popup = new CopyCardView({
      model: this.model,
      lists: App.lists ,
      offset: $container.offset()
    });

    $('body').append(this.popup.$el);
  },
  toggleSubscribed: function(e) {
    e.preventDefault();
    var subscribed = this.model.get('subscribed');

    if (subscribed) {
      this.model.save({ subscribed: false });
      App.trigger('unsubscribe', this.model);
    } else {
      this.model.save({ subscribed: true });
    }
  },
  removeCard: function(e) {
    e.preventDefault();

    this.model.destroy();
    App.trigger('sortList', this.model.get('listId'));
    router.navigate('/', { trigger: true });
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
    $('body').append(this.$el);
    this.listenTo(this.model, 'change', this.render);
  }
});