console.log("#1. Приклад домашнього завдання з JavaScript");

/*
 * #1
 *
 * Створіть змінні зі значеннями.
 */

// ім'я змінної: myNum, значення: 10
// ім'я змінної: myStr, значення: 'some string'
// ім'я змінної: myBool, значення: true
// ім'я змінної: myArr, значення: 1, 2, 3, 4, 5
// ім'я змінної myObj, значення: first: 'First Name', last: 'Last Name'

let myNum = 10;
let myStr = "some string";
let myBool = true;
let myArr = [1, 2, 3, 4, 5];
let myObj = {
  first: "First Name",
  last: "Last Name",
};

/*
 * #2
 *
 * Відформатуйте ціле число, яке зберігається в змінній myNum, щоб отримати результат з 2 знаками після коми.
 * Результат збережіть у змінній decimal2.
 */

let decimal2 = myNum.toFixed(2);

/*
 * #3
 *
 * Створіть змінну i, для якої виконайте префіксний та постфіксний інкремент та декремент.
 * Поекспериментуйте з результатами, виводячи їх у консоль.
 */

let i = 8;

i++; // 9
++i; // 9
i--; // 7
--i; // 7

console.log(i);

/*
 * #4
 *
 * Створіть нову змінну myTest та присвойте їй значення 20.
 * Виконайте присвоєння з операцією, використовуючи оператори: +=, –=, *=, /=, %=.
 * Результати присвоюються в myTest, потім виводяться в консоль.
 * У розрахунках можна використовувати раніше оголошену змінну myNum та/або числа.
 */

let myTest = 20;

myTest += myNum; // 30
myTest -= myNum; // 10
myTest *= myNum; // 200
myTest /= myNum; // 2
myTest %= myNum; // 0

console.log(myTest);

/*
 * #5
 *
 * Використовуючи властивості та методи об'єкта Math, присвойте змінним та відобразіть у консолі.
 */

// константа Pi → myPi
// округлене значення числа 89.279 → myRound
// випадкове число між 0..10 → myRandom
// 3 у 5 степені → myPow

const myPi = Math.PI;
console.log(myPi); // 3.141592653589793

const myRound = Math.round(89.279);
console.log(myRound); // 89

const myRandom = Math.floor(Math.random() * 11);
console.log(myRandom); // 2

const myPow = Math.pow(3, 5);
console.log(myPow); // 243

/*
 * #6
 *
 * Створіть об'єкт з ім'ям strObj.
 * Присвойте ключу str рядок тексту "Мама мыла раму, рама мыла маму", ключу length встановіть довжину цього рядка.
 */

const strObj = {
  str: "Мама мыла раму, рама мыла маму",
  length: "Мама мыла раму, рама мыла маму".length,
};

console.log(strObj); // lenght 30

/*
 * #7
 *
 * Перевірте наявність тексту 'рама' у полі str об'єкта strObj (див.п.6), результат збережіть у змінній isRamaPos та виведіть її у консоль.
 * Результатом для isRamaPos має бути індекс входження.
 * Результатом для isRama має бути буль true.
 */

const isRamaPos = strObj.str.indexOf("рама");
const isRama = isRamaPos != -1;

console.log(isRamaPos); // 16
console.log(isRama); // true

/*
 * #8
 *
 * Виконайте перейменування підрядка у рядку.
 * Як вихідний рядок використовуйте значення поля str об'єкта strObj (див.п.6), результат збережіть у змінній strReplace та відобразіть у консолі.
 * Вихідний рядок: 'Мама мыла раму, рама мыла маму'
 *      Результат: 'Мама моет раму, Рама держит маму'
 */

const strReplace = strObj.str
  .replace("мыла", "моет") // мыла → моет
  .replace("рама", "Рама") // рама" → Рама
  .replace("мыла", "держит"); // мыла" → держит

console.log(strReplace);

/*
 * #9
 *
 * Преобразуйте текст 'some STRING' у верхній, потім у нижній регістри, результат відобразіть у консолі.
 */

let someString = "some STRING";
let upperString = someString.toUpperCase();
let lowerString = someString.toLowerCase();

console.log(upperString); // SOME STRING
console.log(lowerString); // some string
