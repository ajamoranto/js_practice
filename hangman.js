// //While loop
// (function(){
//   function hangman(x, y){
//     let word = x;
//     let letter = y;
//     let count = 0;
//     let wordArray = word.split('');
//     let position = word.indexOf(letter);
//
//     while (position !== -1) {
//       count++
//       position = word.indexOf(letter, position + 1);
//     }
//
//     if (count == 0) {
//       console.log("Sorry, the letter " + letter + " shows up " + count + " times in " + x)
//     } else {
//       console.log("Yeah, the letter " + letter + " exists " + count + " times in " + x)
//     }
//   }
//
//   hangman("Hello", "z")
//
// })()


//For loop
(function(){
  function hangman(x, y){
    let word = x;
    let letter = y;
    let count = 0;
    let wordArray = word.toLowerCase().split('');

    for (var i = 0; i < word.length; i++) {

      if (wordArray[i] == letter){
      count++
      }
    }

    if (count == 0) {
      console.log("Sorry, the letter " + letter + " shows up " + count + " times in " + x)
      return count;
    } else {
      console.log("Yeah, the letter " + letter + " exists " + count + " times in " + x)
      return count;
    }
  }
  hangman("Hello", "z");
  hangman("Hello", "h");

  module.exports = hangman;

})()
