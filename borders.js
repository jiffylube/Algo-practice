picture = ["abc", "ded"];

function solution() {
  // run through first string, see how long it is
  // take taht value, add two, you will get the total number of * needed to border
  // 1) iterate through array
  //    a) add * to front, and beginning of the value
  //    b) continue until end of array
  // 2) add number of * to the front and end of the array
  // return array

  let width = picture[0].length + 2;
  let final = []

  final.push('*'.repeat(width))
  
  for (let i = 0; i < picture.length; i++){
    final.push('*'+picture[i]+'*')
  }
  
  final.push('*'.repeat(width))

  console.log(final)
}

solution();