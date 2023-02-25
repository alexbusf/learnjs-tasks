"use strict"

let a = 1, b =1;

let c = ++a; //с = 2 так как сначала инкремент a затем вывод c
let d = b++; //d = 1 так как присвоено старое значение b, затем b увличена на 1
console.log("a=" + a); //a=2
console.log("b=" + b); //b=2
console.log("c=" + c); //c=2
console.log("d=" + d); //d=1
