var Card = Backbone.Model.extend({
  defaults: function() {
    return {
      "time": new Date(),
      "due": "",
      "description": "",
      "labels": [],
      "comments": [],
      "subscribed": false,
      "modified": false
    }
  }
});