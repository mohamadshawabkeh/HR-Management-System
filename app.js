"use strict"
/* Compained code for all sections is down 
function Employee(employeeId, fullName, department, level, imageUrl) {
    this.employeeId = employeeId;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imageUrl = imageUrl;
    this.salary = this.calculateSalary();
  }
  
Employee.prototype.calculateSalary = function() {
  var minSalary, maxSalary;
  switch (this.level) {
    case 'Senior':
      minSalary = 1500;
      maxSalary = 2000;
      break;
    case 'Mid-Senior':
      minSalary = 1000;
      maxSalary = 1500;
      break;
    case 'Junior':
      minSalary = 500;
      maxSalary = 1000;
      break;
    default:
      minSalary = 0;
      maxSalary = 0;
      break;
  }
  var salary = Math.floor(Math.random() * (maxSalary - minSalary + 1)) + minSalary;
  var netSalary = salary * 0.925; // 7.5% tax
  return netSalary;
};

/*
Employee.prototype.render = function() {
  document.write(`<p> ${this.employeeId} -  ${this.fullName}: ${this.salary} - ${this.department} - ${this.level} - ${this.image} </p>`);
};

var employees = [
  new Employee(1000, 'Ghazi Samer', 'Administration', 'Senior', 'employee1.png'),
  new Employee(1001, 'Lana Ali', 'Finance', 'Senior', 'employee2.png'),
  new Employee(1002, 'Tamara Ayoub', 'Marketing', 'Senior', 'employee3.png'),
  new Employee(1003, 'Safi Walid', 'Administration', 'Mid-Senior', 'employee4.png'),
  new Employee(1004, 'Omar Zaid', 'Development', 'Senior', 'employee5.png'),
  new Employee(1005, 'Rana Saleh', 'Development', 'Junior', 'employee6.png'),
  new Employee(1006, 'Hadi Ahmad', 'Finance', 'Mid-Senior', 'employee7.png')
];

for (var i = 0; i < employees.length; i++) {
  employees[i].render();
}
*/

function Employee(fullName, department, level, imageUrl) {
  this.fullName = fullName;
  this.department = department;
  this.level = level;
  this.imageUrl = imageUrl;
  this.employeeId = generateEmployeeId(); 
  this.salary = this.calculateSalary();


  this.render = function() {
    const card = document.createElement('div');
    card.className = 'card';

    const img = document.createElement('img');
    img.src = this.imageUrl;
    img.alt = 'Employee Photo';
    card.appendChild(img);

    const name = document.createElement('h2');
    name.textContent = this.fullName;
    card.appendChild(name);

    const department = document.createElement('p');
    department.textContent = `Department: ${this.department}`;
    card.appendChild(department);

    const level = document.createElement('p');
    level.textContent = `Level: ${this.level}`;
    card.appendChild(level);

    const employeeId = document.createElement('p');
    employeeId.textContent = `Employee ID: ${this.employeeId}`;
    card.appendChild(employeeId);

    const salary = document.createElement('p');
    salary.textContent= `Salary: ${this.salary}`;
    card.appendChild(salary);

    const container = document.querySelector('.card-container');
    container.appendChild(card);

    let departmentContainer = document.querySelector(`.${this.department.toLowerCase()}-container`);
  if (!departmentContainer) {
    departmentContainer = document.createElement('div');
    departmentContainer.className = `department-container ${this.department.toLowerCase()}-container`;

    const departmentTitle = document.createElement('h2');
    departmentTitle.textContent = this.department;
    departmentContainer.appendChild(departmentTitle);

    container.appendChild(departmentContainer);
  }

  departmentContainer.appendChild(card);
};
  };
  Employee.prototype.calculateSalary = function() {
    var minSalary, maxSalary;
    switch (this.level) {
      case 'Senior':
        minSalary = 1500;
        maxSalary = 2000;
        break;
      case 'Mid-Senior':
        minSalary = 1000;
        maxSalary = 1500;
        break;
      case 'Junior':
        minSalary = 500;
        maxSalary = 1000;
        break;
      default:
        minSalary = 0;
        maxSalary = 0;
        break;
    }
    var salary = Math.floor(Math.random() * (maxSalary - minSalary + 1)) + minSalary;
    var netSalary = salary * 0.925; // 7.5% tax
    return netSalary;
  };

function generateEmployeeId() {
  return Math.floor(Math.random() * (2000 - 1000 + 1)) + 1000;
}



function renderEmployee() {
  const fullName = document.querySelector('#full-name').value;
  const department = document.querySelector('#department').value;
  const level = document.querySelector('#level').value;
  const imageUrl = document.querySelector('#image-url').value;
  
  const employee = new Employee(fullName, department, level, imageUrl);
  employee.render();

  let employeesData = localStorage.getItem('employees');
  let employees = [];

  if (employeesData) {
    employees = JSON.parse(employeesData);
}
   employees.push(employee);

   localStorage.setItem('employees', JSON.stringify(employees));
};


const form = document.querySelector('#employee-form');
form.addEventListener('submit', function(event) {
     event.preventDefault();
   renderEmployee();
});

window.onload = function() {
  const employees = JSON.parse(localStorage.getItem('employees')) || [];

  for (let i = 0; i < employees.length; i++) {
    const employee = new Employee(
      employees[i].fullName,
      employees[i].department,
      employees[i].level,
      employees[i].imageUrl
    );

    employee.employeeId = employees[i].employeeId;
    employee.salary = employees[i].salary;
 

    employee.render();
  }
};


