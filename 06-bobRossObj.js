// Today's toy problem is a little different.
// We're going to brush up on accessing object properties
// Look over this object and the nested objectes and arrays within
// Then solve the problems below.

const person = {
  firstName: 'Bob',
  lastName: 'Ross',
  age: '54',
  favoriteThings: ['Happy little Trees', 'Happy Accidents', 'Groves', 'Mountains'],
  children: [
    {
      firstName: 'Morgan',
      lastName: 'Ross',
      age: '32',
      favoriteThings: ['Hiking', 'Singing'],
      children: [
        {
          firstName: 'Todd',
          lastName: 'Ross',
          age: '9',
          favoriteThings: ['Rain Dancing', 'Drawing'],
          birthday() {
            return ++this.age;
          },
          greet(greeter) {
            return `Hello ${greeter}, My name is ${this.firstName} ${this.lastName}. Do you like ${
              this.favoriteThings[0]
            }?`;
          },
        },
        {
          firstName: 'Doug',
          lastName: 'Ross',
          age: '11',
          favoriteThings: ['Puddle Splashing', 'Getting Jiggy'],
          birthday() {
            return ++this.age;
          },
          greet(greeter) {
            return `Hello ${greeter}, My name is ${this.firstName} ${this.lastName}. Do you like ${
              this.favoriteThings[0]
            }?`;
          },
        },
      ],
      birthday() {
        return ++this.age;
      },
      greet(greeter) {
        return `Hello ${greeter}, My name is ${this.firstName} ${this.lastName}. Do you like ${
          this.favoriteThings[0]
        }?`;
      },
    },
    {
      firstName: 'Steve',
      lastName: 'Ross',
      age: '35',
      favoriteThings: ['Yodeling', 'Karaoke'],
      children: [],
      birthday() {
        return ++this.age;
      },
      greet(greeter) {
        return `Hello ${greeter}, My name is ${this.firstName} ${this.lastName}. Do you like ${
          this.favoriteThings[0]
        }?`;
      },
    },
  ],
  birthday() {
    return ++this.age;
  },
  greet(greeter) {
    return `Hello ${greeter}, My name is ${this.firstName} ${this.lastName}. Do you like ${this.favoriteThings[0]}?`;
  },
};

// Access 'Bob' and 'Ross' (freebie!)
console.log(`His name is ${person.firstName} ${person.lastName}`);

// Access 'Happy accidents' from Bob's favorite things.
console.log(person.favoriteThings[1])

// Run Bob Ross' greet method.
console.log(person.greet("Ash"))

// Access Morgan Ross's age.
console.log(person.children[0].age)

// Access 'Singing' from Morgan's favorite things.
console.log(person.children[0].favoriteThings[1])

// Run Morgan's Birthday method.
console.log(person.children[0].birthday())

// Access 'Rain Dancing' from Todd Ross' favorite things.
console.log(person.children[0].children[0].favoriteThings[0])

// Run Doug Ross' Greet method.
console.log(person.children[0].children[1].greet("Mitchell"))

// BONUS HARD MODE

// Redo the below items but use nested destructuring to access the items.
// https://css-tricks.com/new-favorite-es6-toy-destructured-objects-parameters/ -> Basics
// https://untangled.io/advanced-es6-destructuring-techniques/ -> Covers nested obj and arrays!
// https://codeburst.io/es6-destructuring-the-complete-guide-7f842d08b98f -> Extensive - Don't dive too deep!


// Access Bob Ross's name (freebie!)
// const { firstName, lastName } = person
const { firstName, lastName } = person
console.log(firstName, lastName) // logs "Bob Ross"

// Access Bob's age
// const { age } = person
// console.log(age)

// Access 'Happy accidents' from Bob's favorite things.
const { favoriteThings: [, two] } = person
console.log(two)

// Access Morgan Ross's age.
const { children: [ { age } ] } = person
// To get Steve's age:
// const { children: [ , { age } ] } = person

// To store children's names
const [ morgan, steve ] = person.children
console.log(morgan)

// Access 'Singing' from Morgan's favorite things.

// Access 'Rain Dancing' from Todd Ross' favorite things.
