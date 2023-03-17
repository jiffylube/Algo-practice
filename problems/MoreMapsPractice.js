let myMap = new Map();

// myMap.set("Danny", "Yu")
// myMap.set("Jeffrey", "Lu")

// console.log(myMap.has("Jeffrey"))
// console.log(myMap.get("Danny"))

// create a key value pair for everything in the word "parollelogram"
// return the map 

function createMap(word) {

  let counter;

  for (let i = 0; i < word.length; i++){

    if (!myMap.has(word[i])) {
      myMap.set(word[i], 1)
    }
    else {

      // get the counter, plus 1, then set it as new value
      counter = myMap.get(word[i]) + 1;
      myMap.set(word[i], counter)
    }
  }

  console.log(myMap)
}

createMap("parollelogram");