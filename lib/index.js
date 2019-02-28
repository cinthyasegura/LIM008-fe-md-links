"use strict";

let array = [];

const countDown = n => {
  if (n === 1) {
    return array.push(1);
  } else {
    array.push(n);
    countDown(n - 1);
  }

  return array;
};

console.log(countDown(6));