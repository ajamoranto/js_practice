var palindrome = require('../palindrome');
var chai = require('chai');
var expect = chai.expect;

describe('Testing palindrome', function () {

        context('will check if work is palindrome', function () {
            it('returns true for racecar', function () {
                var word = palindrome("racecar");

                expect(word).to.equal(true);
            });
        });

        context('will check if work is palindrome', function () {
            it('returns false for hello', function () {
                var word = palindrome("hello");

                expect(word).to.equal(false);
            });
        });
});