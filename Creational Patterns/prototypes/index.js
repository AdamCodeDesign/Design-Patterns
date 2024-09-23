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

const pharmacy1 = new Pharmacy("Dr. Adamo", "Kajdasza", "Dobre Apteki");
console.log(pharmacy1);
pharmacy1.addToCart("Ibuprofen", 19.99);
pharmacy1.showCart();

// zadanie z dwoma constructor function

function Telephone(brand, name) {
  this.brand = brand;
  this.name = name;
  this.contacts = [];
}

Telephone.prototype.addContact = function (name, telephone) {
  this.contacts.push({ name: name, telephone: telephone });
};

function Smartphone(brand, name, appsArr) {
  Telephone.call(this, brand, name);
  this.appsArr = appsArr;
}
Smartphone.prototype = Object.create(Telephone.prototype);
Smartphone.prototype.constructor = Smartphone;
Smartphone.prototype.showContacts = function () {
  this.contacts.forEach((contact) => {
    console.log('contact: ',contact.name, contact.telephone);
  });
};
Smartphone.prototype.showApps = function () {
  this.appsArr.forEach(app => console.log('app: ',app))
};
Smartphone.prototype.addApp = function (appName) {
  this.appsArr.push(appName);
};

const smartphone1 = new Smartphone("Xiomi", "Redmi Note 8 Pro", ['YT', "fb", 'Netflix']);
console.log(smartphone1)
smartphone1.addContact('Joanna', 2398769876)
smartphone1.addContact('Kwiatek', 458798767)
smartphone1.addContact('Dom', 6798786756)
smartphone1.showContacts()
smartphone1.addApp('HBO')
smartphone1.showApps()