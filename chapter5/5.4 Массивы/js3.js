"use strict"

let arr = ["a", "b"];

arr.push(function() {
  console.log( this );
})

arr[2]();

//объявлен массив и в него добавлена функция

//вывод a,b,function(){...}