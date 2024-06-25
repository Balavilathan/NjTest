
/* Name lesss function or anonymous function */
setTimeout(function () {
    console.log("Welcome to GeeksforGeeks! - delayed");
}, 1000);

/* IIFE - Immediately Invoked Function Expression 
IIFE is a Encapsulation of a function with brackets and invoke it 
(

)();
*/ 

/* self calling name less Or anonymous function */
(function () {
    console.log("Welcome to GeeksforGeeks! (self calling) ");
})();

/* self calling name less Or anonymous Arrow function */
( () => {
    console.log("Welcome to GeeksforGeeks! (arrow function) ");
})();

/* self calling name less Or anonymous Arrow function */
( () => console.log("Welcome to GeeksforGeeks! (arrow function single line) ")
)();

/* anonymous Arrow STORED function */
/* all function type can be store in variable or constant  */
let Greet =  () => console.log("Welcome to GeeksforGeeks! (arrow function stored) ")

Greet();
