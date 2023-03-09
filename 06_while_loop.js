var index=0 ;                     // initilazation
while (index<=10) {               // condition
    console.log(index);
    index++;                      // update Expression
    
}

console.log("Even Numbers");
const arrayOfNumber = [10,20,25,30,15,24,13,50,45,55,60] ;
var index=0;
let sum  =0;
while (index<arrayOfNumber.length) {
    const element = arrayOfNumber[index];
    if (element%2==0) {
        console.log(element);
        sum = sum + element ;
        
    }
    index++;
    
}
console.log(`Sum of all Even number is : ${sum}`);