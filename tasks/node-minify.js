/*
 * grunt-node-minify
 *
 *
 * Copyright (c) 2016 Doug Simmons
 * Licensed under the MIT license.
 */

'use strict';
var compressor = require ('node-minify');
var Promise = require ('bluebird');
var chalk = require('chalk');

module.exports = function(grunt) {
  grunt.registerMultiTask('node-minify', 'Grunt plugin for node_minify', function() {
    var that = this;
    var done = that.async();

    // Merge task-specific and/or target-specific options with these defaults.
    var options = that.options({
    });

    var data = that.data;

    if (that.files.length < 1) {
      grunt.log.warn('Failed. No file targets were specified.');
      done(false);
    }

    that.files.forEach(function (file) {
      var input = file.src.filter(function (filepath) {
        // Warn on and remove invalid source files.
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        }
        return true;
      });

      if (input.length < 1) {
        grunt.log.warn('Failed. No source files to minify.');
        done(false);
      }

      var minify = new Promise(function (resolve, reject) {
        compressor.minify({
          compressor: (data.compressor !== undefined ? data.compressor : 'gcc'),
          input: input,
          output: file.dest,
          sync: (data.sync !== undefined ? data.sync : false),
          buffer: (data.buffer !== undefined ? data.buffer : 1024 * 1000),
          publicFolder: data.publicFolder,
          options: options,
          callback: function (err, min) {
            if (err) {
              grunt.log.error(err);
              reject('error');
            }
            if (process.env.GRUNT_NODE_MINIFY_VERBOSE) {
              grunt.log.writeln(min);
            }
            resolve('success');
          }
        });
      });

      minify.then(function (result) {
        if (result === 'success' && grunt.file.exists(file.dest)) {
          grunt.log.ok('File ' + chalk.cyan(file.dest) + ' created.');
          done();
        }
      }, function (result) {
          grunt.log.warn('Failed to create file ' +  chalk.yellow(file.dest) + ' due to ' + result + '.');
          done(false);
      });

    });
  });
};
