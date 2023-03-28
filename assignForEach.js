const arrayNumbers =[1, -7, 40, 502, -77, 91, 0, 108, 89, -601];
console.log("*****************step(1)*******************");

console.log("Each index element in the array");

arrayNumbers.forEach((element ,index )=> {
    if (index==element) {
        console.log(index); 
    }
});

console.log("*****************step(2)*******************");
console.log("Find the Positive numbers");
let positiveArray = [];
arrayNumbers.forEach(element => {
    if (element>=0) {
        positiveArray.push(element) ;
    }
    
 });
 console.log(arrayNumbers);

 console.log("*****************step(3)*******************");
 console.log("Find the negative numbers");
 let negativeArray = [];
 arrayNumbers.forEach(element => {
    if (element<0) {
        negativeArray.push(element);
    }
    
 });
console.log(arrayNumbers);

 console.log("*****************step(4)*******************");
 console.log("Find the Even numbers");
 let evenArray = [];
 arrayNumbers.forEach(element => {
    if (element%2==0) {
        evenArray.push(element);
    } 
 });
 console.log(arrayNumbers);
 console.log("*****************step(5)*******************");
 console.log("Find sum of array ");
 let sum=0;
 arrayNumbers.forEach(element => {
    sum= sum + element;
    
 });
 console.log(sum);


 console.log("*****************step(6)*******************");
 console.log("Even index element in the array");
 let indexArray=[];
arrayNumbers.forEach((element , index )=> {
    if (index%2==0) {
        indexArray.push(element);  
    }  
});
console.log(arrayNumbers);





 
