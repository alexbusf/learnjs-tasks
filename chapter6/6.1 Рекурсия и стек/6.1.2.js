"use strict"

//вычислить факториал n! = n * (n-1)!

function factorial(n){
  if (n <= 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(5));

//or

function factorial(n){
	return (n <= 1 ) ?  1 : n * factorial(n - 1);  
}

console.log(factorial(5));

//еще одно решение, но решения выше лучше, так как лучше когда есть неравенство, чтобы не было зацикливаний 

function factorial(n) {
  return (n != 1) ? n * factorial(n - 1) : 1;
}

console.log(factorial(5));

