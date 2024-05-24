const kuadratAsync = (x) => {
  setTimeout(() => x * x, 100);
}

const kuadratAsyncCallback = (x, callback) => {
  setTimeout(() => callback(x * x), 100);
}

console.log("Tanpa callback");
console.log(kuadratAsync(10));

console.log("Dengan callback");
kuadratAsyncCallback(10, console.log);