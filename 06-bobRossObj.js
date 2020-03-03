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
      favoriteThings: ['Yodeling', 'Kareoke'],
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

// Run Bob Ross' greet method.

// Access Morgan Ross's age.

// Access 'Singing' from Morgan's favorite things.

// Run Morgan's Birthday method.

// Access 'Rain Dancing' from Todd Ross' favorite things.

// Run Doug Ross' Greet method.

// BONUS HARD MODE

// Redo the below items but use nested destructuring to access the items.
// https://css-tricks.com/new-favorite-es6-toy-destructured-objects-parameters/ -> Basics
// https://untangled.io/advanced-es6-destructuring-techniques/ -> Covers nested obj and arrays!
// https://codeburst.io/es6-destructuring-the-complete-guide-7f842d08b98f -> Extensive - Don't dive too deep!


// Access Bob Ross's name (freebie!)
// const { firstName, lastName } = person
// console.log(firstName, lastName) // logs "Bob Ross"

// Access 'Happy accidents' from Bob's favorite things.

// Access Morgan Ross's age.

// Access 'Singing' from Morgan's favorite things.

// Access 'Rain Dancing' from Todd Ross' favorite things.
