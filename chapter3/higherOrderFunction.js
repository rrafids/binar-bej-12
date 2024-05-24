const programmingLanguages = ["js", "php", "python"];

// for loop
// for (var i = 0; i < programmingLanguages.length; i++) {
//   console.log("Language: " + programmingLanguages[i])
// }

// function forEach
// programmingLanguages.forEach(language => {
//   if (language == "python") {
//     console.log("Language: " + language)
//   } else {
//     console.log("not python")
//   }
// })

function forEach(array, callback) {
  const newArr = [];

  for (var i = 0; i < array.length; i++) {
    newArr.push(callback(array[i]))
  }

  return newArr;
}

const lenArr = forEach(programmingLanguages, function (pl) {
  return "language: " + pl;
})

console.log(lenArr);