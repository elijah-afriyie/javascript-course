const arr = [
  { id: 2, name: "Aiden" },
  { id: 1, name: "Skylar" },
  { id: 5, name: "Pixie" },
  { id: 3, name: "Frankie" },
  { id: 4, name: "Kyle" },
];

const sortById = arr.toSorted((a, b) => a.id - b.id);
const sortByName = arr.toSorted((a, b) => a.name.localeCompare(b.name));

console.log(sortById);
console.log(sortByName);

// ======= NEW EXAMPLE ======= */
const people = [
  { name: "Luke", age: 30, gpa: 3.0 },
  { name: "Jane", age: 20, gpa: 1.5 },
  { name: "Henry", age: 22, gpa: 2.8 },
  { name: "Sandy", age: 27, gpa: 4.0 },
];

const sortByUsername = people.toSorted((a, b) => a.name.localeCompare(b.name));
const sortByAge = people.toSorted((a, b) => a.age - b.age);
const sortByGpa = people.toSorted((a, b) => a.gpa - b.gpa);

console.log(sortByUsername);
console.log(sortByAge);
console.log(sortByGpa);
