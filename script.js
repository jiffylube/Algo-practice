// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
// typically using all the original letters exactly once.

//time complexity = O(nlogn)
let isAnagram = function(s, t) {
  s = s.toLowerCase().split('').sort().join();
  t = t.toLowerCase().split('').sort().join();
  return s === t;
};

console.log(
isAnagram('peepEe', 'herman'),
isAnagram('ocat', 'cato'),
isAnagram('dog' , 'mouse')
);