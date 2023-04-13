'use strict'

function renderDepartmentTable() {
    const employees = JSON.parse(localStorage.getItem('employees')) || [];
  
    const departments = {};
    let totalSalary = 0;
    let totalEmployees = 0;
  
    for (let i = 0; i < employees.length; i++) {
      const employee = employees[i];
  
      if (!departments[employee.department]) {
        departments[employee.department] = {
          employees: [],
          totalSalary: 0,
          numEmployees: 0,
        };
      }
  
      departments[employee.department].employees.push(employee);
      departments[employee.department].totalSalary += employee.salary;
      departments[employee.department].numEmployees += 1;
  
      totalSalary += employee.salary;
      totalEmployees += 1;
    }
  
    const table = document.createElement('table');
    const headerRow = document.createElement('tr');
    const departmentHeader = document.createElement('th');
    departmentHeader.textContent = 'Department Name';
    headerRow.appendChild(departmentHeader);
    const numEmployeesHeader = document.createElement('th');
    numEmployeesHeader.textContent = '# of employees';
    headerRow.appendChild(numEmployeesHeader);
    const totalSalaryHeader = document.createElement('th');
    totalSalaryHeader.textContent = 'Total Salary';
    headerRow.appendChild(totalSalaryHeader);
    const averageSalaryHeader = document.createElement('th');
    averageSalaryHeader.textContent = 'Average';
    headerRow.appendChild(averageSalaryHeader);
    table.appendChild(headerRow);
  
    for (let departmentName in departments) {
      const department = departments[departmentName];
  
      const row = document.createElement('tr');
      const departmentCell = document.createElement('td');
      departmentCell.textContent = departmentName;
      row.appendChild(departmentCell);
      const numEmployeesCell = document.createElement('td');
      numEmployeesCell.textContent = department.numEmployees;
      row.appendChild(numEmployeesCell);
      const totalSalaryCell = document.createElement('td');
      totalSalaryCell.textContent = department.totalSalary;
      row.appendChild(totalSalaryCell);
      const averageSalaryCell = document.createElement('td');
      averageSalaryCell.textContent = Math.round(department.totalSalary / department.numEmployees);
      row.appendChild(averageSalaryCell);
  
      table.appendChild(row);
    }
  
    const footerRow = document.createElement('tr');
    const totalHeader = document.createElement('th');
    totalHeader.textContent = 'Total';
    footerRow.appendChild(totalHeader);
    const totalEmployeesCell = document.createElement('td');
    totalEmployeesCell.textContent = totalEmployees;
    footerRow.appendChild(totalEmployeesCell);
    const totalSalaryCell = document.createElement('td');
    totalSalaryCell.textContent = totalSalary;
    footerRow.appendChild(totalSalaryCell);
    const averageSalaryCell = document.createElement('td');
    averageSalaryCell.textContent = Math.round(totalSalary / totalEmployees);
    footerRow.appendChild(averageSalaryCell);
  
    table.appendChild(footerRow);
  
    const container = document.querySelector('.department-table-container');
    if (container) {
        container.appendChild(table);
    }
}

window.onload = function() {
    renderDepartmentTable();
};
