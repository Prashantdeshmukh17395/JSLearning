console.log(`*************Arthamatic OPerator***************`);


var num1= 10;
var num2= 2;
var result= num1 + num2;//addition
console.log(`Addition is ${result}`);
// console.log("addition Of num1 and num2 :" ,num1 + num2);

var result= num1 * num2; //multiplication
console.log(`Multipication is ${result}`);

var result= num1 ** num2; // Expansion
console.log(`Expansion is ${result}`);

var result= num1 ** 3; //Qube
console.log(`Qube of 10 is ${result}`);

var result= num1/ 3;            //devide
console.log(`Division of ${result}`);
var result= num1 % 3; 
console.log(`Modulus Reminder ${result}`);            //modulus reminder


result = num1 ** num2;
console.log(`Exponential is  ${result}`);

result = num1 / 3;
console.log(` Division is ${result} `);

result = num1 % 3; // Modulus Reminder use %
console.log(` Reminder is ${result} `);



var num = 10; // Compound addition +=
 num+=20; // num = num + 20
 console.log(`Compound addition += ${num}`);



 console.log(`Comparison operators `);
 var num3 = "10";
 var num4 = "10";
 console.log(num3==num4); // 10==10
 console.log(num3===num4);

console.log(num1>num2);   //greater than

console.log(num1 < num2);    // less than

var marks = 35;
console.log(marks>=35);      //greater than equal to

var marks = 70;                       //ternary operator
var result= marks >+60 ? "ALLOW Him for Interview" : "Don`t Allow ";
console.log(result);

var age =20;
var marraigeResult= Age >+21 ? "Congratulation..." : "Ha Ha Try next Time ";
console.log(marraigeResult);

console.log("Even or ODD");              // For Even or Odd condition
var myNumber = 7;
var result = myNumber%2 == 0 ? "EVEN" : "ODD";
console.log(result);


var num1= 10;                      // check positive or Negative
var num2= 12;
var result = num1 > num2 ? "num1" : "num2";
console.log(result);


function wordLength(word){
    var wordLength = word.length;
    var result = wordLength%2==0 ? "EVEN" : "ODD";
    return result;
 }
 var result = wordLength("JavaScript");
 console.log(`Word "JavaScript" has ${result} length` );
 // var result = wordLength("Google");
 console.log(`Word "Google" has ${wordLength("Google Chrome")} length` );









