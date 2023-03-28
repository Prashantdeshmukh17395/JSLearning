
arrayOfNumber=[2, 4 , 7, 4 ,1]
arrayOfNumber.pop(1);
console.log(arrayOfNumber);

const array=[6,9,5,4,8,8];
const newArray= {...array};
const evenArray =[2,4,6,8,10];
//console.log(array + evenArray);
const mergeArray= array + evenArray;
console.log(mergeArray);

const concateArray=array.concat(evenArray);
console.log(concateArray);


//spread Operator

const spreadArray=[...array, ...evenArray];
console.log(spreadArray);