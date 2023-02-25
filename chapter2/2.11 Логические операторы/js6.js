"use strict"

let age = +prompt('Ведите возраст', 0);

if (age < 14 || age > 90){
	alert('Возраст не входит в диапазон от 14 до 90');
} else {
	alert("Возраст: " + age);
}

age = +prompt('Ведите возраст', 0);

if (!(age >= 14 && age <= 90)){
	alert('Возраст не входит в диапазон от 14 до 90');
} else {
	alert("Возраст: " + age);
}