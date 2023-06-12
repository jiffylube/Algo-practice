let calculate = function (amount,days) {
  
  // give result of next day
  // leave overnight for how many days
  // 1 day, result the next day

  let result = amount;
  let i = 0;

  while (i < days){
    result = result * 2;
    i++;
  }

  console.log(result)

}

calculate(2,59)