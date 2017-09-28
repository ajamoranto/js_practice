var greaterThan = require('../greaterThan');
var chai = require('chai');
var expect = chai.expect;

describe('testing greatherThan', function() {
    context('takes 2 numbers and checks if y is greater than x', function() {
      it('returns true for greatherThan', function() {
        var result = greaterThan(5, 6);
        expect(result).to.equal(true);
      });
    });

    context('takes 2 numbers and checks if y is greater than x', function() {
        it('returns false for greatherThan', function() {
          var result = greaterThan(5, 4);
          expect(result).to.equal(false);
        });
      });
});