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

const array_employess = [emp_anil, emp_radha, emp_rishi, emp_sonali,emp_monika, emp_viny, emp_mahi]
console.log("**************Step(1)*******************");
for (const employeeList of array_employess) {
    if (employeeList.emp_company == "TCS") {
        console.log(`The name of Employee ${employeeList.emp_name} & The company they Working is: ${employeeList.emp_company}`);
        
    }c
    
}
console.log("**************Step(2)*******************");
for (const employeeList of array_employess) {
    if (employeeList.emp_dept == "Finance") {
        console.log(`The name of Employee ${employeeList.emp_name} & The Department they  are Working In: ${employeeList.emp_dept}`);
        
    }
    
}

console.log("****************Step(3)*******************");
for (const employeeList of array_employess) {
    if (employeeList.startWith =="R" ) {
        console.log(`The Details of Employee ${employeeList.emp_id}  ${employeeList.emp_name}  ${employeeList.emp_dept}  ${employeeList.emp_salary}  ${employeeList.emp_company}`);
        
    }
    
}
console.log("*******************Step(4)*******************");
for (const employeeList of array_employess) {
    if (employeeList.emp_salary > 75000) {
        console.log(`The name of Employee ${employeeList.emp_name} & The company they Working is: ${employeeList.emp_company} & Salary is:${employeeList.emp_salary}`);
        
    }
    
}
console.log("*******************Step(5)*******************");
for (const employeeList of array_employess) {
    if (employeeList.emp_salary >=50000 && employeeList.emp_dept == "IT") {
        console.log(`The Details of Employee ${employeeList.emp_id}  ${employeeList.emp_name}  ${employeeList.emp_dept}  ${employeeList.emp_salary}  ${employeeList.emp_company}`);
        
    }
    
}

console.log("*******************Step(6)*******************");
for (const employeeList of array_employess) {
    if ( employeeList.emp_company == "Infy") {
        console.log(`The Name of Employee ${employeeList.emp_name} & Company is Working For: ${employeeList.emp_company}`);
        
    }
    
}




