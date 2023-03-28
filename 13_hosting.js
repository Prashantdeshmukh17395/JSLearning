console.log(myName);   // allow  the access bcz var variable
//console.log(age);     //not allow to Accesss bcz of let vairiable

var myName = "Virat Kohli";
let age = 33;


show();

function show() {                                 //function access before invoke is hosting is possible
    console.log("Rohit Sharma");
    
}


 var greet = function () {                   //  // in function expression dont access before invoke  hosting is not possible
    console.log("Good Morning");
    
}

greet();