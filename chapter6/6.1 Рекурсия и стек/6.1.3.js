"use strict"

//числа фибоначи формула для решения Fn = Fn-1 + Fn-2

function fibonacci(n){
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

console.log(fibonacci(3));
console.log(fibonacci(77));

//or

function fibonacci(n){
  return (n <= 1) ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(3));
console.log(fibonacci(77));

//при значении n = 77 вычичление идет очень долго, поэтоу лучше данную задачу решать при помощи цикла, 
//хотя такое решение менее наглядно

function fibonacci(n){
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;	
}

console.log(fibonacci(3));
console.log(fibonacci(77));

