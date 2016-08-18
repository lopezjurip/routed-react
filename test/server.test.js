// test/server.test.js
'use strict';

const exec = require('mz/child_process').exec;
const request = require('supertest');
const expect = require('chai').expect;

const app = require('../server/app');

describe('builds application', function () {
  it('builds to "build" directory', function () {
    // Disable mocha time-out because this takes a lot of time
    this.timeout(0);

    // Run process
    return exec('npm run build');
  });
});

describe('express serving', function () {
  it('responds to / with the index.html', function (done) {
    request(app)
      .get('/')
      .expect('Content-Type', /html/)
      .expect(200)
      .end((err, res) => {
        if (err) done(err);
        expect(res.text).to.contain('<div id="root"></div>');
        done();
      });
  });

  it('responds to favicon.icon request', function (done) {
    request(app)
      .get('/favicon.ico')
      .expect('Content-Type', 'image/x-icon')
      .expect(200)
      .end(done);
  });

  it('responds to any route with the index.html', function (done) {
    request(app)
      .get('/foo/bar')
      .expect('Content-Type', /html/)
      .expect(200)
      .end((err, res) => {
        if (err) done(err);
        expect(res.text).to.contain('<div id="root"></div>');
        done();
      });
  });
});
