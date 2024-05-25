//  Fungsi ini akan menjumlahkan nilai x dan y dan dikalikkan 2
function perkalian(x, y) {
  // Biar ga kena error NaN
  if (typeof x !== "number") {
    return "x harus number";
  }

  if (typeof y !== "number") {
    return "y harus number";
  }

  return x * y;
}

//  Fungsi ini akan menjumlahkan nilai x dan y dan dikalikkan 2
function jumlahDanKaliDua(x, y) {
  let hasilJumlah = x + y;
  let hasilAkhir = hasilJumlah * 2;

  return hasilAkhir;
}

// Fungsi untuk pangkat 2
function square(x) {
  return x * x;
}

function menyapa(nama) {
  return "Selamat datang " + nama + " di Binar";
}

// console.log("Hasil perkalian: ", perkalian(3, 5));
// console.log("Hasil perkalian salah: ", perkalian(3, "aku"));
// console.log("Hasil penjumlahan dan perkalian 2: ", jumlahDanKaliDua(3, 5));
// console.log("Hasil square: ", square(9));
const sapaIsmail = menyapa("Ismail");

console.log(sapaIsmail + ". Selamat belajar!");
