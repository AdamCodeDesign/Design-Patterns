function Flyweight(brand, cpu, ram) {
  this.brand = brand;
  this.cpu = cpu;
  this.ram = ram;
}

function Computer(brand, cpu, ram, color, modelId) {
  this.flyweight = FlyweightFactory.get(brand, cpu, ram);
  this.color = color;
  this.modelId = modelId;
}

const FlyweightFactory = (function () {
  let flyweights = {};

  return {
    get: function (brand, cpu, ram) {
      let propName = `${brand}_${cpu}_${ram}`;

      if (!flyweights[propName]) {
        flyweights[propName] = new Flyweight(brand, cpu, ram);
      }

      return flyweights;
    },

    count: function () {
      return Object.keys(flyweights).length;
    },
  };
})();

let shop = [];
shop.push(new Computer("Dell", "intel i7", 16, "black", "geh35t"));
shop.push(new Computer("Dell", "intel i7", 16, "white", "gedf35t"));
shop.push(new Computer("Dell", "intel i7", 16, "green", "gsdc35t"));
shop.push(new Computer("Asus", "intel i9", 32, "white", "ekhfbe"));
shop.push(new Computer("Asus", "intel i9", 32, "white", "ekhfbe"));
shop.push(new Computer("Asus", "intel i7", 32, "white", "ekhfbe"));

console.log(shop);
console.log(FlyweightFactory.count())