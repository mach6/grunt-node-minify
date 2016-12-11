[![Build Status](https://travis-ci.org/mach6/grunt-node-minify.svg?branch=master)](https://travis-ci.org/mach6/grunt-node-minify)

# grunt-node-minify

Grunt plugin for [node-minify](https://github.com/srod/node-minify)

## Getting Started
This plugin requires Grunt `>=1.0.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-node-minify --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-node-minify');
```

## The "grunt-node-minify" task

### Overview
In your project's Gruntfile, add a section named `node-minify` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  'node-minify': {
    your_task: {
      compressor: '',     // Optional, defaults to `gcc`
      sync: '',           // Optional, defaults to `false`
      buffer: '',         // Optional, defaults to `(1024 * 1000)`
      publicFolder: '',   // Optional, defaults to `undefined`
      options: {
        // Optional, compressor specific options go here. See node-minify.
      },
      your_target: {
        // Target-specific file lists and/or options go here.
      }
    }
  }
});
```

### Options
See [node-minify](https://github.com/srod/node-minify) for compressors and compressor `options {...}` which can be
specified.

### Usage Examples

#### Default Options
In this example, the default options are used to minify javascript files recursively found in `src/` to the file `dest/gcc.min.js`, using _google-closure-compiler-js_.

```js
grunt.initConfig({
  'node-minify': {
    gcc: {
      files: {
        'dest/gcc.min.js': ['src/**/*.js']
      }
    }
  }
});
```

#### Custom Options
In this example, custom options are used to minify javascript files recursively found in the `publicFolder` (src) to the file `dest/uglifyjs.min.js`, using _uglifyjs_ with `options { .. }`.

```js
grunt.initConfig({
  'node-minify': {
    uglifyjs: {
      compressor: 'uglifyjs',
      publicFolder: 'src/',
      options: {
        warnings: true,
        mangle: false,
        compress: false
      }
      files: {
        'dest/uglifyjs.min.js':  ['**/*.js']
      }
    }
  }
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_1.0.0_ (TBD)

## License
[MIT](LICENSE)
