const humanAkbar = {
  name: "akbar",
  address: "jakarta",
  isLivingOnEarth: true,
  introduce: function () {
    return "Halo saya " + this.name;
  }
}

const humanAdhi = {
  name: "adhi",
  address: "jakarta",
  isLivingOnEarth: true,
  greeting: function () {
    return "Halo saya " + this.name;
  }
}

humanAkbar = humanAdhi

console.log(humanAkbar.introduce());

