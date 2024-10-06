let paymentData = { amount: 100.12, recipient: "adam@example.com" };
let credentials = { token: "798765" };

function PaymentApi(credentials) {
  this.sendMoney = function (paymentData) {
    return {
      result: true,
      fee: paymentData.amount * 0.05,
    };
  };
}

let oldPaymentApi = new PaymentApi(credentials);
let oldPrice = oldPaymentApi.sendMoney(paymentData);
console.log(oldPrice);

function NewPaymentApi() {
  return {
    login: function (credentials) {
      console.log("Logged in");
    },

    setPriority: function (priority) {
      this.priority = priority;
    },

    setRecipient: function (recipient) {
      console.log(`${recipient.toLowerCase()}@example.com`);
    },

    sendMoney: function (money) {
      return {
        result: true,
        fee:
          this.priority.toLowerCase() === "high" ? money * 0.03 : money * 0.02,
      };
    },
  };
}

function PaymentAdapter(credentials) {
  let payment = new NewPaymentApi();
  payment.login(credentials);
  return {
    sendMoney: function (paymentData) {
      payment.setPriority("high");
      payment.setRecipient('Adam')
      return payment.sendMoney(paymentData.amount);
    },
  };
}

let adapter = new PaymentAdapter(credentials);
let newPrice = adapter.sendMoney(paymentData);
console.log(newPrice);
