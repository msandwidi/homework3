var mocha = require('mocha')
var suite = mocha.suite
var test = mocha.test
var setup = mocha.setup;
var assert = require('chai').assert

suite('Array', function() {
  setup(function() {
    // ...
  });

  suite('#indexOf()', function() {
    test('should return -1 when not present', function() {
      assert.equal(-1, [1, 2, 3].indexOf(4));
    });
  });
});
