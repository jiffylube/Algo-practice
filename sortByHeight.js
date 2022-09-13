function solution(a) {
    // iterate through the array, check if value is not -1
    // replace method -> with empty value for now ''
    // insert into new array
    // sort
    // iterate through sorted array
    // replace method -> with iterated value, into the first '' empty value in old array
    
    // is the value -1 ? if so, return true
    
    let emptyValue;
    let newArray = [];
    
    
    for ( let i = 0; i < a.length; i++ ){
        
        if (a[i] != -1){
            
            emptyValue = a.splice(i, 1 , "");
            // console.log(emptyValue)
            
            newArray.push(emptyValue)
            

        }
        
    }
    
    newArray.sort((a, b) => a - b)
    
        
    for ( let j = 0; j < a.length; j++){
        
        if (a[j] == ""){
            
            a[j] = Number(newArray.shift().toString())
            
        }
        
        // console.log(newArray)
    }
    
    
    return a
    console.log(a)
    
}
