function Vehicle(brand, name) {
  this.brand = brand;
  this.name = name;
}

function Car(brand, name, color) {
  Vehicle.call(this, brand, name);
  this.color = color;
}
function Truck(brand, name, color, capacity) {
  Car.call(this, brand, name, color);
  this.capacity = capacity;
}

const VehicleFactory = {
  getVehicle: function (type) {
    let vehicle = null;
    switch (type) {
      case "car":
        vehicle = new Car("Nissan", "Almera", "green");
        break;

      case "truck":
        vehicle = new Truck("Volvo", "V800", "black", 20);
        break;
    }

    vehicle.toString = function () {
      return (
        `${this.constructor.name} 
         
        ${this.brand} 
        
        ${this.name} 
        
        ${this.color}  ${this.capacity ? this.capacity : ''}`
      );
    };
    return vehicle;
  },
};

const car1 = VehicleFactory.getVehicle('car')
console.log(car1.toString())

const truck1 = VehicleFactory.getVehicle('truck')
console.log(truck1.toString())