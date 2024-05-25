const getUserName = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Ismail");
    }, 100)
  })
}

const getUserName2 = () => {
  return new Promise((resolve, reject) => {
    resolve("Wisnu");
  })
}

const getUserNameAsync = async () => {
  return "Mas Adhi"
}

const greet = (name) => {
  return `Halo ${name}`;
}

const isPasswordCorrect = (password) => {
  return new Promise((resolve, reject) => {
    if (password === "12345") {
      resolve("Password benar");
    } else {
      reject("Password salah");
    }
  })
}

const isPasswordCorrect2 = (password) => {
  return new Promise((resolve, reject) => {
    if (password === "123456") {
      resolve("Password benar 2");
    } else {
      reject("Password salah 2");
    }
  })
}

// const queryUsers = async () => {
// manggil library postgre
//   const users = await postgres.FindAll()

//   return users;
// }

async function main() {
  // Callback
  // getUserName().then((name) => {
  //   console.log(greet(name));
  // })

  // getUserName2().then((name) => {
  //   console.log(greet(name));
  // })

  // console.log(greet(userName));

  // Async Await
  // const userName = await getUserName()
  // console.log(greet(userName));

  // const userName2 = await getUserName2()
  // console.log(greet(userName2));

  // const userName3 = await getUserNameAsync()
  // console.log(greet(userName3));

  // console.log("Selamat datang di Binar Academy.");

  try {
    const isCorrect2 = await isPasswordCorrect2("12345");
    const isCorrect = await isPasswordCorrect("123453");
    console.log(isCorrect);

    const users = await queryUsers();
  } catch (e) {
    console.log("error: ", e)
  }
}

main();



