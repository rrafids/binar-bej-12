class Human {
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }

  static isLivingOnEarth = true;

  introduce() {
    return "Halo, nama saya " + this.name;
  }

  static introduceStatic() {
    return "Halo, nama saya static";
  }

  greet(targetName) {
    return "Hello " + targetName + ", I am " + this.name
  }
}

class Car {

}

// Instance method
// Human.prototype.greet = function (targetName) {
//   return "Hello " + targetName + ", I am " + this.name
// }

// Static method
Human.isHandsome = true;

console.log(Human.isLivingOnEarth);
console.log(Human.isHandsome);
// console.log(Human.introduce());

const humanWisnu = new Human("Wisnu", "bandung");
console.log(humanWisnu.introduce());
console.log(humanWisnu.greet("Adit"));

// !Note: Nggabisa dipanggil karena dipanggil melalui class yang sudah diinstantiate
// console.log(humanWisnu.isHandsome);
// console.log(humanWisnu.introduceStatic());

console.log(humanWisnu instanceof Human);
console.log(humanWisnu instanceof Car);


