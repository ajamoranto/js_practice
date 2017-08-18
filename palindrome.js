(function(){

  let word = "racecar";
  let wordArray = word.split('');
  let reverseArray = wordArray.reverse()
  let reverseWord = wordArray.join('')

  if (word === reverseWord) {
    console.log("True")
  } else {
    console.log("False")
  }

})()
