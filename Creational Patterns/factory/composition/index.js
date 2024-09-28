let speaker = function (state) {
  return {
    speak: function () {
      console.log(state.name, "mówi: ", state.words);
    },
  };
};

let walker = function (state) {
  return {
    walk: function () {
      console.log(state.name, " is walking");
    },

    run: function () {
      console.log(state.name, " is running");
    },
  };
};

let person = function (name, age) {
  let state = {
    name: name,
    age: age,
    words: "Hello",
  };

  return Object.assign(state, speaker(state), walker(state));
};

let person1 = person('Adam', 38)
console.log(person1.speak())
console.log(person1.walk())
console.log(person1.run())