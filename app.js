"use strict"

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