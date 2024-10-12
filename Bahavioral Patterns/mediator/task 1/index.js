class Client {
  constructor(name) {
    this.name = name;
    this.cloudDrive = null;
  }

  sendData(file, to) {
    this.cloudDrive.sendData(file, this, to);
  }

  receiveData(file, from) {
    console.log(
      "file from: ",
      from.name,
      "to: ",
      this.name,
      "file name: ",
      file
    );
  }
}

let cloudDrive = function () {
  let clients = {};

  return {
    register: function (client) {
      if (!clients[client.name]) {
        clients[client.name] = client;
        client.cloudDrive = this;
      }
    },

    sendData: function (file, from, to) {
      if (to) {
        to.receiveData(file, from);
      } else {
        for (const key in clients) {
          if (clients[key] !== from) {
            clients[key].receiveData(file, from);
          }
        }
      }
    },
  };
};

const cloud = cloudDrive();

let client1 = new Client("Adam");
cloud.register(client1);

let client2 = new Client("Pablo");
cloud.register(client2);

let client3 = new Client("Mike");
cloud.register(client3);

client1.sendData('holydays.jpg')
client2.sendData('mountain.jpg', client3)