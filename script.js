// Given an integer n and an array a of length n, your task is to apply the following mutation to a:

// Array a mutates into a new array b of length n.
// For each i from 0 to n - 1, b[i] = a[i - 1] + a[i] + a[i + 1].
// If some element in the sum a[i - 1] + a[i] + a[i + 1] does not exist, it should be set to 0.
// For example, b[0] should be equal to 0 + a[0] + a[1].

// Example

// For n = 5 and a = [4, 0, 1, -2, 3], the output should be solution(n, a) = [4, 5, -1, 2, 1].

// b[0] = 0 + a[0] + a[1] = 0 + 4 + 0 = 4
// b[1] = a[0] + a[1] + a[2] = 4 + 0 + 1 = 5
// b[2] = a[1] + a[2] + a[3] = 0 + 1 + (-2) = -1
// b[3] = a[2] + a[3] + a[4] = 1 + (-2) + 3 = 2
// b[4] = a[3] + a[4] + 0 = (-2) + 3 + 0 = 1
// So, the resulting array after the mutation will be [4, 5, -1, 2, 1].


// Given an array of integers a, your task is to calculate the digits that occur the most number of times in the array.
// Return the array of these digits in ascending order.


// test cases


let firstArray = [1,5, 12, 15, 29]
let secondArray = [5,5,20,25,45, 69, 90, 100]


function combineSort( arr1 , arr2 ) {
  let i = 0;
  let j = 0;
  let sorted = [];
  
  while( (i < arr1.length) && (j < arr2.length) ){
      
      if (arr2[j] > arr1[i]) {
        sorted.push(arr1[i])
        i++;
      } 
      else {
        sorted.push(arr2[j])
        j++
      }
      while (i < arr1.length) {
        sorted.push(arr1[i]);
        i++;
      }
      
      while (j < arr2.length){
        sorted.push(arr1[j]);
        j++;
      }
  }
    return sorted;
}


// combineSort(firstArray, secondArray);
console.log(combineSort(firstArray, secondArray));
