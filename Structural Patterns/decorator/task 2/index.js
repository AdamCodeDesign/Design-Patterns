class SmartphoneConfig {
    constructor() {
        this.cost = function () {
            return 2000;
        };

        this.screenSize = function () {
            return 5.5;
        };

        this.storageSize = function () {
            return "32gb";
        };
    }
}

function increaseStorage(smartphone) {
  let price = smartphone.cost();

  smartphone.cost = function () {
    return price + 1000;
  };
  smartphone.storageSize = function () {
    return "128gb";
  };
}

function increaseScreenSize(smartphone) {
  let price = smartphone.cost();

  smartphone.cost = function () {
    return price + 800;
  };

  smartphone.screenSize = function () {
    return 6;
  };
}

function addInsurance(smartphone) {
  let price = smartphone.cost();

  smartphone.cost = function () {
    return price + price * 0.1;
  };
}

const smartphone1 = new SmartphoneConfig();
console.log("basic", smartphone1.cost());
console.log("basic", smartphone1.screenSize());
console.log("basic", smartphone1.storageSize());

increaseStorage(smartphone1);
console.log("inc storage", smartphone1.cost());
console.log("inc storage", smartphone1.screenSize());
console.log("inc storage", smartphone1.storageSize());

increaseScreenSize(smartphone1)
console.log("inc screenSize", smartphone1.cost());
console.log("inc screenSize", smartphone1.screenSize());
console.log("inc screenSize", smartphone1.storageSize());

addInsurance(smartphone1)
console.log("with insurance", smartphone1.cost());
console.log("with insurance", smartphone1.screenSize());
console.log("with insurance", smartphone1.storageSize());
