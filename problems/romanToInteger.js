const romanToInt = function (s) {
  let map = 
    {
      I : 1,
      V : 5,
      X : 10,
      L : 50,
      C : 100,
      D : 500,
      M : 1000
    }

  // if the nxt value is equal, add it together to the total sum
  // if the nexxt value is < then i , subtract i, then move on

  let sum = 0;

  for (let i of s) {
    // console.log(map[i])
    if (map[i] < map[i+1]) {
      sum -= map[i]
    }
    else {
      sum += map[i]
    }
    

  }
  
  console.log(sum)
};

let s = "MCMXCIV";
// 1994

console.log(romanToInt(s));