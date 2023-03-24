"use strict"

/*
Напишите функцию isInteger(num), которая возвращает true, если num – целое число, иначе false.
*/

alert( isInteger(1) ); // true
alert( isInteger(1.5) ); // false
alert( isInteger(-0.5) ); // false
/*
решение
*/

function isInteger(num) {
  return (num ^ 0) === num;
}

console.log( isInteger(1) ); // true
console.log( isInteger(1.5) ); // false
console.log( isInteger(-0.5) ); // false

/* 
num^0 – в скобках! Это потому, что приоритет операции ^ очень низкий. 
Если не поставить скобку, то === сработает раньше. 
Получится num ^ (0 === num), а это уже совсем другое дело.
 */
