class User {
    constructor(name) {
        this.name = name;
        this.chatRoom = null;
    }
    send(msg, to) {
        this.chatRoom.send(msg, this, to);
        console.log(this)
    }
    receive(msg, from) {
        console.log("from: ", from.name, "to user: ", this.name, "msg: ", msg);
    }
}



let chatRoom = function () {
  let users = {};

  return {
    register: function (user) {
      if (!users[user.name]) {
        users[user.name] = user;
        user.chatRoom = this;
      }
    },

    send: function (msg, from, to) {
      if (to) {
        to.receive(msg, from);
      } else {
        for (const key in users) {
          if (users[key] !== from) {
            users[key].receive(msg, from);
          }
        }
      }
    },
  };
};

const chat = chatRoom();

let user1 = new User("Adam");
chat.register(user1);

let user2 = new User("Joanna");
chat.register(user2);

let user3 = new User("Michał");
chat.register(user3);

user1.send('czesc wam')

user1.send('czesc Asia', user2)