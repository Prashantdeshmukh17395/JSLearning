
const arrayRollNumbers =[113, 45, 56, 11, 32, 45, 109, 799, 56, 45];

console.log("*********************(1)Reverse Array********************");
arrayRollNumbers.reverse(); 
console.log(arrayRollNumbers);


console.log("*****************(2)Apply only a Custom sort**********************");
 arrayRollNumbers.sort();
console.log(arrayRollNumbers);


console.log("*****************(3)Sort the array in Ascending Order**********************");

arrayRollNumbers.sort( (a, b) => { 
    return a>b ? 1 : -1;
} );
console.log(arrayRollNumbers);



console.log("*****************(4)Gretest Number Of array**********************");
console.log(arrayRollNumbers[arrayRollNumbers.length-1])

console.log("*****************(5)Smallest Number Of array**********************");
console.log(arrayRollNumbers[0]);

console.log("*****************(6)Remove a Duplicates Number from array**********************");

let arrayDuplicate = [...new Set(arrayRollNumbers)];
console.log(arrayDuplicate);