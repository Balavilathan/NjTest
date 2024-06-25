function matrixsum (mat){
    var rowsum = 0 , colcnt = 0, rowcnt = 0;
   for (r of mat){
    rowsum = 0;
    rowcnt += 1;
    // console.log(r.length);
    for ( colcnt = 0 ; colcnt < r.length; colcnt++ ){
        rowsum += Number( r[colcnt]);
    }
    console.log(`sum of row ${rowcnt} = ${rowsum}`);
   }
}

let matarray = [[1,2,3],[5,6,7],[5,8,4]];
matrixsum(matarray);
