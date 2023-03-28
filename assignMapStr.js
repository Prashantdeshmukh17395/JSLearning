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

console.log("*****************Step1-List of All Employee*****************");
let arrayEmpNames= array_employess.map((employees) =>{
    return employees.emp_name;
});
console.log(arrayEmpNames);



console.log("*****************Step2-List of All Employees Department*****************");
let arrayEmpDept= array_employess.map((employees) =>{
    return employees.emp_dept;
});
let arrayDuplicate = [...new Set(arrayEmpDept)];
console.log(arrayDuplicate);

console.log("*****************Step3-List of All Employee ID*****************");
let arrayEmpId= array_employess.map((employees) =>{
    return employees.emp_id;
});
console.log(arrayEmpId);

console.log("*****************Step4-List of All Employee Working in TCS*****************");
let arrayEmpTcs= array_employess.map((employees) =>{
    if (employees.emp_company=="TCS") {
        console.log(`Employee Name:${employees.emp_name}  && Company Name : ${employees.emp_company}`);
    } 
});
