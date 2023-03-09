for (let index = 1; index <=10; index=index+1) {
    console.log(index);
    
}



for (let index = 5; index <=50; index=index+5) {
    console.log(index);
    
}
console.log("******************************");
for (let index = 1; index < 10; ) {
console.log(index);
    
}
for (let index = 10; index >=0; index++) {
    console.log(index);
    
}
//index++ ==> index=index+1


const array = [];

const arrayOfNumbers = [ 10, 20, 25, 15, 40, 45, 60, 40, 30, 22, 26 ];
for (let index = 0; index < arrayOfNumbers.length; index++) {
    const element = arrayOfNumbers[index];
    if (element%2==0) {
        array.push(element);  
    } 
}
console.log(array);