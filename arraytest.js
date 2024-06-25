let array1 =  [15,23,45,44,14];

// every single should match condition
let allMatchResult = array1.every((ipVal,ipIndex,ipArray) => { console.log(ipVal); if (ipVal <= 16 ) return ipVal;}) 
// any one match the condition 
let anyMatchResult = array1.some((ipVal,ipIndex,ipArray) => ipVal <= 16 )  
console.log('All are minors' , allMatchResult);
console.log('Any minors?' , anyMatchResult);
