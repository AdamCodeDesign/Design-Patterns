class Shipping {
  constructor() {
    this.company = "Example Ltd";
  }

  setStrategy(company) {
    this.company = company;
  }

  calculate(parcel) {
    return this.company.calculate(parcel);
  }
}

class UPS {
  calculate(parcel) {
    return parcel.fee;
  }
}

class DHL {
  calculate(parcel) {
    return parcel.fee - 10;
  }
}

let parcel = {
  from: "PL",
  to: "GB",
  fee: 100,
};

let ups = new UPS();
let dhl = new DHL();

const shipping = new Shipping();
shipping.setStrategy(ups);
console.log(shipping.calculate(parcel));

shipping.setStrategy(dhl);
console.log(shipping.calculate(parcel));
