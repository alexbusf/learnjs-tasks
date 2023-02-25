"use strict"

let user = {
  name: "Василий Иванович",
  age: 35
};

console.log(user);

let user2 = JSON.parse(JSON.stringify(user));

console.log(user2);