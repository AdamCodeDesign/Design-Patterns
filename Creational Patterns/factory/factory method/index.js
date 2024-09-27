function BasicUser(email, password) {
  this.email = email;
  this.password = password;
  this.rank = "user";
}

function AdminUser(email, password) {
  BasicUser.call(this, email, password);
  this.rank = "admin";
}

let UserFactory = {
  getUser: function (rank) {
    let user = null;
    let email = rank + Math.round(Math.random() * 99999)+ "@example.com";

    switch (rank) {
      case "user":
        user = new BasicUser(email, "dkfhjgvfv7");
        break;
      case "admin":
        user = new AdminUser(email, "fdkjhvdf67");
        break;
    }

    user.trainingRequired = true;
    user.showInfo = function () {
      console.log(this.name, this.rank);
    };
    return user;
  },
};
const user1 = UserFactory.getUser('user')
console.log(user1)

const admin1 = UserFactory.getUser('admin')
console.log(admin1)