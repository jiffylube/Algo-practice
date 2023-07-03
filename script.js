let recur = function (n) {
  if (n <= 1) {
    return true
  }
  if (n[0] == n[n.length - 1]) {
    return recur(n.slice(1,-1))
  }
  return false
}

let palindrome = function (n) {
  n = n.toLowerCase().replace(/[^A-Za-z0-9]/g, '')
  console.log(recur(n))
}

palindrome('mm')