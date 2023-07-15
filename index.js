/**
 *?     Используя функцию if...else,
 *?     напишите код, который будет спрашивать:
 *?     "Какое официальное название JavaScript?"
 *?     Если пользователь вводит "ECMAScript",
 *?     то показать через alert: "Верно!"
 *?     в противном случае отобразить:"Не знаете? ECMAScript!"
 */

 let message = prompt("Какое официальное название JavaScript?");
let answer = "ECMAScript".toLocaleLowerCase();
    message = message.toLocaleLowerCase().trim();
 if(message === answer){
    alert("Верно!")
 } else {
    alert("Не знаете? ECMAScript!");
 }