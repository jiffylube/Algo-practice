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

// First, we check if the lengths of the two strings are equal. If they're not, they can't be anagrams, so we return false.
  if (s.length !== t.length) {
    console.log("false")
  }
// We create a new Map object to keep track of the count of each character in the first string.
// We iterate through the first string and increment the count for each character in the Map.
  let sMap = new Map()

  for (let i = 0; i < s.length; i++) {

    if (sMap.has(s[i]) === false) {
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

// We iterate through the second string and check if each character is in the Map. If it's not, the strings aren't anagrams, so we return false.
  for (let i = 0; i < t.length; i++){
  
    if (!sMap.has(t[i])) {
      return false
    }

    // If the character is in the Map, we decrement its count. 
    // If the count is ever zero, we know we've seen all of that character in the first string, so we return false.
    if (sMap.get(t[i]) === 0) {
      return false
    }

    sMap.set(t[i], sMap.get(s[i]) - 1)
  }

  // If we make it through both loops without returning false, the strings are anagrams, so we return true.
  return true
}

validAnagram('anagram', 'nagaram');