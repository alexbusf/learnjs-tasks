"use strict"

function getLastDayOfMonth(year, month) {
  let date = new Date(year, month + 1, 0);
  return date.getDate();
}

console.log( getLastDayOfMonth(2023, 0) ); // 31
console.log( getLastDayOfMonth(2023, 1) ); // 28
console.log( getLastDayOfMonth(2023, 2) ); // 31