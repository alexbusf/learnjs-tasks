"use strict"

let num;

do {
  num = prompt("Введите число больше 100?", 0);
} while (num <= 100 && num);

/*
сначала вводится число, затем идет проверка пока переменная num не станет больше 100
*/