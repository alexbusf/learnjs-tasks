"use strict"

//Использование частично применённой функции для логина

function askPassword(ok, fail) {
  let password = prompt("Password?", '');
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: 'John',

  login(result) {
    alert( this.name + (result ? ' logged in' : ' failed to log in') );
  }
};

//использование стрелочной функции обертки
askPassword(() => user.login(true), () => user.login(false));

/*
Частично применённая функция на основе user.login, 
которая использует объект user в качестве контекста и получает соответствующий первый аргумент:
*/
askPassword(user.login.bind(user, true), user.login.bind(user, false));