// sets primary use is to hold distinct elements
// set iS UNORDER POOL OF INDEXES

const myArray = [1, 2, 3, 4, 5, 6, 7, 1, 1, 1, 5, 6]

const mySet = new Set(myArray);
// console.log(mySet)

// sets are used to remove all duplicate values from an array
// can easily convert it back into an array

const uniqueArray = [...mySet];
// console.log(uniqueArray)

// add method : any element values to a new set , string values, object values , arrays as well

mySet.add(9)
mySet.add("nine")
mySet.add({"apples" : 1})
// console.log(mySet)

// delete method : 

mySet.delete(3)
// console.log(mySet)

// clear method : clears whole set
// mySet.clear();
// console.log(mySet)

// has method : returns boolean value

console.log(mySet.has(5))