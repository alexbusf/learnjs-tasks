"use strict"

function getDateAgo(date, days) {
  let dateCopy = new Date(date);

  dateCopy.setDate(date.getDate() - days);
  return dateCopy.getDate();
}

let date = new Date(2023, 1, 20);

console.log( getDateAgo(date, 1)); // 19, (1 Feb 2023)
console.log( getDateAgo(date, 2)); // 18, (18 Feb 2023)
console.log( getDateAgo(date, 365)); // 20, (20 Feb 2022)