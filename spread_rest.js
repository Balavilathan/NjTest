let vartest = [1,2,3];
let vartest2 = [55,88,44,11];
// below usage without spread operator literaly uses the array  value
let newarr = [vartest, vartest2];
// below spread operatore ... , spread the elements in to new array

console.log('newarr' , '\n' , newarr);
console.log(newarr.length);
let newspread = [...vartest , ...vartest2];
console.log('newspread' , '\n' ,  newspread);
console.log(newspread.length);
// ------------------
 

console.log(fnMultiply(...vartest)); // here we are spreading 3 elements of vartest
console.log(fnMultiply(...vartest2)); // here we are spreading 4 elements of vartest2

// this operator works like array with any length , mostly used as arguments of functions
function fnMultiply( ip1 , ...arg1) // here we are capture spread element to an array
{
    console.log('ip1 ' , ip1);
    let newval = arg1.map((val) => {return val * 2});
    return newval;
}
