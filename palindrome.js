(function(){

  function palindrome(word){
    // let word = "racecar";
    // let wordArray = word.split('');
    // let reverseArray = wordArray.reverse()
    // let reverseWord = wordArray.join('')
  
    if (word.split('').reverse().join('') === word) {
      console.log("True")
      return true;
    } else {
      console.log("False")
      return false;
    }

    
  }
  
  module.exports = palindrome;
})()
