const userGroup1 = [
  { name: "javid", email: "javid@binar.com", password: "123456" },
  { name: "ario", email: "ario@binar.com", password: "ario123" },
  { name: "ismail", email: "ismail@binar.com", password: "ismail123" },
];

const userGroup2 = [
  { name: "rijal", email: "rijal@binar.com", password: "rjl123" },
  { name: "wisnu", email: "wisnu@binar.com", password: "wisnu123" },
  { name: "faruuq", email: "faruuq@binar.com", password: "faruuq123" }
];

// TODO: Buatlah sebuah function yang dapat memasukkan data user ke array userGroup1
// !Info: Pastikan user belum ada di userGroup1 maupun userGroup2
async function insertUserToGroup1(user) {

}

// TODO: Buatlah sebuah function yang dapat memasukkan data user ke array userGroup2
// !Info: Pastikan user belum ada di userGroup1 maupun userGroup2
async function insertUserToGroup2(user) {

}

async function getListUserGroup1() {
  return userGroup1;
}

function getListUserGroup2() {
  return userGroup2;
}

async function main() {
  try {
    const newUser1 = {
      name: "aqshan",
      email: "aqshan@binar.com",
      password: "aqshan123"
    };

    const newUser2 = {
      name: "hanvir",
      email: "hanvir@binar.com",
      password: "hanvir123"
    };

    await insertUserToGroup1(newUser1);
    await insertUserToGroup2(newUser2);

    console.log("userGroup1: ");
    console.log(userGroup1);
    console.log("userGroup2: ");
    console.log(userGroup2);
  } catch (e) {
    console.log("error: " + e);
  }
}


