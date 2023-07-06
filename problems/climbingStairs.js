let memo = []

var climbStairs = function (n) {
  /**
  if n = 
  
  0 // 1 // 1 total
  1 // 1 // 1 
  2 // 11, 2 // 2
  3 // 111, 12, 21 // 3
  4 // 1111, 112, 121, 211, 22 // 5
  5 // 11111, 1112, 1121, 1211, 2111, 122, 212, 221 // 8
  6 // 13
  7 // 21
  **/

  // use recursion to solve
  // return answer will equal to the (n - 1) + (n - 2)

  // base casees

  // if (n <= 2){
  //     return n
  // }
  // else {
  //     return climbStairs(n - 1) + climbStairs(n - 2)
  // }

  // this is unoptimal because it is recalculating everytime the base case is being met
  // what we can do is utilize a cache for previous calculated inputs

  if (n <= 2){
    return n
  }
  if (memo[n] != undefined) {
    return memo[n]
  }
  memo[n] = climbStairs(n - 1) + climbStairs(n - 2)
  return memo[n]
  
};

console.log(climbStairs(5))