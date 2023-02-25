"use strict"

let val = prompt('Введите число', 0);

if(val < 0){
	alert(-1);
} else if(val > 0) {
	alert(1);
} else {
	alert(0);
}