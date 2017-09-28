var avg = require('../avg');
var chai = require('chai');
var expect = chai.expect;

describe('testing avg', function() {
    context('takes three numbers and finds the avg', function() {
      it('returns 5 for sum', function() {
        var average = avg(1, 5, 9);
        expect(average).to.equal(5);
      });
    });
});