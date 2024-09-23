class Candidate {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  toString() {
    return `${this.constructor.name} ${this.name} ${this.surname}`;
  }

  showInfo() {
    console.log(this.toString());
  }
}

const candidate1 = new Candidate("Adam", "Leszczyk");
candidate1.showInfo();

class Employee extends Candidate {
  constructor(name, surname, occupation) {
    super(name, surname);
    this.occupation = occupation;
    this.email = `${name.toLowerCase()}.${surname.toLowerCase()}@example.com`;
  }

  toString() {
    return super.toString() + ` ${this.occupation} ${this.email}`;
  }
}
const employee1 = new Employee("Neo", "Anderson", "Developer");
const employee2 = new Employee("Bilbo", "Baggins", "Traveler");
employee1.showInfo();
employee2.showInfo();

class Manager extends Employee {
  constructor(name, surname, occupation, teamName) {
    super(name, surname, occupation);
    this.teamName = teamName;
    this.employees = [];
  }

  addEmployee(employee) {
    this.employees.push(employee);
  }

  toString() {
    return super.toString() + " " + this.teamName;
  }

  showTeam() {
    console.log("Team: ", this.teamName);
    console.log("Manager: ", this.toString());
    this.employees.forEach((e) => console.log("employee: ", e));
  }
}

const manager1 = new Manager(
  "Gandalf",
  "The Grey",
  "manager",
  "The Fellowship of the ring"
);
manager1.addEmployee(employee1);
manager1.addEmployee(employee2);
manager1.showTeam();
