class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}

const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT",40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");


const array_employess = [emp_anil, emp_radha, emp_rishi, emp_sonali,emp_monika, emp_viny, emp_mahi];

console.log("*****************(1)Find Out TCS Employee*********************");
array_employess.forEach(element => {
    if (element.emp_company=="TCS") {
        console.log(`Employee Name:${element.emp_name}  && Company Name : ${element.emp_company}`);
    } 
 })
 
 console.log("*****************(2)Find Out Salary greater than =50000*********************");
array_employess.forEach(element => {
    if (element.emp_salary>=50000) {
        console.log(`Employee Name:${element.emp_name}&& Employee ID:${element.emp_id}  && Company Name : ${element.emp_company } && Salary:${element.emp_salary}`);
    } 
 })

 
 console.log("*****************(3)Find Out Sum Of Salary*********************");
 let sumArray=0;
array_employess.forEach(element => {
    sumArray=sumArray+element.emp_salary;
    return sumArray;
})
console.log(`Sum Of Salary of Employees: ${sumArray}`);
  