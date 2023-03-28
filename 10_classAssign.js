console.log("****************Define a Class for Vehicle with Constructer*******************");
class Vehicle {
    constructor(company , wheeler , Model , CC , Color ,  mileage ){
        this.company = company;
        this.wheeler  = wheeler ;
        this.Model = Model;
        this.CC= CC;
        this.Color = Color;
        this.mileage = mileage;
    }

 }
 const  hero = new Vehicle("Hero", "2 Wheeler", "Splender", "110", "Gray", 65 );
// console.log(hero);

 const  honda = new Vehicle("Honda", "2 Wheeler", "Shine", "125", "Red-Black", 60 );
// console.log(honda);

 const  bajaj = new Vehicle("Bajaj", "2 Wheeler", "Pulsar", "220", "Black", 45 );
// console.log(bajaj);

 const  yamaha = new Vehicle("Yamaha", "2 Wheeler", "FZ", "200", "Navy Blue", 50 );
// console.log(yamaha);

 const  ktm = new Vehicle("KTM", "2 Wheeler", "Duke", "370", "Orange", 35 );
// console.log(ktm);

const arrayOfVehicle = [hero , honda, bajaj, yamaha, ktm];
for (let index = 0; index < arrayOfVehicle.length; index++) {
    const element = arrayOfVehicle[index];
    console.log(`[Company:${element.company},  Wheeler: ${element.wheeler},  Model:${element.Model},  CC:${element.CC},  Color:${element.Color},  Mileage:${element.mileage}]`);
    
}

console.log("******************Define a Class for College ********************");
class College {
    constructor(collegeName, location, university, Type, Degree ){
        this.collegeName = collegeName;
        this.location = location;
        this.university = university;
        this.Type = Type;
        this.Degree = Degree;
    }

 }
const VPCOE = new College("VPCOE", "Baramati", "Pune", "Engineering","Bachelor" );

const KGRDCP = new College("KGRDCP", "Karjat", "Mumbai", "Pharmacy", "Bachelor");

const GPT = new College("GPT", "Diva", "Mumbai", "Enginerring", "Diploma");

const GMC = new College("GMS", "Amravati","Nagpur", "Medical", "Masters");

const VGTI= new College("VJTI", "Matunga", "Mumbai", "MCA", "Masters");


function traverseObject(arg) {
    for (const key in arg) {
        if (Object.hasOwnProperty.call(arg, key)) {
            const element = arg[key];
            
            console.log(`${key}: ${element}`);
        }
       
    }
    
}
traverseObject(VPCOE);
console.log("**********************************");
traverseObject(KGRDCP);
console.log("**********************************");
traverseObject(GPT);
console.log("**********************************");
traverseObject(GMC);
console.log("**********************************");
traverseObject(VGTI);












console.log("**********************11 Is Prime Number or Not************************");
function prime(num) {
    for (let index = 2; index < num; index++) {
        if ( num % index ==0) {
            return `This ${num} is not a Prime Number`;
            
        }   
    }
    return ` This ${num} is a Prime number`;
    
}
console.log(prime(11));
