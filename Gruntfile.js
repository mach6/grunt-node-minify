/*
 * grunt-node-minify
 *
 *
 * Copyright (c) 2016 Doug Simmons
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    jshint: {
      files: [
        'Gruntfile.js',
        'tasks/**/*.js',
        'test/**/*.js'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Configuration to be run (and then tested).
    'node-minify': {
      gcc: {
        files: {
          'tmp/gcc_min.js': ['test/**/*.js']
        }
      },
      nocompress: {
        compressor: 'no-compress',
        files: {
          'tmp/no-compress.js': ['test/**/*.js']
        }
      },
      //requires java
      gcclegacy: {
        compressor: 'gcc-legacy',
        files: {
          'tmp/gcc-legacy_min.js': ['test/**/*.js']
        }
      },
      //requires java
      gccjava: {
        compressor: 'gcc-java',
        files: {
          'tmp/gcc-java_min.js': ['test/**/*.js']
        }
      },
      uglifyjs: {
        compressor: 'uglifyjs',
        files: {
          'tmp/uglifyjs_min.js': ['test/**/*.js']
        }
      },
      babili: {
        compressor: 'babili',
        files: {
          'tmp/babili_min.js': ['test/**/*.js']
        }
      },
      //requires java
      yuijs: {
        compressor: 'yui-js',
        files: {
          'tmp/yui-js_min.js': ['test/**/*.js']
        }
      },
      //requires java
      yui: {
        compressor: 'yui',
        files: {
          'tmp/yui_one.css': ['test/css/**/*.css']
        }
      },
      sqwish: {
        compressor: 'sqwish',
        files: {
          'tmp/sqwish_one.css': ['test/css/**/*.css']
        }
      },
      cleancss: {
        compressor: 'clean-css',
        files: {
          'tmp/cleancss_one.css': ['test/css/**/*.css']
        }
      },
      csso: {
        compressor: 'csso',
        files: {
          'tmp/csso_one.css': ['test/css/**/*.css']
        }
      }
    },

    mochacli: {
      src: ['test/**/*.js'],
      options: {
        timeout: 6000,
        'check-leaks': true,
        ui: 'tdd',
        reporter: 'spec'
      }
    }
  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-mocha-cli');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'node-minify', 'mochacli']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
