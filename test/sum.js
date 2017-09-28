var sum = require('../sum');
var chai = require('chai');
var expect = chai.expect;

describe('testing sum', function() {
    context('takes two numbers and adds them', function() {
      it('returns 4 for sum', function() {
        var total = sum(2, 2);
        expect(total).to.equal(4);
      });
    });
});