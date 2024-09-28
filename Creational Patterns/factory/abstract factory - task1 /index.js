class Pc {
  constructor(brand, name) {
    this.brand = brand;
    this.name = name;
  }

  toString() {
    return `${this.constructor.name} ${this.brand} ${this.name}`;
  }
}

class PcFactory {
  createDevice() {
    return new Pc("Dell", "Optiplex");
  }
}

class Laptop extends Pc {
  constructor(brand, name, screenSize) {
    super(brand, name);
    this.screenSize = screenSize;
  }

  toString() {
    return `${this.constructor.name} ${this.brand} ${this.name} ${this.screenSize}`;
  }
}

class LaptopFactory {
  createDevice() {
    return new Laptop("Apple", "Macbook pro", '15"');
  }
}

class GamingLaptop extends Laptop {
  constructor(brand, name, screenSize, gpu) {
    super(brand, name, screenSize);
    this.gpu = gpu;
  }

  toString() {
    return `${this.constructor.name} ${this.brand} ${this.name} ${this.screenSize} ${this.gpu}`;
  }
}

class GamingLaptopFactory {
  createDevice() {
    return new GamingLaptop("Asus", "Alien", '17"', "Radeon RX 6650XT");
  }
}

class AbstractDeviceFactory {
  constructor() {
    this.types = {};
  }

  registerType(type, factory) {
    let device = factory.createDevice();
    if (device.brand && device.name) {
      this.types[type.toLowerCase()] = factory;
    }
  }

  getTypes() {
    return this.types;
  }

  getDevice(type) {
    let deviceType = this.types[type.toLowerCase()];
    return deviceType ? deviceType.createDevice() : null;
  }
}

let deviceFactory = new AbstractDeviceFactory();

deviceFactory.registerType("pc", new PcFactory());
deviceFactory.registerType("laptop", new LaptopFactory());
deviceFactory.registerType("gaming laptop", new GamingLaptopFactory());

let pc1 = deviceFactory.getDevice('pc')
let laptop1 = deviceFactory.getDevice('laptop')
let gamingLaptop1 = deviceFactory.getDevice('gaming laptop')
console.log(deviceFactory.getTypes())
console.log(pc1.toString())
console.log(laptop1.toString())
console.log(gamingLaptop1.toString())
