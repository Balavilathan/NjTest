let fullist = [1,2,3,4,5];
// reduce takes each element of array and also carries the previous value
// finally returns one single value
console.log(fullist);
let newValue =  fullist.reduce((preVal, curVal) => { console.log(preVal , curVal); return preVal + curVal; }  );

console.log(newValue);

let strFull = ['a','b','c','d'];
let newStr = strFull.reduce((preVal, curVal) => {return preVal + curVal; } );
let newStrRight = strFull.reduceRight((preVal, curVal) => {return preVal + curVal; } );
console.log(newStr);
console.log(newStrRight);