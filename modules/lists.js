var path = require('path');
var fs = require('fs');
var filePath = path.resolve(path.dirname(__dirname), 'data/lists.json');

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
}
