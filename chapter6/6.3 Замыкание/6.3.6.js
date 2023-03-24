"use strict"

//Сортировать по полю


//массив объектов
let users = [
  { name: "John", age: 22, lastname: "Johnson" },
  { name: "Pete", age: 18, lastname: "Peterson" },
  { name: "Ann", age: 23, lastname: "Hathaway" }
]

//универсальная функция сортировки для любого поля
function byField(field) {
	return (a, b) => a[field] > b[field] ? 1 : -1;
}
users.sort(byField('name'));
users.forEach(user => console.log(user.name));

users.sort(byField('age'));
users.forEach(user => console.log(user.name));