
const arrayNumbers = [20, 11, 40, 25, 37, 49, 9, 90 , 60 , 2, 19];

console.log("******************Step(1)*****************");
let greaterThanArray = arrayNumbers.filter((currentValue) =>{
    return currentValue >=50;                                           
    })
    console.log(`In Array The number is Greater than 50 :[ ${greaterThanArray}]`);

    console.log("******************Step(2)*****************");
    let evenArray = arrayNumbers.filter((element) =>{
        return element%2==0 ;                                           
        });
        console.log(`Even Numbers in Array [${evenArray}]`);


     console.log("******************Step(3)*****************");
        let oddArray = arrayNumbers.filter((element) =>{
            return element%2==1 ;                                           
            });
         console.log(`Odd Numbers in Array [${oddArray}]`);

    console.log("******************Step(4)*****************");

    let multipleOf5Array = arrayNumbers.filter((element) =>{
        return element%5==0 ;                                           
        });
     console.log(`Multiple Of 5 Numbers in Array [${multipleOf5Array}]`);

     console.log("******************Step(5)*****************"); 

     let newArray = arrayNumbers.filter((element) =>{
        return element>20 && element < 50 ;                                           
        });
     console.log(` Numbers between 20 to 50  in Array [${newArray}]`);

