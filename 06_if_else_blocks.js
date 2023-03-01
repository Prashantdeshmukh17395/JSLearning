function voteEligibility(age) {
    if (age>=18 ) {
        console.log("You are Eligible for Voting");
        
    } else {
        console.log("You are Not Eligible for Voting");
        
    }
    
}
voteEligibility(45);
voteEligibility(17);
voteEligibility(08);
voteEligibility(20);
voteEligibility(-10);
voteEligibility(200);
voteEligibility(0);
voteEligibility("Undefined");
voteEligibility("null");