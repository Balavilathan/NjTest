const mycon = require('axios');
// let response = mycon.get('https://www.boredapi.com/api/activity');
// console.log(response.data.activity); // this will error because response object has nothing at this time

// // lets move on to use .then & .catch of promise object
// // in below logic response will be used only when request succeed and flow fall in to .then method
// mycon.get('https://www.boredapi.com/api/activity')
//      .then( response => {console.log(response.data.activity);})
//      .catch(error => {console.log(error);})
// console.log('execution here');

// // in bleow api can we can simulate erro return
mycon.get('https://httpstat.us/404')
     .then( response => {console.log(response.data.activity);})
     .catch(error => {console.log(error);})
console.log('execution here');
