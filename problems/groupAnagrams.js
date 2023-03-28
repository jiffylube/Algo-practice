// Given an array of strings strs, group the anagrams together. You can return the answer in any order.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Example 2:
// Input: strs = [""]
// Output: [[""]]

// Example 3:
// Input: strs = ["a"]
// Output: [["a"]]

// Constraints:
// 1 <= strs.length <= 104
// 0 <= strs[i].length <= 100
// strs[i] consists of lowercase English letters.

function groupAnagrams(strs) {

  let obj = {}

  for (i of strs) {
    let key = i.split("").sort().join("")
    // console.log(key , i)

    if (!obj[key]) {
      obj[key] = [i]
    }
    else {
      obj[key].push(i)
    }
  }

  // console.log(obj)
  console.log(Object.values(obj))

}

groupAnagrams(["eat","tea","tan","ate","nat","bat"])