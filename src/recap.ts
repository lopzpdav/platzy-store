const myName = 'Nicolas';
const myAge = 12;

console.log(myName, myAge);

const suma = (a: number, b: number) => {
  return a + b;
};
suma(3, 4);

class Persona {
  constructor(
    private age: number,
    private name: string,
  ) {}

  getSummary() {
    return `My name is ${this.name} and I am ${this.age}`;
  }
}

const person = new Persona(12, 'Nicolas');

console.log(person.getSummary());
