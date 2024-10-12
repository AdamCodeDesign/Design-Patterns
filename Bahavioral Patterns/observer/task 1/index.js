class Newsletter {
  constructor() {
    this.observers = [];
  }

  subscribe(observer) {
    if (this.observers.includes(observer)) {
      console.log("Reader: ", observer.name, "subscribes this Newsletter");
    } else {
      this.observers.push(observer);
    }
  }

  unsubscribe(observer) {
    this.observers.splice(
      this.observers.findIndex((o) => o === observer),
      1
    );
  }

  sendLetter(letter) {
    this.observers.forEach((o) => o.notify(letter));
  }
}

class Reader {
  constructor(name) {
    this.name = name;
  }

  notify(letter) {
    console.log(this.name, "received letter: ", letter);
  }
}

const newsLetter = new Newsletter();

const reader1 = new Reader('Adam')
const reader2 = new Reader('John')
const reader3 = new Reader('Jimmy')

newsLetter.subscribe(reader1)
newsLetter.subscribe(reader2)
newsLetter.subscribe(reader3)

newsLetter.sendLetter('News from IT branch')

newsLetter.unsubscribe(reader2)

newsLetter.sendLetter('Today news')
