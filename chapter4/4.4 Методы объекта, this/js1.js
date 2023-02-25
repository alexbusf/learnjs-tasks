"use strict"

function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

alert( user.ref.name ); // Каким будет результат?

/*
Uncaught TypeError: Cannot read properties of undefined (reading 'name')

*/

//рабочий код

function makeUser() {
  return {
    name: "John",
    ref() {
      return this;
    }
  };
}

let user = makeUser();

alert( user.ref().name ); // John

/*
значение htis объект перед точкой
*/