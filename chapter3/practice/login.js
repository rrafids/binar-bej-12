// !Note:
// Lengkapi kode dibawah supaya ketika fungsi main dijalankan, menghasilkan output yang sesuai
// Gunakan promise untuk membuat fungsi asynchronus

// Data
// !Note: Object user terdiri dari attribut name, email dan password
const users = [
  { name: "javid", email: "javid@binar.com", password: "123456" },
  { name: "ario", email: "ario@binar.com", password: "ario123" },
  { name: "ismail", email: "ismail@binar.com", password: "ismail123" },
  { name: "faruuq", email: "faruuq@binar.com", password: "faruuq123" }
];

async function createUser(user) {
  // TODO: Lengkapi fungsi supaya dapat memasukkan object user dari parameter kedalam array users
  // Case berhasil memberikan response berupa object user yang baru dibuat
  // Berikan case untuk error user sudah tersedia
  let isDuplicate = false;

  for (let i = 0; i < users.length; i++) {
    if (users[i].email == user.email) {
      isDuplicate = true;

      break;
    }
  }

  return new Promise((resolve, reject) => {
    if (!isDuplicate) {
      users.push({
        name: user.name,
        email: user.email,
        password: user.password
      })

      resolve(user);
    } else {
      reject("user sudah tersedia");
    }
  })
}

async function getUserByEmail(email) {
  // TODO: Lengkapi fungsi ini supaya dapat mengembalikkan object user
  // Case berhasil memberikan response berupa object user sesuai dengan email yang diinput
  // Berikan case untuk error user tidak ditemukan (dalam bentuk string)
  let user = null;

  for (let i = 0; i < users.length; i++) {
    if (users[i].email == email) {
      user = users[i];

      break;
    }
  }

  return new Promise((resolve, reject) => {
    if (user !== null) {
      resolve(user);
    } else {
      reject("user tidak ditemukan");
    }
  })
}

async function login(email, password) {
  // TODO: Buatlah sebuah function untuk melakukan pengecekan email dan password
  // Case berhasil memberikan response berupa message "login berhasil" dalam format string
  // Buatlah case error untuk email tidak ditemukan &  email / password salah

  const user = await getUserByEmail(email);

  return new Promise((resolve, reject) => {
    if (user.password === password) {
      resolve("login berhasil");
    } else {
      reject("email atau password salah");
    }
  })
}

async function main() {
  const userToCreate = {
    name: "Adhi",
    email: "adhi@binar.com",
    password: "adhi12345"
  };

  try {
    const createdUser = await createUser(userToCreate);
    // const loginResponse = await login(createdUser.email, createdUser.password);

    // !Info: Error cases
    // const loginResponse = await login("wrong email", createdUser.password);
    const loginResponse = await login(createdUser.email, "wrong password");

    console.log(loginResponse);
  } catch (e) {
    console.log("terdapat error: ", e)
  }

  // TODO:
  // 1. Lakukan penambahan data user
  // 2. Lakukan login menggunakan data yang baru dibuat di atas
  // !Note: Pastikan membuat beberapa studi kasus supaya kondisi error dapat berhasil terexecute
  // !Note: Gunakan try catch untuk mendapatkan error message
}

main();