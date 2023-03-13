
function Bank (bankName, location, ifscCode , branchCode ){
        this.bankName = bankName;
        this.location = location;
        this.ifscCode = ifscCode;
        this.branchCode = branchCode;
        
    }

 
 
const yesBank = new Bank( "yes","location","ifscCode","branchCode" );

const sbiBank = new Bank("KGRDCP", "Karjat", "Mumbai", "Pharmacy", "Bachelor");

const mahBank = new Bank("GPT", "Diva", "Mumbai", "Enginerring", "Diploma");

const axisBank = new Bank("GMS", "Amravati","Nagpur", "Medical", "Masters");

