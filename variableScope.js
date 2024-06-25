var whereami = 'outside' , varcheck = 'test';

function fun1() {
    var whereami = 'inside';
    console.log('Function Scope is ' , whereami);
    console.log('function varcheck is ' , varcheck);

}

console.log(whereami);
fun1();
console.log(whereami);