// Given an unsorted array of integers nums,
// return the length of the longest consecutive elements sequence.

// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

let longestConsecutive = function(nums) {

  // sort
  // put into a set
  // iterate through set, look for the longest consecutive

  if (nums.length === 0) {
    console.log(0)
  }

  let sorted = nums.sort((a, b) => a - b);
  let set = new Set(sorted)

  console.log(set)

  let largest = 1;
  let counter = 1;

  for (let i of set) {
    console.log(i)
    if (set.has(i + 1)) {
      console.log("for " + i + " : the check number is : ", i + 1)
      counter++;
    }
    else if (!set.has(i + 1)) {
      counter = 1;
    }

    if (counter > largest) {
      largest = counter;
    }
    
    console.log("counter : " + counter)

  }

  console.log(largest)

};

longestConsecutive([9,1,4,7,3,-1,0,5,8,-1,6]);
// expected output 7