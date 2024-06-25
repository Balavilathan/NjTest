// let varUnsort = ['a','x','f','v'];
let varUnsort = [3, 8, -10, 23, 19, -4, 3, -14, 27] ;
let varUnsort2 = [3, 8, -10, 23, 19, -4, 3 , -14, 27] ;

// let varnew2 = varUnsort2.sort();
// console.log(varUnsort2);
// console.log(varnew2);

// let varnew = varUnsort2.sort((a,b) => {return  a - b;} );
// console.log(varUnsort2);
// console.log(varnew);

// let varnew2 = varUnsort2.sort();
// console.log(varnew2);
let varnew = varUnsort2.sort((a,b) => {return a - b;} );
// console.log(varnew2);

// let varrr =  varUnsort.sort((a,b) => {return a - b;} );
// console.log(varrr);

//find returns the first value matches
// console.log(
//     varnew.find(
//     (val , idx) => { return val == 3; }
//     )
// );

// console.log('checkIDX' , 
//     varnew.find(
//     (val , idx) => { if (val == 3) {return idx; }}
//     )
    
// );

// // filter return all value matches
console.log(
    varnew.filter((val) => {return val == 3 ;})
);
