// select sort ?

let n = [1,2,5,6,7,3,8,9,2,3,4]


let selectSort = function (arr) {
  for (let i = 0; i < arr.length; i++){
    let lowest = i;

    for (let j = i + 1; j < arr.length; j++){
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }

    if (lowest !== i) {
      [arr[i], arr[lowest]] = [arr[lowest], arr[i]]
    }
  }

  return arr
}

console.log(n)
console.log(selectSort(n))