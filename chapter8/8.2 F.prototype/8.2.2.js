"use strict"

/*
Создайте новый объект с помощью уже существующего
*/

function User(name) {
  this.name = name;
}

let user = new User('John');
let user2 = new user.constructor('Pete');

console.log( user2.name );

/*
Но если кто-то перезапишет User.prototype и забудет заново назначить свойство "constructor", чтобы оно указывало на User, 
то ничего не выйдет.
*/

//Например такой случай выдаст undefined

function User(name) {
  this.name = name;
}
User.prototype = {}; // (*)

let user = new User('John');
let user2 = new user.constructor('Pete');

console.log( user2.name ); 

