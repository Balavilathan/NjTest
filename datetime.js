let currdate = new Date();
// console.log(currdate.getDate() + ' ' +  currdate.getUTCDate() );
console.log(currdate.toLocaleDateString());
console.log(currdate.toTimeString());
let currTime = currdate.toTimeString().split(' ' ,1).toString();
console.log(currTime);