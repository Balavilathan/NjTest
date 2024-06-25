
let sArray = [1,2,3,4];
// map takes each element of array and pass to the callback function
// and create equal lenght of resulting array
let dArray = sArray.map( (val, idx) =>  {return val * 2 ;} );
console.log(sArray);
console.log(dArray);

let d2Array = sArray.map( (ipVal, ipIdx, iparr) => mulfunc(ipVal, ipIdx, iparr) );
console.log(d2Array);

let d3Array = sArray.map( () => mulfunc2() );

// //--------functions ----------
function mulfunc(ipVal , ipIdx, iparr)
{
    console.log(`${ipVal} * 2 + ${iparr[ipIdx]}`);
    return ipVal * 2 + iparr[ipIdx] ;
}

function mulfunc2()
{
    console.log('inside mulfunc2');

}

// function mulfunc(ipV , ipI, ipa)
// {
//     console.log(`${ipV} * 2 + ${ipa[ipI]}`);
//     return ipV * 2 + ipa[ipI] ;
// }