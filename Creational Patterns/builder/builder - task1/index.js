function Employee(name, surname, occupation) {
  this.name = name;
  this.surname = surname;
  this.occupation = occupation;
  this.email = `${name.toLowerCase()}.${surname.toLowerCase()}@example.com`;

  this.toString = function () {
    return `${this.constructor.name} ${this.name} ${this.surname} ${this.occupation} ${this.email}`;
  };
}

function EmployeeBuilder() {
  let emplName, emplSurname, emplOccupation;

  return {
    setName: function (name) {
      emplName = name;
      return this;
    },

    setSurname: function (surname) {
      emplSurname = surname;
      return this;
    },

    setOccupation: function (occupation) {
      emplOccupation = occupation;
      return this;
    },

    build: function () {
      return new Employee(emplName, emplSurname, emplOccupation);
    },
  };
}

function Company(name, employees = []) {
  this.name = name;
  this.employees = employees;

  this.toString = function () {
    return (
      this.constructor.name +
      " " +
      this.name +
      "\n Employees: \n" +
      this.employees.map((e) => "- " + e.toString()).join("\n")
    );
  };
}

function CompanyBuilder() {
  let companyName,
    companyEmployees = [];

  return {
    setName: function (name) {
      companyName = name;
      return this;
    },

    setEmployees: function (employees) {
      companyEmployees = employees;
      return this;
    },

    addEmployee: function (employee) {
      companyEmployees.push(employee);
      return this;
    },

    build: function () {
      return new Company(companyName, companyEmployees);
    },
  };
}

const employeeBuilder = new EmployeeBuilder();
const employee1 = employeeBuilder
  .setName("John")
  .setSurname("Wick")
  .setOccupation("shooter")
  .build();
const employee2 = employeeBuilder
  .setName("Oswald")
  .setSurname("Capplebot")
  .setOccupation("boss")
  .build();

const companyBuilder = new CompanyBuilder();
const company1 = companyBuilder
  .setName("The Continental")
  .addEmployee(employee1)
  .addEmployee(employee2)
  .build();
console.log(company1);
console.log(company1.toString());
