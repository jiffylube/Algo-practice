// Given a string s, find the length of the longest substring WITHOUT repeating characters.

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

var lengthOfLongestSubstring = function (s) {
  
  // start iteration through string
  // for i :
  // if i != the next value
  //    1) map i
  //    2) start new iteration j
  //    3) set object as i, set values as iteration j
  //        a) if j exists as a value, stop the loop
  //        b) what is the key / value ?
  //        c) this is the longest substring
  // continue iteration through i , until i = s.length-1
  // return the longest substring

  if (s.length === 0) {
    console.log(0)
  }

  let longest = 1

  // start with mapping first letter

  for (let i = 0; i < s.length-1; i++){
    
    let myMap = new Map([[s[i] , 1]])
    
    for (let j = i + 1; j < s.length; j++){
      if (myMap.has(s[j])) {
        break;
      }
      if (!myMap.has(s[j])) {
        myMap.set(s[j], 1)
      }
      if (myMap.size > longest) {
        longest = myMap.size
      }
      console.log(myMap)
    }
  }
  console.log(longest)
};

//                        i
//                          j
lengthOfLongestSubstring("pwwkew")
// should be 3