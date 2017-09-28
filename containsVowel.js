function containsVowel(str) {
    if(str.match(/[aeiouAEIOU]/)) {
      return true;
    } else {
      return false;
    }
  };
  module.exports = containsVowel;