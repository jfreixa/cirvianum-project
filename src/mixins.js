// src/mixins.js
var globalMixins = {
  /* OpenSans is a dynamic mixin  */
  OpenSans: function (obj, value) {
    return {
      'font-family': 'Open Sans, sans-serif',
      'font-style': 'normal',
      'font-size': value,
      'font-weight': 200,
      '-webkit-font-smoothing': 'antialiased',
      '-moz-osx-font-smoothing': 'grayscale'
    }
  }
}
module.exports = globalMixins