

const arrayNumbers =[20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19];

console.log("*******Step(1)Add 10 in Each Element of Array********");
let newArray = arrayNumbers.map(element => element + 5);
console.log(newArray);


console.log("*******Step(2)Square of Each Element of Array********");
let squareArray = arrayNumbers.map(element => element*element);
console.log(squareArray);


console.log("*******Step(3)Index of Each Element of Array********");

let indexArray = arrayNumbers.map((element,index) =>{             
    return (`${index},${element}`)
})
console.log(indexArray);

