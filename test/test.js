const assert = require('assert');
const StringCalculator = require('../index');

describe('StringCalculator', function() {
  it('should return 0 for an empty string', function() {
    const calculator = new StringCalculator();
    assert.strictEqual(calculator.add(''), 0);
  });
})
