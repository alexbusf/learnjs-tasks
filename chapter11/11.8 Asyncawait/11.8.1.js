"use strict"

//Перепишите, используя async/await

function loadJson(url) {
  return fetch(url)
    .then(response => {
      if (response.status == 200) {
        return response.json();
      } else {
        throw new Error(response.status);
      }
    })
}

loadJson('no-such-user.json') // (3)
  .catch(alert); // Error: 404
  
async function loadJson(url) { // Функция loadJson теперь асинхронная.
  let response = await fetch(url); // Все .then внутри неё заменены на await.

  if (response.status == 200) {
	/*
	Можно было бы просто вернуть промис во внешний код return response.json(), вот так:

	if (response.status == 200) {
		return response.json(); // (3)
	}
	Тогда внешнему коду пришлось бы получать результат промиса самостоятельно (через .then или await). 
	В нашем варианте это не обязательно.
	*/  
    let json = await response.json(); // (3)
    return json;
  }

  throw new Error(response.status);
}

loadJson('no-such-user.json')
  .catch(alert); // Error: 404 (4)

/*
Выброшенная из loadJson ошибка перехватывается с помощью .catch. 
Здесь нельзя использовать await loadJson(…), так как мы находимся не в теле функции async.
*/  



