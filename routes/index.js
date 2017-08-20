var express = require('express');
var router = express.Router();
var path = require('path');
var Lists = require(path.resolve(path.dirname(__dirname), 'modules/lists'));
var Cards = require(path.resolve(path.dirname(__dirname), 'modules/cards'));
var Colors = require(path.resolve(path.dirname(__dirname), 'modules/colors'));
var Labels = require(path.resolve(path.dirname(__dirname), 'modules/labels'));

router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Express',
    listsJSON: Lists.get(),
    cardsJSON: Cards.get(),
    colorsJSON: Colors.get(),
    labelsJSON: Labels.get(),
  });
});

router.post('/lists', function(req, res, next) {
  var list = req.body;
  list = Lists.add(list);
  res.json(list);
});

router.post('/cards', function(req, res, next) {
  var card = req.body;
  card = Cards.add(card);
  res.json(card);
});

router.put('/cards', function(req, res, next) {
  var cards = req.body;
  cards = Cards.updateAll(cards);
  res.json(cards);
});

router.put('/cards/:id', function(req, res, next) {
  var id = +req.params.id
  var card = req.body;
  card = Cards.update(id, card);

  res.json(card);
});

router.delete('/cards/:id', function(req, res, next) {
  var id = +req.params.id
  var card = req.body;
  Cards.remove(id);

  res.status(200).end();
});

router.post('/labels', function(req, res, next) {
  var label = req.body;
  label = Labels.add(label);
  res.json(label);
});

router.put('/labels/:id', function(req, res, next) {
  var id = +req.params.id
  var label = req.body;
  label = Labels.update(id, label);

  res.json(label);
});

router.delete('/labels/:id', function(req, res, next) {
  var id = +req.params.id
  var label = req.body;
  Labels.remove(id);

  res.status(200).end();
});

module.exports = router;
