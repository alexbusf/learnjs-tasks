"use strict"

let a = 2;

let x = 1 + (a *= 2); // 5 так как 1+(a=a*2) или 1+4
console.log("a= "+a); //a=4
console.log("x= "+x); //x=5

