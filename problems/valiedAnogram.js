// Given two strings s and t, return true if t is an anagram of s, and false otherwise / 242

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 
// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false
 
// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.

// objective : create a map for both input values s, t. If all key pair values in both s and t are equal, we have a valid anagram
// additionally, s must contain all the values of t

function validAnagram(s, t) {
  
  // console.log(s,t)
  // check if it does NOT exist , then push into map
  // if it does exist,
  //  a) get the value of the object
  //  b) plus 1
  //  c) then set the key value again

  let sMap = new Map()
  let tMap = new Map()

  for (let i = 0; i < s.length; i++){
    if (sMap.has(s[i]) === false){
      sMap.set(s[i], 1)
    }
    else if (sMap.has(s[i]) === true) {
      let temp1;
      // get the value of the key, add it
      temp1 = sMap.get(s[i]) + 1
      // reasign value into the key 
      sMap.set(s[i], temp1)
    }
  }

  for (let j = 0; j < t.length; j++){

    if (tMap.has(t[j]) === false){
      tMap.set(t[j], 1)
    }
    else if (tMap.has(t[j]) === true) {
      let temp2;
      // get the value of the key, add it
      temp2 = tMap.get(t[j]) + 1
      // reasign value into the key 
      tMap.set(t[j], temp2)
    }

  }

  
  // check if two maps are the same
  // 1) check size
  // 2) if size is equal, sort both maps
  // 3) check if key values are exactly identical
  // 4) if keys are same, check values are identical

  // sort maps
  // create 1 pointer
  // iterate through both maps, and the keys, and objects shoudl both be identical

  if (sMap.size !== tMap.size) {
    console.log("Not Anograms")
  }

  else {
    let Ssorted = new Map([...sMap.entries()].sort());
    let Tsorted = new Map([...tMap.entries()].sort());

    for (let [key, value] of Ssorted) {
      if (!Tsorted.has(key) || Tsorted.get(key) !== value) {
    
      }
    }


  }


  
}

validAnagram('that', 'thit');