'use strict';

var router = module.exports = require('express').Router();
var handlers = require('./collection')('tasks');

router.use(require('body-parser').json());

router.get('/', handlers.list);
router.post('/', handlers.create);
router.get('/:id', handlers.read);
router.delete('/:id', handlers.delete);
router.put('/:id', handlers.update);
