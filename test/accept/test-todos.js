'use strict';

describe('todos api', function () {
  var expect = require('chai').expect;
  var request, app;

  beforeEach(function () {
    app = require('express')();
    app.use('/todos', require('lib/todos'));

    request = require('supertest')(app);
  });

  describe('list (GET /)', function () {
    it('should return a list of records', function (done) {
      request.get('/todos')
        .expect(200)
        .expect('content-type', /json/)
        .end(function (err, res) {
          expect(err).to.be.null;
          expect(res.body).to.be.an('object');
          expect(res.body.count).to.be.a.number;
          expect(res.body.list).to.be.an('array');
          done();
        });
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
