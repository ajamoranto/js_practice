// (function(){
//   let mountainArray = [20000, 35000, 40000, 22000, 10000, 70000, 36000];
//   let sortedMountains = mountainArray.sort(function(a,b){return b-a});
//   let tallestMountain = sortedMountains[0];
//   return console.log(tallestMountain)
// })()

// let mountainArray = [20000, 35000, 40000, 22000, 10000, 70000, 36000];


(function(){

  let mountainArray = [1, 2, 3];

  function tallestMountain(mountainArray){
  let sortedMountains = mountainArray.sort(function(a,b){return b-a});
  return sortedMountains[0];
  }

  module.exports = tallestMountain;
})()