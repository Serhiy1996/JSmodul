// - Знайти та вивести довижину настипних стрінгових значень

/*// 'hello world', 'lorem ipsum', 'javascript is cool'

let lenghtHW = 'hello worlf';
console.log(lenghtHW.length);

let lenghtLI = 'Lorem ipsum';
console.log(lenghtLI.length);

let lenghtJC = 'javascript is cool';
console.log(lenghtJC.length);*/

/*// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

console.log('hallo worlg'.toLocaleUpperCase());

console.log('lorem ipsum'.toLocaleUpperCase());

console.log('javascript is cool'.toLocaleUpperCase());*/

/*
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

console.log('HELLO WORLD'.toLowerCase());

console.log('LOREM IPSUM'.toLowerCase());

console.log('JAVASCRIPT IS COOL'.toLowerCase());
*/

/*// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str = ' dirty string   ';
console.log(str.trim());*/

/*// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//   let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);

let str = 'Каждый охотник желает знать';

let stringToarray = (str) => {
  return str.split();
};
console.log(stringToarray(str));*/

/*// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//   let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

let str = 'Каждый охотник желает знать';
let delete_characters =(str, length) => {
  return str.substr(0, 7);
};
console.log(delete_characters(str));*/

/*// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
// При цьому всі символи рядка необхідно перевести у верхній регістр.
//   let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

let str = 'HTML JavaScript PHP';

let insert_dash =(str) => {
  let argStr = str.split('').join('-').toLocaleUpperCase();
  return argStr;
};

console.log(insert_dash(str));*/

/*// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

let str = 'lorem ipsum dolor sit amet.';

let strArg = (str) => {
  let newArg = str[0].toLocaleUpperCase() + str.slice(0,1);
  return newArg
};

console.log(strArg(str));*/


