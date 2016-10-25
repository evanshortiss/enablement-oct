'use strict';

describe('todos api', function () {

  var request, app;

  beforeEach(function () {
    app = require('express')();
    app.use('/todos', require('lib/todos'));

    request = require('supertest')(app);
  });

  describe('list (GET /)', function () {
    it('should return a list of records', function (done) {
      // TEST CODE HERE
      // request.get('/todos')
      done();
    });
  });

  describe('list (GET /:id)', function () {

  });

  describe('list (POST /)', function () {

  });

  describe('list (PUT /:id)', function () {

  });

  describe('list (DELTE /:id)', function () {

  });
});
