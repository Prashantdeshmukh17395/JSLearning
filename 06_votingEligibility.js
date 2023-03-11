console.log(`***************(1))Vote Eligibility *******************`);
function voteEligibility(age) {
   if (age<0 || age>120 || age == undefined || age == null|| isNaN(age)|| age=="string" ) {
    console.log(`The Age ==> (${age} )     "is Not Valid , Plese enter valid data"`);
   } 
   if (age>0 && age<18  ) {
    console.log(`The Age ==> (${age} )     "Soo Soorry You are not Eligible for Voting" `);
   } 
   if (age>=18  && age <=120 ) {
    console.log(`The Age ==> (${age} )     "Congratulation you are eligible for Voting"`);
   } 
}
voteEligibility(45);
voteEligibility(17);
voteEligibility(200);
voteEligibility(0);
voteEligibility(8);
voteEligibility(20);
voteEligibility(-10);
voteEligibility(undefined);
voteEligibility(null);

console.log(`*************************** Question 2*********************************`);
function gradeCalculation(marks){
    if (marks>=90 && marks<=100 && typeof marks==="number") {
        console.log(`Fantastic marks: "${marks}",Your grade is A+`);
    }
    if (marks>=75 && marks<90 && typeof marks==="number") {
        console.log(`Excellent marks: "${marks}",Your grade is A`);
    }
    if (marks>=50 && marks<75 && typeof marks==="number") {
        console.log(`Good marks: "${marks}",Your grade is B`);
    }
    if (marks>=35 && marks<50 && typeof marks==="number") {
        console.log(`Marks: "${marks}",Your grade is C,Need to be a Improvement`);
    }
    if (marks<=0 ||marks>100||typeof marks=="string"||marks==null||isNaN(marks)) {
        console.log(`"${marks}" Please provide a valid marks`);
    }
}
gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);
gradeCalculation("91");
gradeCalculation("Eighty");
gradeCalculation(NaN);
gradeCalculation(null);


