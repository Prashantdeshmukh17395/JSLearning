console.log("***********************Create an Object with name Proffessor***********************");
let professor = {
    firstName: "Amol",
    lastName: "Bhalerao",
    collegeName: "DKCOE ",
    subject: "Numerical Programming",
    department :"Computer",
    id: 556677,
    university :"Pune",

    degrees: {
        engineering: "CSC",
        ME: "Software Engineering",                    
        PHD: "Adv Computing",  
    },
    
    certificates : ["Hacker Rank Participation","Certificate in IFE course","Certificate in Adv Programming"],

    
    totalDegrees: function(str){
        `engineering: "CSC", ME: "Software Engineering", PHD: "Adv Computing", `;
        return str ;
        
     },   
     
}
console.log(professor);

console.log("***********************Output after an Concating a Degrees ***********************");
degrees= {
    engineering: "CSC",
    ME: "Software Engineering",                  
    PHD: "Adv Computing",  
}

console.log(professor.degrees);

let totalExperience;
console.log("****************Added new Property Experience : 14 Years********************");
professor.totalExperience = "14 Years";
console.log(professor.totalExperience);

console.log("****************Object after updating college name********************");
professor.collegeName = "COEP Pune";
console.log(professor);

console.log("****************Add new Element in Array : Oracle Certificate********************");
var certificates = ["Hacker Rank Participation","Certificate in IFE course","Certificate in Adv Programming"];
certificates.push("Oracle Certificate")
console.log(certificates);

