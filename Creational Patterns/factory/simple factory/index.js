function carFactory(brand, name) {
  let randomId = Math.round(Math.random() * 999);

  return {
    brand: brand,
    name: name,
    id: randomId,
    showInfo: function () {
      console.log(this.brand, this.name, this.id);
    },
  };
}
const car1 = carFactory('Suzuki', 'Swift');
const car2 = carFactory('Nissan', 'Almera');
console.log(car1)
console.log(car2)
car1.showInfo()