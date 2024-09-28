let programer = function (state) {
  return {
    useLanguage: function (language) {
      state.language = language;
    },

    code: function (task) {
      console.log(state.name, "is coding in language: ", state.language, task);
    },
  };
};

let tester = function (state) {
  return {
    test: function (program) {
      console.log(state.name, "is testing: ", program);
    },
  };
};

let employee = function (name, surname) {
  let state = {
    name: name,
    surname: surname,
  };

  return Object.assign(state, programer(state), tester(state));
};

let employee1 = employee("Adam", "Leszczyk");
employee1.useLanguage("JavaScript");
employee1.code("Awesome app");
employee1.code("Awesome app2");
employee1.test('Awesome app')
console.log(employee1)
console.log(employee1)
