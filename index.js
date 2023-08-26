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

// do {
//     number = prompt("Введіть число більше 100", "");
//     } while (number <= 100 && number !== null);

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

///**
// *? Напишіть функцію, яка приймає массив об'єктів і повертає новий массив
// *? Зробіть знижку 20 % на всі фрукти у масиві
// *? Надайте ід для кожного продукту
// */

// const fruits = [
//   { name: "apple", price: 200 },
//   { name: "orange", price: 300 },
//   { name: "grapes", price: 750 },
// ];

// function getArray(array) {
//     const newFruits = [...array];
//     let id = 1;
//     for (const item of newFruits) {
//         item.price = 0.8 * item.price;
//         item.id = id;
//         id++;
//     }
//     return newFruits;
// }

// console.log( getArray(fruits));

// console.log("Ввели число: ", number);

// 3
// let number = 0;

// while (number <= 100) {
//     number = prompt("Введіть число більше 100");
// };

// console.log("Ввели число: ", number);

// напиши код який із массиву arr видаляє елемент foo.
// розвертає цей массив
// і повертає рядок js is the best
// вхідний массив не має змінюватись (мутується)

// const arr = ["best", "the", "foo", "is", "js"];

// function deleteWord(array, string) {
//   const copyArray = [...array];
//   const idx = copyArray.indexOf(string);
//   //   console.log(idx);
//   copyArray.splice(idx, 1);
//   copyArray.reverse();
//   return copyArray.join(" ");
// }

// console.log(deleteWord(arr, "foo"));
// console.log(arr);

// // второе решение

// function methodName(arr, element) {
//   if (arr.includes(element)) {
//     return arr
//       .slice(0, arr.indexOf(element))
//       .concat(arr.slice(arr.indexOf(element) + 1, arr.length))
//       .reverse()
//       .join(" ");
//   }

//   return "not found";
// }

// console.log(methodName(arr, "fooasd"));

// Напишит функцію, яка приймає два аргументи (массив рядків і рядок), перевіряє чи є такий рядок у масиві.
// якщо такий рядок знайдено у массиві, потрібно утворити з нього массив, розвернути і повернути із функції
// якщо такого рядку немає то потрібно повернути рядок "Not found 🙄"

// const arr = ["aPple", "bananA", "cHerry", "Orange"];
// function findString(array, string) {
//   for (const item of array) {
//     if (item.toLowerCase() === string.toLowerCase()) {
//       return item.split("").reverse();
//     }
//   }
//   return "Not found 🙄";
// }

// console.log(findString(arr, "bananA"));

// while (number <= 100) {
//     number = prompt("Введіть число більше 100");
// };

// console.log("Ввели число: ", number);

/**

 *? Напишіть ф-цію calcTotalPrice(someStones, stonesName),

 *? яка приймає масив об'єктів та

 *? рядок під назвою каменю.

 *? Функція рахує та повертає загальну вартість каменів

 *? з таким ім'ям, ціною та кількістю з об'єкта

 */

// const stones = [

//    { name: "Изумруд", price: 1300, quantity: 4 },

//    { name: "Бриллиант", price: 2700, quantity: 6 },

//    { name: "Сапфир", price: 400, quantity: 7 },

//    { name: "Щебень", price: 150, quantity: 100 },

//  ];

// const array = [

//   { name: "Изумруд", price: 1300, quantity: 4 },

//   { name: "Бриллиант", price: 2700, quantity: 6 },

//   { name: "Сапфир", price: 500, quantity: 7 },

//   { name: "Щебень", price: 150, quantity: 100 },

// ];

// function calcTotalPrice(someStones, stonesName) {
//     for (const stone of someStones) {
//         if (stone.name === stonesName) {
//             return stone.price * stone.quantity;
//         }
//     }

//     return "камінь не знайдено";
// }

// console.log(calcTotalPrice(stones, "Сапфир"))
// console.log(calcTotalPrice(array, "Изумруд"))

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


/**
 *? З об'єкту concerts потрібно отримати масив
 *? в якому будуть лише імена міст.
 *? З масиву потрібно прибрати міста, в яких концерт уже пройшов і
 *? відсортувати їх у хронологічному порядку.
 *? Результат вивести у консоль.
 *? Очікуваний результат ["Одеса", "Умань", "Харків"]
 */
const concerts = {
    Київ: new Date("2020-04-01"),
    Умань: new Date("2025-07-02"),
    Вінниця: new Date("2020-04-21"),
    Одеса: new Date("2025-03-15"),
    Хмельницький: new Date("2020-04-18"),
    Харків: new Date("2025-07-10"),
};

// const cityNames = Object.keys(concerts);
const filterCitiesName =  Object.keys(concerts)
    .filter(el => concerts[el] > new Date())
    .sort((a, b) => concerts[a] - concerts[b]);

console.log(filterCitiesName)

// ///**
// // *? Напишіть функцію, яка приймає массив об'єктів і повертає новий массив
// // *? Зробіть знижку 20 % на всі фрукти у масиві
// // *? Надайте ід для кожного продукту
// // */

// const fruits = [
//   { name: "apple", price: 200 },
//   { name: "orange", price: 300 },
//   { name: "grapes", price: 750 },
// ];

// const updateFruit = (fruitsArray) =>
//   fruitsArray.map((fruit, index) => ({
//     ...fruit,
//     price: fruit.price * 0.8,
//     id: index + 1,
//   }));
// console.log(updateFruit(fruits));




//Виводимо кнопку з текстом "Змінити" і два інпути, при натисканні на кнопку інпути
//змінюються своїм введеним текстом

const btn = document.querySelector('.btn');
const inputFirst = document.querySelector('#js-input1');
const inputSecond = document.querySelector('#js-input2');

// btn.addEventListener('click', function () {
//     const valFirst = inputFirst.value;
//
//     inputFirst.value = inputSecond.value;
//     inputSecond.value = valFirst;
// })

btn.addEventListener('click', function () {
    [inputFirst.value, inputSecond.value] = [inputSecond.value, inputFirst.value];
})