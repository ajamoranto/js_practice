(function(){

  function cherokeeHare(startingPopulation, birthRate, numberOfWeeks){
    // let startingPopulation = 200;
    // let birthRate = 0.1;
    // let numberOfWeeks = 5;
    let numHare;
  
    for (var i = 0; i < numberOfWeeks; i++){
     startingPopulation = (startingPopulation * birthRate) + startingPopulation
     numHare = startingPopulation
    }
    return numHare;
  }

  module.exports = cherokeeHare;


  // console.log("There will be " + numHare + " Cherokee Hares after " + numberOfWeeks + " weeks")


})()
