'use strict';

var Promise = require('bluebird');

module.exports = function (type) {
  var db = Promise.promisify(require('fh-mbaas-api').db);
  var log = require('fh-bunyan').getLogger(__filename + ' - ' + type);

  var wrapper = {
    create: function (req, res, next) {

      req.body.createTs = Date.now();
      req.body.updateTs = Date.now();

      log.info('creating %s with:', req.body);

      db({
        act: 'create',
        type: type,
        fields: req.body
      })
        .then(function (ret) {
          res.json(ret);
        })
        .catch(next);
    },
    read: function (req, res, next) {
      db({
        act: 'read',
        type: type,
        guid: req.params.id
      })
        .then(function (ret) {
          res.json(ret);
        })
        .catch(next);
    },
    update: function (req, res, next) {
      req.body.updateTs = Date.now();

      db({
        act: 'update',
        type: type,
        guid: req.params.id,
        fields: req.body
      })
        .then(function (ret) {
          res.json(ret);
        })
        .catch(next);
    },
    delete: function (req, res, next) {
      db({
        act: 'delete',
        type: type,
        guid: req.params.id,
      })
        .then(function (ret) {
          res.json(ret);
        })
        .catch(next);
    },
    list: function (req, res, next) {
      db({
        act: 'list',
        type: type,
        eq: req.query
      })
        .then(function (ret) {
          res.json(ret);
        })
        .catch(next);
    },
  };

  return wrapper;

};
