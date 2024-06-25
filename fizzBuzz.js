//FizzBuzz
var userin = 0;

do {
    //userin = window.prompt("Enter the number");
    userin = 15;
    console.log(userin);
}while(userin <= 0);

var i = 0 ; result = '' ;

for (i = 1 ; i <= userin ; i++)
{
    result = '';
    
    if (i % 3 == 0) 
       result = 'Fizz';
    if (i % 5 == 0)
       result += 'Buzz';

    if (result == '' )
       console.log(i);
    else
       console.log(i , result);
}
