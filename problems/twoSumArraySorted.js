// return indices of sum of two numbesr that will equal to target 

let twoSum = function (numbers, target) {

  // make two pointers, one starting in front, one starting in back
  // check if sum equals to target
  // if not, then iterate pointer 1, until the end
  

  let a = 0;
  let b = numbers.length - 1;

  while (a < b) {
    let sum = numbers[a] + numbers[b];
    if (sum === target) {
      console.log([a + 1, b + 1])
    }
    else if (sum > target) {
      b--;
    }
    else a++;
  }

}

twoSum([1,2,3,6,10],9)