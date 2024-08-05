const assert = require('assert');
const StringCalculator = require('../index');

describe('StringCalculator', function() {
  it('should return 0 for an empty string', function() {
    const calculator = new StringCalculator();
    assert.strictEqual(calculator.add(''), 0);
  });

  it('should return the number itself for a single number', function() {
    const calculator = new StringCalculator();
    assert.strictEqual(calculator.add('1'), 1);
  });

  it('should return the sum of two numbers', function() {
    const calculator = new StringCalculator();
    assert.strictEqual(calculator.add('1,2'), 3);
  });

  it('should return the sum of multiple numbers', function() {
    const calculator = new StringCalculator();
    assert.strictEqual(calculator.add('1,2,3'), 6);
  });


})
