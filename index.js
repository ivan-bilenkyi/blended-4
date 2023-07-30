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

/**
 *? Напишіть цикл, який виводить у консоль
 *? числа  від max до min  за спаданням
 *? Виведіть у консоль усі парних чисел від min до max
 */

// const max = 50;
// const min = 23;

// // for (let i = max; i >= min; i--) {
// //    console.log(i)
// // }
// for (let i = min; i <= max; i++) {
//    if (i % 2 !== 0) {
//       console.log(i)
//    }
// }
/**
 *? При завантаженні сторінки користувачеві пропонується
 *? в prompt ввести число. Введення додається до значення
 *? змінної total.
 *? Операція введення числа триває до того часу,
 *? поки користувач не натисне кнопку Cancel у prompt.
 *? Після того як користувач припинив введення, натиснувши на
 *? кнопку Cancel, показати alert з рядком "Загальна сума введених чисел дорівнює [число]."
 
 *! Робити перевірку, що користувач ввів саме число,
 *! а не довільний набір символів не потрібно.
 */

// let total = 0;

// let number = prompt('Input number');

// while (number !== null){
//    total+= Number(number);
//    number = prompt('Input number');

// }
// alert(total);

/*
 Напишіть через свіч пошук автора мови програмування.
 Пишемо назву мови у шаблонному рядку отримує відповідь
 мова та автор

 
 PHP Расмус Лердорф
 C# група інженерів компанії Microsoft під керівництвом Андерса Хейлсберга та Скотта Вільтаумота
 Swift Кріс Латтнер
 JS Брендан Ейх
 Java Джеймс Гослінг
 Python Гвідо ван Россум
*/

// let lang = prompt("Автор мови програмування?").toLowerCase().trim();

// switch (lang) {
//     case "c#": console.log(`${lang} група інженерів компанії Microsoft під керівництвом Андерса Хейлсберга та Скотта Вільтаумота`);
//         break;
//     case "swift":
//  console.log(`${lang} Кріс Латтнер`);
//         break;
//     case "js":
// console.log(`${lang} Брендан Ейх`);
//         break;
//     default: "Автор невідомий"
// }

/**
 *? Напишите цикл, который предлагает ввести
 *? число больше 100 через prompt.
 *? Если посетитель ввёл другое число - попросить
 *? ввести ещё раз и так далее.
 *? Цикл должен спрашивать число, пока посетитель не
 *? введёт число больше 100, либо не нажмет кнопку
 *? Отмена в prompt
 */

// 1
// let promptNumber = '';

// do {
//      promptNumber = prompt('Enter a number greater hundred?');
// }
// while(promptNumber <= 100)


// alert('Thank You, you did it!');

// 2
// let number = "";

// do {
//     number = prompt("Введіть число більше 100", "");
//     } while (number <= 100 && number !== null);

// console.log("Ввели число: ", number);

// 3
// let number = 0;

// while (number <= 100) {
//     number = prompt("Введіть число більше 100");
// };

// console.log("Ввели число: ", number);

/**
 *? Напиши скрипт для об'єкта user,
 *? послідовно:
 *? 1 додати поле mood зі значенням 'happy'
 *? 2 замінить hobby на 'skydiving'
 *? 3 замінить значення premium на false
 *? 4 виводить вміст об'єкта users у форматі
 *? ключ: значення використовуючи Object.keys() і for...of
 */

// const user = {
//   name: "John",
//   age: 20,
//   hobby: "tennis",
//   premium: true,

// };
// function getTotalSal(obj) {
//     let sal = 0;
//     const val = Object.values(obj);
//     const keys = Object.keys(obj);
//     // for (const valElement of val) {
//     //     sal += valElement;
//     // }
//     // for (const objKey in obj) {
//     //     sal += obj[objKey];
//     // }
//     for(const key of keys) {
//         sal += obj[key];
//     }
//     return sal;
// }
// console.log(getTotalSal(someObj));


// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;

// const keys = Object.keys(user);
// console.log(keys);

// for (const key of keys) {
//   console.log(`${key}: ${user[key]}`);
// }

