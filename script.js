const obj = {
  name: "Johm",
  age: 20,
  colors: "red",
  genders: {
    male: "",
    female: "true",
  },
};

const { male, female } = obj.genders;

if (male === "") {
  console.log(`Пусто`);
} else {
  console.log(male);
}
if (female === "") {
  console.log("Пусто");
} else {
  console.log(female);
}
console.log("-" * 20);
let counter = 0;
for (let key in obj) {
  if (typeof obj[key] === "object") {
    for (let i in obj[key]) {
      if (obj[key][i] === "") {
        console.log(
          `Свойство - ${key} имеет вложенное свойство - ${i} не имеет значения`
        );
      } else {
        console.log(
          `Свойство - ${key} имеет вложенное свойство - ${i} со значением - ${obj[key][i]}`
        );
      }
    }
  } else {
    console.log(`Свойство - ${key} имеет значение - ${obj[key]}`);
  }
}

console.log(Object.keys(obj));
