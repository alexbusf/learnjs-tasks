"use strict"

//Задержка на промисах

/*
Встроенная функция setTimeout использует колбэк-функции. 
Создайте альтернативу, использующую промисы.
*/

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

delay(3000).then(() => alert('выполнилось через 3 секунды'));
