'use strict';

module.exports = function () {
  function bar () {
    console.log('bar');
  }
  return {
    fooBar: function () {
      bar();
    }
  };
};
