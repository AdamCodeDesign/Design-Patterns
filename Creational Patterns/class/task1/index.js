class Person {
  constructor(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
  }

  printInfo() {
    console.log(this.name, this.surname, this.age);
  }
}

class Student extends Person{
  constructor(name, surname, age, profession) {
    super(name, surname, age);
    this.profession = profession;
  }
  printInfo() {
    super.printInfo();
  }
}

const student1 = new Student("Adam", "Leszczyk", 99);
student1.printInfo();
