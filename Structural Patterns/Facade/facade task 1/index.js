function TaskMaker(devName) {
  this.devName = devName;
}

function DescriptionCheck() {
  this.check = function (codingTask) {
    return true;
  };
}
function CodingCheck() {
  this.check = function (codingTask) {
    return true;
  };
}
function TestCheck() {
  this.check = function (codingTask) {
    return true;
  };
}

TaskMaker.prototype.finish = function (codingTask) {
  let result = {
    result: false,
    error: null,
  };

  const descriptionCheck = new DescriptionCheck();
  const codingCheck = new CodingCheck();
  const testCheck = new TestCheck();

  if (!descriptionCheck.check(codingTask)) {
    result.result = false;
    result.error = "Errors in task description";
  }
  if (!codingCheck.check(codingTask)) {
    result.result = false;
    result.error = "Errors in coding ";
  }
  if (!testCheck.check(codingTask)) {
    result.result = false;
    result.error = "Tests not passed";
  }
  if (!result.error) {
    result.result = true;
  }
  return result;
};

const codingTask = {
  title: "Task 1",
  description: "Task description",
};

const taskMaker = new TaskMaker("Adam")
const result = taskMaker.finish(codingTask)
console.log(result)