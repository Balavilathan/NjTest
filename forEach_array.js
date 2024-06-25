let varr = ['c','java','nodejs'];
//forEach is just for loopin, it will NOT return a array
// map return an array
varr.forEach((val,idx,fullarray) => {console.log(idx ,val ,fullarray);})
let aa = varr.forEach((val) => { return   val;}) // forEach wont return any value so aa value will be undefined 
console.log(aa);