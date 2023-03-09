console.log("*************(1)Total Elements Available or Length*****************");
var arrayOfNumber = [20,31,40,25,23,11,29,9,60,2,11];
var totalArrayElements= arrayOfNumber.length  ;
console.log(`Total no. of elements available in this array: ${totalArrayElements}`);

console.log("*************(2)Log first and last element in this Array*****************");
var valueAtIndex0 = arrayOfNumber[0]                     
console.log(` The First Element in this array: ${valueAtIndex0}`);
var valueAtIndex10 = arrayOfNumber[10]                     
console.log(` The Last Element in this array: ${valueAtIndex10}`);

console.log("*************(3)Log Third last element using length property *****************");
var valueAtIndex8 = arrayOfNumber[8]                    
console.log(` Third Last Element in this array is: ${valueAtIndex8}`);

console.log("*************(4)Find out the all Even numbers is array *****************");
var index=0;
var array=[];
while (index<arrayOfNumber.length) {
    const element = arrayOfNumber[index];
    if (element%2==0) {    
        array.push(element);   
    }
    index++; 
}
console.log(`All Even numbers in this array : [ ${array} ]`);

console.log("*************(5)Find out the all Odd numbers is array *****************");
var index=0;
var array=[];
while (index<arrayOfNumber.length) {
    const element = arrayOfNumber[index];
    if (element%2==1) {     
        array.push(element);

    }
    index++; 
}
console.log(`All Odd numbers in this array : [ ${array} ]`);

console.log("*************(6)Sum of the all Even numbers in array is : *****************");

var index=0;
var sum = 0;
var array=[];
while (index<arrayOfNumber.length) {
    const element = arrayOfNumber[index];
    if (element%2==0) {   
        array.push(element);
        sum = sum + element ;    
    }
    index++; 
}
console.log(`Sum of all Even number is :[ ${sum}]`);

console.log("*************(7)Find out sum of the all  Odd numbers in  this array is : *****************");
var index=0;
var sum = 0;
var array=[];
while (index<arrayOfNumber.length) {
    const element = arrayOfNumber[index];
    if (element%2==1) {   
        array.push(element);     
        sum = sum + element ;  
    
    }
    index++; 
}
console.log(`Sum of all Odd number is : [${sum}]`);

console.log("*************(8)Find the Sum of all Elements in  this array  : *****************");
var index=0;
var sum  =0;
while (index<arrayOfNumber.length) {
    const element = arrayOfNumber[index];
        sum = sum + element ;
    index++;
    
}
console.log(`Sum of all Elements in This Array is : [${sum}]`);

console.log("*************(9)Find the Numbers which are Multiple of 5 in  this array  : *****************");
var index=0;
var array = [];
while (index<arrayOfNumber.length) {
    const element = arrayOfNumber[index];
    if (element%5==0) {
        array.push(element); 
    }
    index++;
}
console.log(`the Numbers which are Multiple of 5 [${array}]`);

console.log("*************(10)Is number 115 is Avalaible in  this array   *****************");
let is115Available = arrayOfNumber.includes(115);
console.log(`Is Number 115 is Available in this array : ${is115Available}`); 

console.log("*************(11)Is number 23 is Avalaible in  this array   *****************");
let is23Available = arrayOfNumber.includes(23);
console.log(`Is Number 23 is Available in this array : ${is23Available}`); 

console.log("*************(12)Insert the numbers  -  55 , 66 before index 3   *****************");
arrayOfNumber.splice(3,0,55,66);             
console.log(`Insert the numbers  -  55 , 66 before index 3 & array is :[${arrayOfNumber}]`);

console.log("*************(13)Delete 3 elements starting from index 4   *****************");
const spliceArray= arrayOfNumber.splice(4 , 3);                    
console.log(`Delete 3 elements starting from index 4 & array is:[${arrayOfNumber}]`);











