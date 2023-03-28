 
 const array =[2,3,4,5,6];

  let show =(element) => {
    console.log("Inside");                  //normal function
  }
  show("Element");

  let display = (num1,num2) =>{           
console.log(num1*num2);
  }
  display(10, 5);


  let showArg =element =>  console.log("Inside");                  //normal function without () bracket {} bcz function having only one argument
  
  showArg("Element");

