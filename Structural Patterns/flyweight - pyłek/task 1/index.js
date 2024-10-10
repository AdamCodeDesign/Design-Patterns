function Flyweight(brand, name, color) {
  this.brand = brand;
  this.name = name;
  this.color = color;
}

function Car(brand, name, color, engine) {
  this.flyweight = FlyweightFactory.get(brand, name, color);
  this.engine = engine;
}

const FlyweightFactory = (function () {
  let flyweights = {};

  return {
    get: function (brand, name, color) {
      let propName = `${brand}_${name}_${color}`;

      if (!flyweights[propName]) {
        flyweights[propName] = new Flyweight(brand, name, color);
      }

      return flyweights[propName];
    },

    count: function () {
      return Object.keys(flyweights).length;
    },
  };
})();

let carDealer = [];

carDealer.push(new Car("Suzuki", "Swift", "black", "1.3 turbo"));
carDealer.push(new Car("Suzuki", "Swift", "black", "1.1"));
carDealer.push(new Car("Suzuki", "Swift", "black", "1.5"));
carDealer.push(new Car("Suzuki", "Swift", "red", "1.5"));
carDealer.push(new Car("Suzuki", "Swift", "red", "1.5"));

console.log(carDealer);
console.log(FlyweightFactory.count());
