"use strict"

let str = "Привет";
str.test = 5;
alert(str.test);

/*
выведется undefined без use strict
выведется ошибка с use strict
Uncaught TypeError: Cannot create property 'test' on string 'Привет'
примитив не может хранить дополнительные данные, так как не является объектом
*/