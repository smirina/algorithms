const { assert } = require('chai');
const { testFunc } = require('../lib.js')

describe("testFunc", function() {

  it("выводит текст", function() {
    assert.equal(testFunc(), 'it works!');
  });

});
