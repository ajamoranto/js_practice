var changeMachine = require('../changeMachine');
var chai = require('chai');
var expect = chai.expect;

describe('Testing changeMachine', function() {
    context('finds number of bills per value', function() {
      it('returns [2, 0, 1, 2] from 47', function() {
        var bills = changeMachine(47);
        expect(bills).to.eql([2, 0, 1, 2]);
      });
    });
});