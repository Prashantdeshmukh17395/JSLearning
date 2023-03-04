console.log(`======Arthematic Operator======`);

//Addition
var num1 = 10;
var num2 = 2;
var result = num1 + num2;     
console.log(`Addition is ${result}`);

 //Substraction
var num1 = 10;
var num2 = 2;
var result = num1 - num2;     
console.log(`Substraction is ${result}`);

//division
var num1 = 10;
var num2 = 2;
var result = num1 / num2;     
console.log(`division is ${result}`);

//Multiplication
var num1 = 10;
var num2 = 2;
var result = num1 * num2;     
console.log(`multiplication is ${result}`);

//exponential
var num1 = 10;
var num2 = 2;
var result = num1 ** num2;     
console.log(`exponential is ${result}`);

//Modulo
var num1 = 10;
var num2 = 2;
var result = num1 % num2;     
console.log(`reminder is ${result}`);

//compound addition
var num = 10;
num+=20     //num = num + 20
console.log(`exponential is ${num}`);

//comparison operator
 var foo = 100;
 console.log(foo==100);//variable to number
var bar = 200;
console.log(foo==bar);//var to var

var num3 = "100";
var num4 = 100;
console.log(num3==num4);//str to num(convert string to num and then compare)

var a = "100";
var b = 100;
console.log(num3===num4);//str to num (compares str to num without converting str)

var num3 = "100";
var num4 = 100;
console.log(num3!=num4);//

// ternory operator

var marks =25;
result = marks >=21?"Allows":"deny";
console.log(result);

var myNum = 24;
res = myNum%2==0?true:false;
console.log(res);

function lengthOfWord(value){
    var lengthOfWord = value.length;
    var res = lengthOfWord % 2== 0?"EVEN":"ODD";
    return res
}
foo = lengthOfWord("JavaScript")
console.log(foo);

function maleMarraigeEligiblity(gender,age,name){
    var result = gender =="male" && age >=21? `${name} Allowed for marraige`:"Not Allowed for Marraige";
    return result
}
var result = maleMarraigeEligiblity("male",25,"bill gates");
console.log(result);


function tcsEligiblity(gradScore,hscScore,sscScore,name){
    var tcsEligiblity = gradScore >=70 || hscScore >= 80 || sscScore>=90?"eligible":"Not eligible";
    return tcsEligiblity
}
var result = tcsEligiblity(80,86,79,"Prashant");
console.log(result);
