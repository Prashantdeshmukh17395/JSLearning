// Object literals
let student = {
    firstName: "Prashant",
    lastName: "Deshmukh",
    isWorking: true,
    age: 22,
    collegeName: "ABC",
    id: 123456,

    address: {
        street: "Wakad",                      // Object in many  element
        city: "Pune",
        PIN: "431204"
    },

    school : "Podar School",
    friends: ["Bill", "Stew", "Elon"],      // key and value
    show: function(){                      // object as a function as function expression 
        console.log("I am show() function");      
    },
    addressDetails: function(){
        return `Address is: Street ${this.address.street}, City ${this.address.city}, PIN ${this.address.PIN}`
    }
}


 student.show()

 console.log(student.friends);                    // call a array by this
 console.log(student.friends[student.friends.length-1]); // call a wanted element in array

 student.address.PIN = 431205;                      //update elementfrom old object 
431205
 console.log(student.address.city);

student.marks = {
    math: 80,
    physics: 60,
    drawing: 70
}
student.school = "ABC";
console.log(student.marks);
console.log(student.address.city=431205);
console.log(student);
console.log(typeof student);
// . Dot Notation
console.log(student.firstName);
console.log(student.age);
// [] Notation
console.log(student["lastName"]);

// Update property
student.collegeName = "COEP PUNE";

// Add new property city = "Mumbai"
student.city = "Mumbai";
student.country = "India";

//Delete the property
delete student.isWorking;

// console.table(student);

//Empty Object
let teacher = { };
// firstName = "Mohit"










