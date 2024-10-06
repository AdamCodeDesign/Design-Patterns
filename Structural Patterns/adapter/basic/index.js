//stary interface

function Transport(credentials) {
  this.send = function (address, weight) {
    return 180;
  };
}

let address = { country: "PL" };
let credentials = { token: "23674892" };
let oldTransport = new Transport(credentials);
let oldPrice = oldTransport.send(address, 20);

// new interface

function NewTransport() {
  return {
    login: function (credentials) {
      console.log("Logged in");
    },

    setPriority: function (priority) {
      console.log("Priority: ", priority);
    },

    setDestination: function (address) {
      console.log("Destination: ", address);
    },

    getPrice: function (weight) {
      return 100;
    },
  };
}

//adapter

function TransportAdapter(credentials) {
  let shipping = new NewTransport();
  shipping.login(credentials);

  return {
    send: function (address, weight) {
      shipping.setPriority("standard");
      shipping.setDestination(address);
      return shipping.getPrice(weight);
    },
  };
}

let adapter = new TransportAdapter(credentials);
let newPrice = adapter.send(address, 30);
console.log(newPrice);
