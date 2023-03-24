"use strict"

//при помощи цикла

function sumToN(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumToN(10)); //55
console.log(sumToN(1)); //1


// при помощи рекурсии

function sumToN(n) {
  if(n==1){
	return n; // если n = 1 выходим из функции, вовзращая 1
  } else {
	return n += sumToN(n-1); //вызываем функцию пока n не станет равно 1
  }
}

console.log(sumToN(10)); //55
console.log(sumToN(1)); //1

// при помощи арифметической прогрессии

function sumToN(n) {
  return (n * (n + 1)) / 2;
}

console.log(sumToN(10)); //55
console.log(sumToN(1)); //1