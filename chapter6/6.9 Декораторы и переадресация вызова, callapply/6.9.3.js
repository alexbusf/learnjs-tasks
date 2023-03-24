"use strict"

//Декоратор debounce


function debounce(f, ms) {

  let isCooldown = false;

  return function() {
    if (isCooldown) return;

    f.apply(this, arguments);

    isCooldown = true;

    setTimeout(() => isCooldown = false, ms);
  };

}

f = debounce(alert, 1000);

f(1); // вызвана
f(2); // проигнорирована

setTimeout(() => f(3), 100);  // проигнорирована (слишком рано)
setTimeout(() => f(4), 1100); // вызвана (1000 мс истекли)
setTimeout(() => f(5), 1500); // проигнорирована (менее 1000 мс с последнего вызова)