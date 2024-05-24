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