function secondLargest(myArray) {
    let second = myArray.sort(function (a, b) {return b - a;})[1];
    return second;
  };

  module.exports = secondLargest;