var hangman = require('../hangman');
var chai = require('chai');
var expect = chai.expect;

describe('Testing hangman', function() {
    context('looks for letter in word', function() {
      it('returns 2 because l does not appear in word', function() {
        var test = hangman('hello', 'l');
        expect(test).to.equal(2);
      });
    });
});