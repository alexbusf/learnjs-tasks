"use strict"

class Animal {

  constructor(name) {
    this.name = name;
  }

}

class Rabbit extends Animal {
  constructor(name) {
    super(name); // должен быть вызван констуктор суперкласса
    this.created = Date.now();
  }
}

let rabbit = new Rabbit("Белый кролик"); // ошибки нет
console.log(rabbit.name); // White Rabbit