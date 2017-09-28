var cherokeeHare = require('../cherokeeHare');
var chai = require('chai');
var expect = chai.expect;

describe('Testing cherokeeHare', function() {
    context('finds final number of hare', function() {
      it('returns 322.102 after 5 weeks', function() {
        var hare = cherokeeHare(200, .1, 5);
        expect(hare).to.equal(322.102);
      });
    });
});