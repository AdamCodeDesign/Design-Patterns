class Bike {
  constructor(name) {
    this.name = name;
    this.numWheels = 2;
  }

  info() {
    console.log("Bike:", this.name, this.numWheels);
  }
}

class BikeFactory {
  createVehicle() {
    return new Bike("Romet");
  }
}

class Car {
  constructor(name) {
    this.name = name;
    this.numWheels = 4;
  }

  info() {
    console.log("Car:", this.name, this.numWheels);
  }
}

class CarFactory {
  createVehicle() {
    return new Car("Volvo");
  }
}

class Truck {
  constructor(name) {
    this.name = name;
    this.numWheels = 6;
  }

  info() {
    console.log("Truck:", this.name, this.numWheels);
  }
}

class TruckFactory {
  createVehicle() {
    return new Truck("Scania");
  }
}

class AbstractVehicleFactory {
  constructor() {
    this.types = {};
  }

  // Rejestracja typu pojazdu
  registerType(type, factory) {
    let vehicle = factory.createVehicle();

    if (vehicle.numWheels && vehicle.numWheels > 0 && vehicle.name) {
      this.types[type.toLowerCase()] = factory;
    }
  }

  // Pobranie wszystkich zarejestrowanych typów pojazdów
  getTypes() {
    return this.types;
    
  }

  // Tworzenie pojazdu na podstawie zarejestrowanego typu
  getVehicle(type) {
    let vehicleType = this.types[type.toLowerCase()];
    if (vehicleType) return vehicleType.createVehicle();
    return null; // Jeśli typ nie istnieje
  }
}

let vehicleFactory = new AbstractVehicleFactory();
vehicleFactory.registerType("bike", new BikeFactory());
vehicleFactory.registerType("car", new CarFactory());
vehicleFactory.registerType("truck", new TruckFactory());

console.log(vehicleFactory.getTypes());

let bike = vehicleFactory.getVehicle("bike");
let car = vehicleFactory.getVehicle("car");
let truck = vehicleFactory.getVehicle("truck");
bike.info();
car.info();
truck.info();
console.log(bike)