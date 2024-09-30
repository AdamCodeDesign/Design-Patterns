function CreditRequest(data) {
  this.data = data;
}

function BackgroundCheck() {
  this.check = function (creditRequest, amount) {
    return true;
  };
}

function RiskCheck() {
  this.check = function (creditRequest, amount) {
    return true;
  };
}

function BIKCheck() {
  this.check = function (creditRequest, amount) {
    return true;
  };
}

CreditRequest.prototype.applyFor = function (amount) {
  let result = {
    result: false,
    error: null,
  };

  let riskCheck = new RiskCheck();
  let backgroundCheck = new BackgroundCheck();
  let bikCheck = new BIKCheck();

  if (!riskCheck.check(this, amount)) {
    result.result = false;
    result.error = "Not approved by Risk Department";
  }
  if (!backgroundCheck.check(this, amount)) {
    result.result = false;
    result.error = "Not approved by Background Department";
  }
  if (!bikCheck.check(this, amount)) {
    result.result = false;
    result.error = "Not approved by BIK";
  }

  if (!result.error) {
    result.result = true;
  }

  return result;
};

const person = {
  name: "Adam",
  salary: 8000,
  documents: [],
};

let creditRequest = new CreditRequest(person);
let result = creditRequest.applyFor(20000);
console.log(result);
