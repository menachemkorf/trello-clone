var path = require('path');
var fs = require('fs');
var _ = require('underscore');
var filePath = path.resolve(path.dirname(__dirname), 'data/labels.json');

module.exports = {
  __readFile: function() {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  },
  getLastId: function() {
    return this.__readFile().lastId;
  },
  get: function(){
    return this.__readFile().data;
  },
  add: function(data) {
    data.id = this.getLastId() + 1;
    var lists = this.get();
    lists.push(data);
    fs.writeFileSync(filePath, JSON.stringify({
      lastId: data.id,
      data: lists
    }), 'utf8');

    return data;
  },
  updateAll: function(data) {
    fs.writeFileSync(filePath, JSON.stringify({
      lastId: this.getLastId(),
      data: data
    }), 'utf8');

    return data;
  },
  update: function(id, cardData) {
    var cards = this.get();
    var currentCard = _(cards).findWhere({ id: id });
    _.extend(currentCard, cardData);

    fs.writeFileSync(filePath, JSON.stringify({
      lastId: this.getLastId(),
      data: cards
    }), 'utf8');

    return currentCard;
  },

  remove: function(id) {
    var cards = this.get();
    var currentCard = _(cards).findWhere({ id: id });

    cards = _(cards).reject(function(a) {
      return a.id === id;
    });

    fs.writeFileSync(filePath, JSON.stringify({
      lastId: this.getLastId(),
      data: cards
    }), 'utf8');

    return true;
  }
}
