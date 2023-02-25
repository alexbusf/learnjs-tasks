"use strict"

console.log(5 > 4); // true сравнение типов number
console.log("ананас" > "яблоко"); //false сравнение первых символов, я > a 
console.log("2" > "12"); //true 2 > 1 так как оба значения строки идет сравнение первых символов
console.log(undefined == null); // true при нестрогом равенстке эти значения раны друг другу, спец. правило JS
console.log(undefined === null); // false при строгом равенстке сравниваются сначала типы, если разные сзрау false
console.log(null == "\n0\n"); // false null равен undefined, undefined нсравниваемое значение
console.log(null === +"\n0\n"); // false так как сравнение разных типов null отдельный тип данных