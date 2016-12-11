/*
 * grunt-node-minify
 *
 *
 * Copyright (c) 2016 Doug Simmons
 * Licensed under the MIT license.
 */

'use strict';
var assert = require('assert');
var grunt = require('grunt');

suite('#grunt-node-minify', function() {
  test('gcc_min should exist', function() {
    assert.equal(grunt.file.exists('tmp/gcc_min.js'), true);
  });

  test('gcc-java_min should exist', function() {
    assert.equal(grunt.file.exists('tmp/gcc-java_min.js'), true);
  });

  test('gcc-legacy_min should exist', function() {
    assert.equal(grunt.file.exists('tmp/gcc-legacy_min.js'), true);
  });

  test('babili_min should exist', function() {
    assert.equal(grunt.file.exists('tmp/babili_min.js'), true);
  });

  test('uglifyjs_min should exist', function() {
    assert.equal(grunt.file.exists('tmp/uglifyjs_min.js'), true);
  });

  test('yui-js_min should exist', function() {
    assert.equal(grunt.file.exists('tmp/yui-js_min.js'), true);
  });

  test('yui_one should exist', function() {
    assert.equal(grunt.file.exists('tmp/yui_one.css'), true);
  });

  test('sqwish_one should exist', function() {
    assert.equal(grunt.file.exists('tmp/sqwish_one.css'), true);
  });

  test('no-compress should exist', function() {
    assert.equal(grunt.file.exists('tmp/no-compress.js'), true);
  });

});
