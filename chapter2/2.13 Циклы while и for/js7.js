"use strict"

let n = 10;

//число 1 не относится к простым и сложным числам, поэтому цикл начнем с 2
//простое число делится без остатка только на 1 и на само себя
//если число делится на другие числа меньше себя то число сложное
mark: // метка 
for(let i=2; i < n; i++){ //главный цикл проход всего ряда
	for(let j = 2; j < i; j++){ //проверяем делится ли без остатка число на предыдущие числа начиная с 2
		if (i % j ==0) continue mark; //если такое число нашлось, то выходим из внутреннего цикла и идем во внешний по метке mark
	}
	console.log(i); //выводим простое число
}