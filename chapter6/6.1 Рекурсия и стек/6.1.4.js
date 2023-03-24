"use strict"

//Вывод односвязного списка

//дан односвязный список
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

//вывести элементы по одному при помощи цикла

function printList(list) {
  let tmp = list; // переменная для перемещения по списку
  
  while(tmp) {
	  console.log(tmp.value); //выводим значение
	  tmp = tmp.next; //перемещаемся вглубь списка
  }
}

printList(list);

//вывести элементы по одному при помощи рекурсии

function printList(list) {
  console.log(list.value); //выводим текущий элемент	
  if (list.next) {
	printList(list.next); //вызываем функцию пока не пройдем вглубь списка до конца 
  }
}

printList(list);

//рекурсивный способ более простой в записи, но более сложный с точки зрения вычислительных ресурсов