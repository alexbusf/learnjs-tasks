"use strict"

function Accumulator(startValue) {
  this.value = startValue;

  this.read = function() {
    this.value += +prompt('Сколько нужно добавить?', 0);
  };

}

let accumulator = new Accumulator(3);

accumulator.read();
alert(accumulator.value);