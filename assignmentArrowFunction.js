console.log("***************Step1*********************");
let show = () => {
    console.log(`"Good Morning , Today is Monday"`);
}
show();

console.log("***************Step2*******************");
let multiplyNum = (num1, num2 ,num3 ) => {
    console.log(`Multiplication Of Given Numbers : ${num1 * num2 * num3}`);
}
multiplyNum(5 , 5 , 2);
multiplyNum(10, 4, 1);

console.log("***************Step3******************");

let addition = (num1, num2,num3,num4,num5) => {
    const result = num1 + num2 + num3 + num4 + num5;
    return result;
}
const additionResult = addition( 100, 100, 200, 349, 756);
console.log( `Addition Of Numbers : ${additionResult}`);
const additionResultStr = addition("I am " ,"learning " , "ES6 ", "features ", "in depth");
console.log(`Addition of Given String is : ${additionResultStr}`); 