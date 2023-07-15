/**
 *?     Используя функцию if...else,
 *?     напишите код, который будет спрашивать:
 *?     "Какое официальное название JavaScript?"
 *?     Если пользователь вводит "ECMAScript",
 *?     то показать через alert: "Верно!"
 *?     в противном случае отобразить:"Не знаете? ECMAScript!"
 */

// let message = prompt("Какое официальное название JavaScript?");
// let answer = "ECMAScript".toLocaleLowerCase();
// message = message.toLocaleLowerCase().trim();
//  if(message === answer){
//     alert("Верно!")
//  } else {
//     alert("Не знаете? ECMAScript!");
//  }

// Напишіть програму, яка отримає від користувача
// число (кількість хвилин) та виведе в консоль
// рядок у форматі годин та хвилин
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
//     70 === 01:10

// let userAnswer = prompt('Введіть число');
//
// let hours = String(Number.parseInt(userAnswer/60));
// hours = hours.padStart(2 , 0);
// let min = String(userAnswer % 60);
// min = min.padStart(2 , 0);
// console.log(`${hours}:${min}`);