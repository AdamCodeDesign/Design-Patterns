class Student {
  constructor(name, surname, age, country) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.country = country;
  }

  printInfo(){
    console.log(this.name, this.surname, this.age, this.country)
  }
}
