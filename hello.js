let firstName= "Chirag Mhaske";
console.log(firstName); 

//Find the numbers which are multiple of 3 from given array and sum it
console.log("Find the numbers which are multiple of 3 from given array and sum it");

const arrayNum=[3,4,12,8,90,50,1,15,78,21];
let arrayMultipleOf3 = arrayNum.filter(element  => element%3==0)
.reduce((runningTotal, value) => runningTotal + value);
console.log(arrayMultipleOf3);