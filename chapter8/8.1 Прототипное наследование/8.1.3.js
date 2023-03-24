"use strict"

/*
Объект rabbit наследует от объекта animal.

Какой объект получит свойство full при вызове rabbit.eat(): animal или rabbit?
*/

let animal = {
  eat() {
    this.full = true;
  }
};

let rabbit = {
  __proto__: animal
};

rabbit.eat();

/*
Поскольку this – это объект, который стоит перед точкой, rabbit.eat() изменяет объект rabbit.

Поиск свойства и исполнение кода – два разных процесса. 
Сначала осуществляется поиск метода rabbit.eat в прототипе, а затем этот метод выполняется с this=rabbit.
*/