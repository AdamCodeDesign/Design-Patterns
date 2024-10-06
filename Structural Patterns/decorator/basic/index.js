function User(name, address, email) {
  this.name = name;
  this.address = address;
  this.email = email;
}

function decoratorToEmployee(employee, data) {
  employee.company = data.company || "Example LTD";
  employee.salary = data.salary || 6000;
  employee.tasks = [];

  employee.addTask = function (task) {
    this.tasks.push(task);
  };
  employee.clearTasks = function () {
    this.tasks = [];
  };
  return employee;
}

let user1 = new User("Adam", "Wrocław", "adamcodedesign@gmail.com");
let employee1 = decoratorToEmployee(user1, { salary: 10_000 });
console.log(employee1)
