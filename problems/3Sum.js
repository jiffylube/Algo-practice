// constraints
// 3 <= nums.length <= 3000
// -105 <= nums[i] <= 105

// look for every distinct non repeating 3 integars' sum that equals 0

var threeSum = function (nums) {

  nums.sort((a,b) => a-b)

  let stack = [];

  for (let i = 0; i < nums.length; i++){
    for (let j = i + 1; j < nums.length; j++){
      for (let k = j + 1; k < nums.length; k++){
        // console.log(nums[i],nums[j],nums[k])

        if (nums[i] + nums[j] + nums[k] === 0) {
          stack.push([nums[i], nums[j], nums[k]])
        }
      }
    }
  }

  // check if any arrays are same
  // if so, delete the second array

  console.log(stack)

  for (let i = 0; i < stack.length; i++){
    for (let j = i + 1; j < stack.length; j++){
      if (stack[j].toString() === stack[i].toString()) {
        stack.splice(j, 1);
        j = j - 1;
      }
    }
  }

  console.log(stack)

};

threeSum([-1,0,1,2,-1,-4]);
// Output: [[-1,-1,2],[-1,0,1]]