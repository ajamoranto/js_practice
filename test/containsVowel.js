var containsVowel = require('../containsVowel');
var chai = require('chai');
var expect = chai.expect;

describe('testing containsVowel', function() {
    context('takes word and looks for vowels', function() {
      it('returns true for alpha', function() {
        var vowel = containsVowel("alpha");
        expect(vowel).to.equal(true);
      });
    });

    context('takes word and looks for vowels', function() {
        it('returns false for hmph', function() {
          var vowel = containsVowel("hmph");
          expect(vowel).to.equal(false);
        });
      });
});