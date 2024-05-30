class Human {
  constructor(name) {
    this.name = name;
  }

  greeting() {
    console.log(`Hello my name is ${this.name}`);
  }

  work() {
    console.log("I am working!");
  }

  _call() {
    console.log("I am calling you!!");
  }
}

class Programmer extends Human {
  constructor(name, programmingLanguage) {
    super(name);

    this.programmingLanguage = programmingLanguage;
  }

  greeting() {
    super.greeting();

    console.log(`I can code with ${this.programmingLanguage}`);
  }

  coding() {
    console.log(`I am coding a ${this.programmingLanguage} backend!`);
  }

  #password = "qwerty123"

  #sharePassword() {
    console.log(this.#password);
  }

  getPasswords() {
    this.#sharePassword();
  }

  doCall() {
    super._call();
  }
}

const humanRasyid = new Human("rasyid");
console.log("Human: ");
humanRasyid.greeting();
humanRasyid.work();
// humanRasyid.coding() // !info: error karena milik child
// humanRasyid._call(); // !info: harusnya error karena dia private

const programmerAkbar = new Programmer("akbar", "javascript");
console.log("Programmer: ")
programmerAkbar.greeting()
programmerAkbar.coding()
programmerAkbar.work()
programmerAkbar.getPasswords()
programmerAkbar.doCall()
// programmerAkbar.#sharePassword()
// programmerAkbar.#password()