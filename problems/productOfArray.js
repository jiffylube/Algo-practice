// i value will change into product of verything except self

const productExceptSelf = function (nums) {

  let newArray = [nums];
  let pointer = 0;
  
  while (pointer < nums.length) {
    let product = 1;

    let prefix = 1;
    let suffix = 1;
  
    // make for loop right of pointer
    for (let i = pointer + 1; i < nums.length; i++){
      suffix = suffix * nums[i]
    }
  
    // make for loop left of pointer
    for (let i = pointer - 1; i >= 0; i--){
      prefix = prefix * nums[i]
    }

    product = prefix * suffix
    // console.log(prefix + " * " + suffix, " = " + product)
    newArray[pointer] = product

    pointer++
  }
  
  console.log(newArray)

};

//                pointer
//                 x
productExceptSelf([1,2,5,7,7]);