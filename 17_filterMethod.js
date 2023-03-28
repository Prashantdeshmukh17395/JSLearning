

const array=[3 , 4, 51 ,78 ,90, 50, 1, 44];
const newArray =[];
 
array.forEach((element) =>{
    if (element >= 50) {                                       //with the forEach loop
        newArray.push(element);
        
    }

})
console.log(newArray);



let filterArray = array.filter((currentValue) =>{
return currentValue >=50;                                           // with the filter method find out element is>= 50
})
console.log(filterArray);






let filterArray1 = array.filter(currentValue =>currentValue >=50);               // with the filter method in one line 
    console.log(filterArray1);  



    let filterArrayEven = array.filter((currentValue) =>{
        return currentValue%2==0;                                           // with the filter method find out even number in array 
        })
        console.log(filterArrayEven);



        let filterArrayEven1 = array.filter(currentValue => currentValue%2==0);           // with the filter method find out even number in array in one line)
            console.log(filterArrayEven1);
    