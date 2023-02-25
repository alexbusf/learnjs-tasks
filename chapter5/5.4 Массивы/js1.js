"use strict"

let fruits = ["Яблоки", "Груша", "Апельсин"];

// добавляем новое значение в "копию"
let shoppingCart = fruits;
shoppingCart.push("Банан");

// что в fruits?
console.log( fruits.length ); // 4

// fruits и shoppingCart это ссылки на один и тот же объект, в данном случае на один и тот же массив