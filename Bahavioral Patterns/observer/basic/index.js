class JobPortal {
  constructor() {
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    this.observers.splice(
      this.observers.findIndex((o) => o === observer),
      1
    );
  }

  addNewListings(offer) {
    this.observers.forEach((o) => o.notify(offer));
  }
}

class Candidate {
  constructor(name) {
    this.name = name;
  }

  notify(offer) {
    console.log(this.name, "receive offer: ", offer);
  }
}

const jobPortal = new JobPortal();

const candidate1 = new Candidate('Adam')
const candidate2 = new Candidate('John')
const candidate3 = new Candidate('Mike')

jobPortal.subscribe(candidate1)
jobPortal.subscribe(candidate2)
jobPortal.subscribe(candidate3)
jobPortal.addNewListings('Junior Fullstack Developer - full time')

jobPortal.unsubscribe(candidate1)
jobPortal.addNewListings('Senior Fullstack Developer')