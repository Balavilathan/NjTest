let newArr = ['c','c++','nodejs'];
for( idx in newArr)
{
    console.log(idx , newArr[idx]);
}

for(lang of newArr)
{
    console.log(lang);
}

// for (var i = 1; i <=5; i++)
// {
//     console.log('inside ' , i);
// }
//  console.log('outside ' , i); // scope Error will be thrown because variable define using let wont come outside block

// for (let j = 1; j <=5; j++)
// {
//     console.log('inside' , j);
// }
// console.log('outside' , j); // scope Error will be thrown because variable define using let wont come outside block

// const vv = [1,2,3,4];
// console.log(vv); 
