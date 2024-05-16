//creacion de objetos
const person = { name: "aNDERSON", age: 26 };
//accedor a los valores
const person1 = { name: "aNDERSON", age: 26 };
console.log(person.name);
// agregar valores
const person2 = { name: "aNDERSON", age: 26 };
person.country = 'Peru'; // o
Object.assign(person2, { country: "Peru" });
// modificar valor
const person3 = { name: "aNDERSON", age: 26 };
person.age = 31; // o
Object.assign(person3, { age: 31 });
// eliminar valores
const person4 = { name: "aNDERSON", age: 26 , country:"Peru"};
delete person.country;
// congelar
const person5 = { name: "aNDERSON", age: 26 , country:"Peru"};
Object.freeze(person);
// sellar
// unir objetos
// palabra reservada this en objeto literal
// recorrer