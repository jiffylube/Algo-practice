// recursion

// 1) base case
//    if (found piece of chocolate) , 
//    return "yum yum"

// 2) recursive call to itself
//    else if ( there are no more dolls )
//    return ":("
//    else processDoll(the smaller doll)

// example #1
// function factorial(n) {
//   if (n == 1 || n == 0) {
//     return 1
//   }
//   else {
//     return n * factorial(n - 1)
//   }
// }

// console.log(factorial(4))


// example #2
// let recur = function (n) {
//   if (n <= 1) {
//     return true
//   }
//   if (n[0] == n[n.length - 1]) {
//     return recur(n.slice(1,-1))
//   }
//   return false
// }

// let palindrome = function (n) {
//   n = n.toLowerCase().replace(/[^A-Za-z0-9]/g, '')
//   console.log(recur(n))
// }

// palindrome('mm')