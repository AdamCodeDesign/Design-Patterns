function Product(brand, name, productionDate, price) {
  this.brand = brand;
  this.name = name;
  this.productionDate = productionDate;
  this.price = price;

  this.printInfo = () => {
    console.log(this.brand, this.name, this.productionDate, this.price);
  };
}

const computer = new Product('Apple', 'MacBook Pro 15', 2015, 8999)
computer.printInfo()