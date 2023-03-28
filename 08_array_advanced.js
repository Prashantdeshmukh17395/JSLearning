const arrayOfNames =["Rohit", "Virat", "Hardik", "Jadeja", "sky"]
const result=arrayOfNames.join(":");                                          //join the array by seperator
console.log(result);
console.log(typeof result);


console.log(arrayOfNames.length);                                              // Resizing in Array

arrayOfNames.length=3;
console.log(arrayOfNames.length);
console.log(arrayOfNames);

arrayOfNames.length= 7;
console.table(arrayOfNames);


const arrayOfNumbers =[5,5,6,8,3,9,6];                               // in array we use Set by Transverse in array
 const setOfElements = new Set();
 for (const element of arrayOfNumbers) {
    setOfElements.add(element);
    
 }
 console.table(setOfElements);





const mySet = [...new Set (arrayOfNumbers)];          // by using spread operator 
console.log(mySet);


