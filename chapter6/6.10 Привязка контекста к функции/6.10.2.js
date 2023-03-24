"use strict"

//Повторный bind

function f() {
  alert(this.name);
}

f = f.bind( {name: "Вася"} ).bind( {name: "Петя"} );

f(); // Вася

//существующую привязку изменить нельзя