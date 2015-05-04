'use strict';

/* deps: mocha */
var File = require('vinyl');
var should = require('should');
var dest = require('./');


describe('properties', function () {
  it('should add a `data.dest` property to a file', function(done) {
    var file = new File({
      path: 'a/b/c/d/e.less',
      contents: new Buffer('foo')
    });

    var stream = dest();
    var i = 0;
    stream.on('data', function (file) {
      i++;
      file.data.should.be.an.object;
      file.data.dest.should.be.an.object;
    });

    stream.on('end', function () {
      i.should.equal(1);
      done();
    });
    stream.write(file);
    stream.end();
  });

  it('should add a `cwd` property to `data.dest`', function(done) {
    var file = new File({
      path: 'a/b/c/d/e.less',
      contents: new Buffer('foo')
    });

    var stream = dest();
    var i = 0;
    stream.on('data', function (file) {
      i++;
      file.data.dest.cwd.should.be.a.string;
    });

    stream.on('end', function () {
      i.should.equal(1);
      done();
    });
    stream.write(file);
    stream.end();
  });

  it('should add a `base` property to `data.dest`', function(done) {
    var file = new File({
      path: 'a/b/c/d/e.less',
      contents: new Buffer('foo')
    });

    var stream = dest();
    var i = 0;
    stream.on('data', function (file) {
      i++;
      file.data.dest.base.should.be.a.string;
    });

    stream.on('end', function () {
      i.should.equal(1);
      done();
    });
    stream.write(file);
    stream.end();
  });

  it('should add a `relative` property to `data.dest`', function(done) {
    var file = new File({
      path: 'a/b/c/d/e.less',
      contents: new Buffer('foo')
    });

    var stream = dest();
    var i = 0;
    stream.on('data', function (file) {
      i++;
      file.data.dest.relative.should.be.a.string;
    });

    stream.on('end', function () {
      i.should.equal(1);
      done();
    });
    stream.write(file);
    stream.end();
  });

  it('should add a `extname` property to `data.dest`', function(done) {
    var file = new File({
      path: 'a/b/c/d/e.less',
      contents: new Buffer('foo')
    });

    var stream = dest();
    var i = 0;
    stream.on('data', function (file) {
      i++;
      file.data.dest.extname.should.be.a.string;
    });

    stream.on('end', function () {
      i.should.equal(1);
      done();
    });
    stream.write(file);
    stream.end();
  });

  it('should add a `basename` property to `data.dest`', function(done) {
    var file = new File({
      path: 'a/b/c/d/e.less',
      contents: new Buffer('foo')
    });

    var stream = dest();
    var i = 0;
    stream.on('data', function (file) {
      i++;
      file.data.dest.basename.should.be.a.string;
    });

    stream.on('end', function () {
      i.should.equal(1);
      done();
    });
    stream.write(file);
    stream.end();
  });

  it('should add a `filename` property to `data.dest`', function(done) {
    var file = new File({
      path: 'a/b/c/d/e.less',
      contents: new Buffer('foo')
    });

    var stream = dest();
    var i = 0;
    stream.on('data', function (file) {
      i++;
      file.data.dest.filename.should.be.a.string;
    });

    stream.on('end', function () {
      i.should.equal(1);
      done();
    });
    stream.write(file);
    stream.end();
  });

  it('should add a `path` property to `data.dest`', function(done) {
    var file = new File({
      path: 'a/b/c/d/e.less',
      contents: new Buffer('foo')
    });

    var stream = dest();
    var i = 0;
    stream.on('data', function (file) {
      i++;
      file.data.dest.path.should.be.a.string;
    });

    stream.on('end', function () {
      i.should.equal(1);
      done();
    });
    stream.write(file);
    stream.end();
  });


  it('should add a `__filename` property to `data.dest`', function(done) {
    var file = new File({
      path: 'a/b/c/d/e.less',
      contents: new Buffer('foo')
    });

    var stream = dest();
    var i = 0;
    stream.on('data', function (file) {
      i++;
      file.data.dest.__filename.should.be.a.string;
    });

    stream.on('end', function () {
      i.should.equal(1);
      done();
    });
    stream.write(file);
    stream.end();
  });

  it('should add a `__dirname` property to `data.dest`', function(done) {
    var file = new File({
      path: 'a/b/c/d/e.less',
      contents: new Buffer('foo')
    });

    var stream = dest();
    var i = 0;
    stream.on('data', function (file) {
      i++;
      file.data.dest.__dirname.should.be.a.string;
    });

    stream.on('end', function () {
      i.should.equal(1);
      done();
    });
    stream.write(file);
    stream.end();
  });
});

describe('dest values', function () {
  it('should make `dest.cwd` the same as file.cwd', function(done) {
    var file = new File({
      path: 'a/b/c/d/e.less',
      contents: new Buffer('foo')
    });

    var cwd = file.cwd;

    var stream = dest();
    var i = 0;
    stream.on('data', function (file) {
      i++;
      file.data.dest.cwd.should.equal(file.cwd)
    });

    stream.on('end', function () {
      i.should.equal(1);
      done();
    });
    stream.write(file);
    stream.end();
  });

  it('should make `dest.base` property to `data.dest`', function(done) {
    var file = new File({
      path: 'a/b/c/d/e.less',
      contents: new Buffer('foo')
    });

    var stream = dest();
    var i = 0;
    stream.on('data', function (file) {
      file.data.dest.base.should.be.a.string;
      i++;
    });

    stream.on('end', function () {
      i.should.equal(1);
      done();
    });
    stream.write(file);
    stream.end();
  });

  it('should make `dest.relative` property to `data.dest`', function(done) {
    var file = new File({
      path: 'a/b/c/d/e.less',
      contents: new Buffer('foo')
    });

    var stream = dest();
    var i = 0;
    stream.on('data', function (file) {
      file.data.dest.relative.should.be.a.string;
      i++;
    });

    stream.on('end', function () {
      i.should.equal(1);
      done();
    });
    stream.write(file);
    stream.end();
  });

  it('should make `dest.extname` property to `data.dest`', function(done) {
    var file = new File({
      path: 'a/b/c/d/e.less',
      contents: new Buffer('foo')
    });

    var stream = dest();
    var i = 0;
    stream.on('data', function (file) {
      file.data.dest.extname.should.be.a.string;
      i++;
    });

    stream.on('end', function () {
      i.should.equal(1);
      done();
    });
    stream.write(file);
    stream.end();
  });

  it('should make `dest.basename` property to `data.dest`', function(done) {
    var file = new File({
      path: 'a/b/c/d/e.less',
      contents: new Buffer('foo')
    });

    var stream = dest();
    var i = 0;
    stream.on('data', function (file) {
      file.data.dest.basename.should.be.a.string;
      i++;
    });

    stream.on('end', function () {
      i.should.equal(1);
      done();
    });
    stream.write(file);
    stream.end();
  });

  it('should make `dest.filename` property to `data.dest`', function(done) {
    var file = new File({
      path: 'a/b/c/d/e.less',
      contents: new Buffer('foo')
    });

    var stream = dest();
    var i = 0;
    stream.on('data', function (file) {
      file.data.dest.filename.should.be.a.string;
      i++;
    });

    stream.on('end', function () {
      i.should.equal(1);
      done();
    });
    stream.write(file);
    stream.end();
  });

  it('should make `dest.path` property to `data.dest`', function(done) {
    var file = new File({
      path: 'a/b/c/d/e.less',
      contents: new Buffer('foo')
    });

    var stream = dest();
    var i = 0;
    stream.on('data', function (file) {
      file.data.dest.path.should.be.a.string;
      i++;
    });

    stream.on('end', function () {
      i.should.equal(1);
      done();
    });
    stream.write(file);
    stream.end();
  });


  it('should make `dest.__filename` property to `data.dest`', function(done) {
    var file = new File({
      path: 'a/b/c/d/e.less',
      contents: new Buffer('foo')
    });

    var stream = dest();
    var i = 0;
    stream.on('data', function (file) {
      file.data.dest.__filename.should.be.a.string;
      i++;
    });

    stream.on('end', function () {
      i.should.equal(1);
      done();
    });
    stream.write(file);
    stream.end();
  });

  it('should make `dest.__dirname` property to `data.dest`', function(done) {
    var file = new File({
      path: 'a/b/c/d/e.less',
      contents: new Buffer('foo')
    });

    var stream = dest();
    var i = 0;
    stream.on('data', function (file) {
      file.data.dest.__dirname.should.be.a.string;
      i++;
    });

    stream.on('end', function () {
      i.should.equal(1);
      done();
    });
    stream.write(file);
    stream.end();
  });
});
