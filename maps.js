// javascript objects only support one key object pair
// maps solve this issue, can have multiple values per key
// both key values below contain both a, and b as seperate objects

const a = {}
const b = {}

const myMap = new Map([[a, 'a'], [b, 'b']])
console.log(myMap)

// set method -> adds a new key value pair
myMap.set('ron', 12)
myMap.set('jake', 25)
console.log(myMap)

// delete method -> deletes the key value pair
myMap.delete('ron')
console.log(myMap)

// clear method -> clears whole map
// myMap.clear()

// has method -> output true/false by searching map through key values
console.log(myMap.has('ron'))
console.log(myMap.has('jake'))

// size method -> outputs how many elements the map has

console.log(myMap.size)