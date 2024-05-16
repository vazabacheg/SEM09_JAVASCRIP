//creacion de objetos
const person = { name: "aNDERSON", age: 26 };
//accedor a los valores
const person1 = { name: "aNDERSON", age: 26 };
console.log(person1.name);
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
delete person4.country;
// congelar
const person5 = { name: "aNDERSON", age: 26 , country:"Peru"};
Object.freeze(person5);
// sellar
const person6 = { name: "aNDERSON", age: 26 , country:"Peru"};
Object.seal(person6);
// unir objetos
const person7 = { name: "anderson", age: 26 };
const address = { street: "trujillo ", city: "salaverry" };
const personWithAddress = { ...person7, ...address };
// palabra reservada this en objeto literal
const person8 = {
    name: "anderson",
    hola(){
        console.log('Hola me llamo $(this.name)');
    },
};
// recorrer