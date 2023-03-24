"use strict"

//Вывод односвязного списка в обратном порядке

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

//вывести элементы в обратном порядке по одному при помощи цикла

function printReverseList(list) {
  let arr = [];	//временный массив чтобы найти конец односвзного списка
  let tmp = list; // переменная для перемещения по списку
  
  while(tmp) {
	  arr.push(tmp.value);
	  tmp = tmp.next;
  }
  
  //выводим массив в обратном порядке
  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
}

printReverseList(list);

//вывести элементы в обратном порядке по одному при помощи рекурсии

function printReverseList(list) {
	
  if (list.next) {
	printList(list.next); //вывод оставшейся части списка
  }
  console.log(list.value); //вывод текущего элемента
}

printReverseList(list);

//рекурсивный способ более простой в записи, но более сложный с точки зрения вычислительных ресурсов