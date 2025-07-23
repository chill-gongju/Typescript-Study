// keyof 연산자
interface Person {
  name: string;
  age: number;
}

function getPropertyKey(person: Person, key: keyof Person) {
  return person[key];
}

const person: Person = {
  name: "이정환",
  age: 27,
};

getPropertyKey(person, "name");

// type Person1 = typeof person1;

// const person1 = {
//   name: "이정환",
//   age: 27,
// };

// function getPropertyKey1(person: Person, key: keyof typeof person) {
//   return person[key];
// }
