function descending(n){
    let numArray = (''+n).split('').sort(function(a,b){return b-a});
    return Number(numArray.join(''));
 }
 module.exports = descending;