"use strict"

// оператор ?
function checkAge(age) {
  (age > 18)? true; : confirm('Родители разрешили?');
}

// оператор || 
function checkAge(age) {
  (age > 18) || confirm('Родители разрешили?');
}
