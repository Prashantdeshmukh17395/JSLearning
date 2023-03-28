


const array = [3 , 4, 5, 6, 1];
const arrayTransformed = [];                             //adding + 2 in each element of array
array.forEach((currentValue) => {
    arrayTransformed.push(currentValue+2)

});
console.log(arrayTransformed);


let newArray = array.map((element) =>{                       //adding + 2 in each element of array using map
    return element + 2;
})
console.log(newArray);



const arrayOfNames = ["Prashant Deshmukh", "Rutuja Pawar", "Nayan", "Sonali"];

let lengthArray=arrayOfNames.map((element) =>{
    return element.length;
})
console.log(lengthArray); 

