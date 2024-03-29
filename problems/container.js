// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
// Example 2:

// Input: height = [1,1]
// Output: 1

let maxArea = function (height) {

  // start at two endpoints
  
  let left = 0;
  let right = height.length - 1;
  
  let max = 0;
  
  while (left < right) {
    
    let width = right - left
    let tempArea = Math.min(height[left], height[right]) * width

    if (tempArea > max) {
      max = tempArea
    }

    if (height[left] < height[right]) {
      left = left + 1;
    }
    else {
      right = right - 1;
    }
  }

  console.log(max)

}

maxArea([1,8,6,2,5,4,8,3,7])