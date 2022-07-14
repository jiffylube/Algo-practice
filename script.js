// Given an integer array nums, return true if any value appears at least twice in the array,
// and return false if every element is distinct.

nums = [1,2,3,1]

let containsDuplicate = function (nums) {
  nums.sort();
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
    console.log(true)
    }
    else console.log(false)
  }
};

containsDuplicate(nums);
