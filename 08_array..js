// let akshayFN ="Akshay Ghule"
// let nayanFN = "Nayan Patil"

var arrayOfNumber = [0,2,4,5,6,7,8,0,4] ;
console.log(arrayOfNumber);
// console.table(arrayOfNumber);

const totalArrayElements= arrayOfNumber.length         // find no. of length
console.log(`Total no. of elements in this array: ${totalArrayElements}`)

let is8Available = arrayOfNumber.includes(8);
console.log(`Is Available 8 : ${is8Available}`);    // include method

let is9Available = arrayOfNumber.includes(9);
console.log(`Is Available 9 : ${is9Available}`);

const indexOf8 =arrayOfNumber.indexOf(8);
console.log(`Index of 8 is Available  : ${indexOf8}`);   // find the number in index of array

const indexOf9 =arrayOfNumber.indexOf(9);
console.log(`Index of 9 is Available  : ${indexOf9}`);



var arrayOfNumber = [10,20,25,30,6,7,8,0,4] ;
const valueAtIndex2 = arrayOfNumber[2]                      // find index no. element
console.log(` Value at Index 2 is: ${valueAtIndex2}`);

arrayOfNumber[3] = 35;
console.log(arrayOfNumber);   //update the array by this

arrayOfNumber[1] = 50;
console.log(arrayOfNumber);

var arrayOfNumber = [10,20,25,30,40,5] ;  // add new element last by push method
arrayOfNumber.push(43)
console.log(arrayOfNumber);

arrayOfNumber.unshift(11);     // add new element at starting at  by unshift method
console.log(arrayOfNumber);


var arrayOfNumber = [10,20,25,30,6,7,8,0,4] ; // how to removed last element from array by pop 
arrayOfNumber.pop();
console.log(arrayOfNumber);

var arrayOfNumber = [10,20,25,30,6,7,8,0,4] ; // how to removed first element from array by shift
arrayOfNumber.shift();
console.log(arrayOfNumber);

console.log("slice");
var arrayOfNumber = [10,20,25,30,15,24,13,50,45] ; 
const arrayFromIndex3= arrayOfNumber.slice(3);     // array start from  3rd number by slice method
console.log(arrayFromIndex3);

const subArray= arrayOfNumber.slice(3 , 6);   // start index to stop index or sub array
console.log(subArray);


console.log("Splice Method");
var arrayOfNumber = [10,20,25,30,6,7,8,0,4] ;             
const spliceArray= arrayOfNumber.splice(3);          // removed elements from 3rd element with start index by splice delet all elements after 3
console.log(`removed elements from array is: ${spliceArray}`);
console.log(arrayOfNumber);

var arrayOfNumber = [10,20,25,30,15,24,13,50,45] ;
const spliceArray1= arrayOfNumber.splice(3 , 4);   // start n stop index splice means trim or delete count(strating of delet element,after that how many element wqant to delete)
console.log(`removed elements from deletcount array is: ${spliceArray1}`)
console.log(arrayOfNumber);

var arrayOfNumber = [10,20,25,30,15,24,13,50,45] ;
const spliceArray2= arrayOfNumber.splice(1 , 1);   // start n stop index splice means trim or delete count(strating of delet element,after that how many element wqant to delete)
console.log(`removed elements from deletcount array is: ${spliceArray2}`)
console.log(arrayOfNumber);

var arrayOfNumber = [10,20,25,30,15,24,13,50,45] ;
const spliceArray3= arrayOfNumber.splice(4 , 1);                      // for delete only 1 element -delete 15
console.log(`removed elements from deletcount array is: ${spliceArray3}`)
console.log(arrayOfNumber);

var arrayOfNumber = [10,20,25,15,40,45] ;
const spliceArray4= arrayOfNumber.splice(1 , 2);                      // for delete more than one element -delete 20 and 25
console.log(`removed elements from deletcount array is: ${spliceArray4}`)
console.log(arrayOfNumber);


console.log("***************To Insert Element without Replacement*************");
var arrayOfNumber = [10,20,25,15,40,45] ;  // to insert a one element-without repacement
arrayOfNumber.splice(2,0,22);              // (index number,0 no of repacement,what no.  u want to insert)
console.log(arrayOfNumber);

var arrayOfNumber = [10,20,25,15,40,45] ;  // to insert a more than one  element
arrayOfNumber.splice(4,0,5,35,55);              // (index number, 0 no of repacement, what no. t u want to insert)
console.log(arrayOfNumber);


console.log("***************To Insert Element with Replacement*************");
var arrayOfNumber = [10,20,25,15,40,45] ;  // to insert a one element repacement
arrayOfNumber.splice(2,1,50,60);                //   // (index number,1 no of repacement,what no.   u want to insert)            
console.log(arrayOfNumber);



console.log("***************Traversing**************");
var arrayOfNumber = [10,20,25,30,15,24,13,50,45,55,60] ;
for (let index = 0; index < arrayOfNumber.length; index++) {
    const element = arrayOfNumber[index];
    console.log(element);
}
var arrayOfNumber = [10,20,25,30,15,24,13,50,45,55,60] ;
let sum=0;
for (let index = 0; index < arrayOfNumber.length; index++) {
    const element = arrayOfNumber[index]; 

    sum = sum + arrayOfNumber[index];   
}
console.log(`Sum of Array Element is : ${sum}`);

