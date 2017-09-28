var nickname = require('../nickname');
var chai = require('chai');
var expect = chai.expect;

describe('testing nickname', function() {
    context('checks if nickname is valid given the full name', function() {
      it('returns true if nickname letters are in fullname', function() {
        var valid = nickname("AJ", "Antonio Jacob");
        expect(valid).to.equal(true);
      });
    });
});