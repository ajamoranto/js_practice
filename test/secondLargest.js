var secondLargest = require('../secondLargest');
var chai = require('chai');
var expect = chai.expect;

describe('testing secondLargest', function() {
    context('takes array of numbers', function() {
      it('returns 5 for [1, 4, 5, 8]', function() {
        var second = secondLargest([1, 4, 5, 8]);
        expect(second).to.equal(5);
      });
    });
});