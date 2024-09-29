function Task(name, description, isDone) {
  this.name = name;
  this.description = description;
  this.isDone = isDone;
}

function TaskBuilder() {
  let name, description, isDone;

  return {
    setName: function (name) {
      this.name = name;
      return this;
    },
    setDescription: function (description) {
      this.description = description;
      return this;
    },
    setDone: function (isDone) {
      this.isDone = isDone;
      return this;
    },

    build: function () {
      return new Task(this.name, this.description, this.isDone);
    },
  };
}
let task = (new TaskBuilder())
  .setName("Task #1")
  .setDescription("Description for task #1")
  .setDone(false)
  .build();
console.log(task)