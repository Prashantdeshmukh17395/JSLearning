

const array =[3,4,5,8,90,50,1,44,78,51];
let sumOfArrayElement= array.reduce((runningTotal, value) =>{
return runningTotal+value;

})
console.log(sumOfArrayElement);

// find the even numbers

let evenNumber=array.filter(( element ) => {
return element%2==0;
})
console.log(evenNumber);


let sumEven= evenNumber.reduce((runningTotal ,value ) =>{  
    return runningTotal + value;                                     //sum of even array

})
console.log(sumEven);


//find odd numbers in array
const arrayNum=[3,4,12,8,90,50,1,15,78,21];

let oddNumber=arrayNum.filter(( element ) => {
    return element%2==1;
    })
    console.log(oddNumber);


    
let oddSum= oddNumber.reduce((runningTotal ,value ) =>{  
    return runningTotal + value;                                     //sum of odd array

})
console.log(oddSum);

//Find the numbers which are multiple of 3 from given array and sum it
console.log("Find the numbers which are multiple of 3 from given array and sum it");
let arrayMultipleOf3 = arrayNum.filter((element ) =>{
return element%3==0;
}).reduce((runningTotal, value) =>{
    return runningTotal + value;
});
console.log(arrayMultipleOf3);






