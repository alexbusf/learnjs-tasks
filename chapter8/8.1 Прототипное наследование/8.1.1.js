"use strict"

/*
В приведённом ниже коде создаются и изменяются два объекта.

Какие значения показываются в процессе выполнения кода?
*/

let animal = {
  jumps: null
};
let rabbit = {
  __proto__: animal,
  jumps: true
};

alert( rabbit.jumps ); // true, взято из объекта rabbit

delete rabbit.jumps; 

alert( rabbit.jumps ); // null, взято из объекта animal, так как для объекта удалено

delete animal.jumps;

alert( rabbit.jumps ); // undefined, такого свойства больше нет