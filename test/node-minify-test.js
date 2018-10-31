/*
 * grunt-node-minify
 *
 *
 * Copyright (c) 2016-2018 Doug Simmons
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

  test('babel_minify should exist', function() {
    assert.equal(grunt.file.exists('tmp/babel_minify.js'), true);
  });

  test('uglifyjs_min should exist', function() {
    assert.equal(grunt.file.exists('tmp/uglifyjs_min.js'), true);
  });

  test('uglifyes_min should exist', function() {
    assert.equal(grunt.file.exists('tmp/uglifyes_min.js'), true);
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

  test('cleancss should exist', function() {
    assert.equal(grunt.file.exists('tmp/cleancss_one.css'), true);
  });

  test('csso should exist', function() {
    assert.equal(grunt.file.exists('tmp/csso_one.css'), true);
  });

  test('crass should exist', function() {
    assert.equal(grunt.file.exists('tmp/crass_one.css'), true);
  });

  test('no-compress should exist', function() {
    assert.equal(grunt.file.exists('tmp/no-compress.js'), true);
  });

  test('butternut should exist', function() {
    assert.equal(grunt.file.exists('tmp/buternut-js_min.js'), true);
    assert.equal(grunt.file.exists('tmp/buternut-js_min.js.map'), true);
  });

  test('htmlminifier should exist', function() {
    assert.equal(grunt.file.exists('tmp/htmlminifier.html'), true);
  });

});
