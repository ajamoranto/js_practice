var descending = require('../descending');
var chai = require('chai');
var expect = chai.expect;

describe('testing descending', function() {
    context('takes numbers and arranges them in descending order', function() {
      it('returns 6541 for 5614', function() {
        var result = descending(5614);
        expect(result).to.equal(6541);
      });
    });
});