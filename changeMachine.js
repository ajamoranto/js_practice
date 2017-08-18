(function(){

  let amount = 47;
  let bills = [20, 10, 5, 1];
  let change = [];

  for (var i = 0; i < bills.length; i++){

    let total = amount
    change[i] = Math.floor(total / bills[i])
    amount = total - (change[i]*bills[i])

  }
  console.log(change)


})()
