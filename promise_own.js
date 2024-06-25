let mypromise = new Promise((resolve, reject) => {
    let vv = 1 + 3;
    if(vv == 2){
        setTimeout(function () {
            
        }, 100);
        resolve('success');
    }
    else{
        reject('failed');
    }
}
)
mypromise.then( (mesg) => {console.log(mesg) } )
         .catch( (err) => {console.log(err)} ) ;

console.log("I'm here");
