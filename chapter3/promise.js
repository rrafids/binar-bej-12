const myPromise = new Promise(resolve => resolve("Hello world"));

// console.log(myPromise);
// myPromise.then((result) => console.log(result))

const correctPassword = "123456"
const isPasswordCorrect = (password) => {
  return new Promise((resolve, reject) => {
    if (password === correctPassword) {
      resolve("Password benar");
    } else {
      reject("Password salah");
    }
  })
}

isPasswordCorrect("abc").then((result) => {
  console.log(result);
}).catch((err) => {
  console.log(err);
});

// TODO: Latihan Promise Asynchronus
// 1. Pengecekan email dan password
// correct email = "roby@gmail.com"
// correct password = "abcde"
// case 3:
// 1. Berhasil email dan password benar
// 2. Gagal email benar, password salah
// 3. Gagal email salah, password benar
// 4. Gagal email salah, password salah