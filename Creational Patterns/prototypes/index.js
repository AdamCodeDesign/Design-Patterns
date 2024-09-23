// Zamiast przypisywać metody bezpośrednio do każdej instancji obiektu, są one definiowane na prototypie, co oznacza, że są współdzielone przez wszystkie instancje. Dzięki temu zamiast powielać te same funkcje w pamięci dla każdej instancji, JavaScript przechowuje je w jednym miejscu – na prototypie.

function Ticker(name, country) {
  this.name = name;
  this.country = country;
}

Ticker.prototype.printInfo = function () {
  console.log(this.name, this.country);
};

const tesla = new Ticker("TSLA", "USA");
tesla.printInfo();

//pozyczanie construktora

function Shop(name, address) {
  this.name = name;
  this.address = address;
  this.shoppingCart = [];
}

Shop.prototype.addToCart = function (name, price) {
  this.shoppingCart.push({ name: name, price: price });
};

function Pharmacy(name, address, brand) {
  Shop.call(this, name, address);
}

Pharmacy.prototype = Object.create(Shop.prototype);
Pharmacy.prototype.constructor = Pharmacy;
Pharmacy.prototype.showCart = function () {
  console.log(this.shoppingCart);
};

const pharmacy1 = new Pharmacy('Dr. Adamo', 'Kajdasza', 'Dobre Apteki')
console.log(pharmacy1)
pharmacy1.addToCart('Ibuprofen', 19.99)
pharmacy1.showCart()

