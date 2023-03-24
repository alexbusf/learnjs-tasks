"use strict"

//Армия функций


//первый способ, при помощи цикла for, в котором i создается каждый раз заново всесте с отдельным лексическим окуружением 
function makeArmy() {

  let shooters = [];

  for(let i = 0; i < 10; i++) {
    let shooter = function() { // функция shooter
      console.log(i); // должна выводить порядковый номер
    };
    shooters.push(shooter);


  }

  return shooters;
}

let army = makeArmy();

army[0](); // 0
army[5](); // 5


//при помощи дополнительной переменной j, которая создается заново при каждой итерррации
function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    let j = i;
    let shooter = function() { // функция shooter
      console.log(j); // должна выводить порядковый номер
    };
    shooters.push(shooter);
    i++;
  }

  return shooters;
}

let army = makeArmy();

army[0](); // 0
army[5](); // 5