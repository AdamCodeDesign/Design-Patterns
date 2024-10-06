function Car(brand, name, topSpeed) {
  this.brand = brand;
  this.name = name;
  this.topSpeed = topSpeed;
}

function decorateToSuperCar(car, data) {
  car.turbo = data.turbo || 0;
  car.spoiler = data.spoiler || 0;
  car.exhaust = data.exhaust || 0;
  car.topSpeed =
    car.topSpeed + car.topSpeed * (car.turbo + car.spoiler + car.exhaust);

  car.drift = function () {
    console.log("SuperCar is drifting");
  };
  return car;
}

let car1 = new Car("Suzuki", "Swift", 180);
let superCar1 = decorateToSuperCar(car1, {
  turbo: 0.15,
  spoiler: 0.05,
  exhaust: 0.1,
});
console.log(superCar1);
