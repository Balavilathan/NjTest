const mycon = require('axios');
// // awiat  need async , using both await & async,  api call will wait until get response and will continue flow
// let act1 = async () => {

//     let response = await mycon.get('https://www.boredapi.com/api/activity')
//     console.log(response.data.activity);
// }    
// act1();

// Above method of writing does not have any error handling block , so writing in below method will help
let act1 = async () => {
    try{
       
       // let response = await mycon.get('https://www.boredapi.com/api/activity') ;
        let response = await mycon.get('https://httpstat.us/404');
       console.log(response.data.activity);
    }
    catch (error) {
        console.log(error);
    }
}    
act1();
