// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
// Example 2:

// Input: height = [1,1]
// Output: 1

let maxArea = function (height) {
  let highest = 0;
  let right = height.length - 1;

  while (right >= height.length / 2) {
    let left = 0;

    while (left < right) {
      let length = right - left;
      let temp = Math.min(height[left], height[right]) * length;

      if (temp > highest) {
        highest = temp
      }
      left++;
    }

    right--;
  }
  console.log(highest)
}

maxArea([1,8,6,2,5,4,8,3,7])