"use strict"

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('Родители разрешили?');
  }
}

function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm('Родители разрешили?');
}

/*
Функии будут работать одинаково, во первом случае выход из фукнкии при выполнении условия
до следующего return дело не дойдет
*/
