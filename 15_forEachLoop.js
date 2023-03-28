
 
 const array =[2,3,4,5,9];
 array.forEach(function ( currentValue, index, array) {
    console.log(currentValue, index, array);                   //normal foreach Loop Need 3 VALUES AS a arg
 });


 array.forEach( ( currentValue, index, array) =>      //   delete () and {} n function bcz having only one arg
    console.log(currentValue, index, array)
 );




 array.forEach( ( currentValue) => console.log(currentValue));  // shortest wat to write - delet () and {} n function bcz having only one arg 


 console.log("Find Even number");
 array.forEach(element => {
    if (element%2==0) {
        console.log(element);
        
    }
    
 });

 console.log("Find sum of array ");
 let sum =0;
 array.forEach(element => {
    sum=sum + element;
    
 });
 console.log(sum);


 console.log("Even index element in the array");
array.forEach((element , index )=> {
    if (index%2==0) {
        console.log(element);
        
    }
    
});

// let employeeSalaryTotal=0;
// arrayEmployee.forEach(employee => {
//     if (employee.employeeCompany=="Infy") {
//         employeeSalaryTotal= employeeSalaryTotal + employee;
//         console.log(employeeSalaryTotal);
//     }
    
// });

console.log("Array length");
const array1 =[2,3,4,5,9];
console.log(array1.length);

