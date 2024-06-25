let mypromise = new Promise((funcRes, funcRej) => {
    let vv = 1 + 1;
    if(vv == 2){
        setTimeout(function () {
            
        }, 100);
        funcRes('success');
    }
    else{
        funcRej('failed');
    }
}
)
mypromise.then( (mesg) => {console.log(mesg) } )
         .catch( (err) => {console.log(err)} ) ;

console.log("I'm here");

