class Journey {
  constructor() {
    this.transport = null;
  }

  setStrategy(transport) {
    this.transport = transport;
  }

  calculatePrice(trip) {
    return this.transport.calculatePrice(trip);
  }

  calculateTime(trip) {
    return this.transport.calculateTime(trip);
  }
}

class Train {
  calculatePrice(trip) {
    return 500;
  }

  calculateTime(trip) {
    return 30;
  }
}

class Car {
  calculatePrice(trip) {
    return 700;
  }

  calculateTime(trip) {
    return 20;
  }
}

class Plane {
  calculatePrice(trip) {
    return 1000;
  }

  calculateTime(trip) {
    return 3;
  }
}

let trip = {
  from: "PL",
  to: "Gibraltar",
};

let journey = new Journey();
let train = new Train();
let car = new Car();
let plane = new Plane();

journey.setStrategy(plane);
console.log(journey.calculatePrice());
console.log(journey.calculateTime());
