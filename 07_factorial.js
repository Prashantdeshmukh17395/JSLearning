console.log("**********Factorial Of Numbers**********");
function factorialOfNum(number) {
    var factorial = 1;
    for (let index = 1; index <= number; index++) {
        factorial *= index;
        
    }
    return factorial;
    
}
var factorial = factorialOfNum(5);
console.log(`Factorial of  5 : ${factorial}`);

var factorial = factorialOfNum(3);
console.log(`Factorial of  3 : ${factorial}`);

var factorial = factorialOfNum(null);
console.log(`Factorial of  null : Is Invalid`);

var factorial = factorialOfNum(8);
console.log(`Factorial of  8 : ${factorial}`);


var factorial = factorialOfNum(undefined);
console.log(`Factorial of  undefined : Is Invalid`);


var factorial = factorialOfNum(9);
console.log(`Factorial of  9 : ${factorial}`);


var factorial = factorialOfNum(0);
console.log(`Factorial of  0 : ${factorial}`);