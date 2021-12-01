// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :

/*
// a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)
let  elementById = document.getElementById('main_header');
 elementById.classList.add('sep-2021');*/

/*// b) робить шириниу елементу ul 400px

let addWidth = document.getElementsByTagName('ul')
for (const addWidthElement of addWidth) {
  addWidthElement.style.width = '400px'
}*/

/*// c) робить шириниу всіх елементів з класом linkList шириною 50%

let addWidthtoClass = document.getElementsByClassName('linkList');
for (const addWidthtoClass1 of addWidthtoClass) {
  addWidthtoClass1.style.width = '50%'

}*/
/*
// d) отримує текст який зберігається в елементі з класом listElement2
let addText1 = (text) => {
  let addTex = document.getElementsByClassName('listElement2');
  addTex.innerText = text;
  return text;
};
*/

/*// // e) отримує всі елементи li та змінює ім колір фону на сірий

let elementLI = document.getElementsByTagName('li');
for (const elementLIElement of elementLI) {
  elementLIElement.style.background = 'rgba(62,238,3,0.56)'
}*/

/*// // f) отримує всі елементи 'a' та додає їм клас anchor

let getElementA = document.getElementsByTagName('a');
for (const elementAElement of getElementA) {
  elementAElement.classList.add('anchar');
}*/

/*// // g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
let elementA = document.getElementsByTagName('a');
for (const elementAElement of elementA) {
  if (elementAElement.innerText === 'link3') {
    elementAElement.style.fontSize = '40px';
  }
}*/
//
/*// // h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
//
let elA = document.getElementsByTagName('a');
for (const elAElement of elA) {
  elAElement.classList.add(elAElement.innerText);
}*/

/*
// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
let getSub = document.getElementsByClassName('sub-header');
for (const subElement of getSub) {
  subElement.style.background = prompt('ЗМІНИТИ КОЛІР ФОНУ НА:');
}
*/

/*// // j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
let getElement = document.getElementsByClassName('sub-header');
for (const elementElement of getElement) {
if (elementElement.innerText === 'content 2 segment') {
  elementElement.style.color = prompt('ЗМІНИТИ КОЛІР ТЕКСТУ НА:');
}
}*/

/*// // k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

let getElementCont = document.getElementsByClassName('content_1');
for (const elementContElement of getElementCont) {
  elementContElement.innerText = prompt('add tex');
}*/

/*// // l) отримати елементи p та змінити їм padding на 20px

let tegP = document.getElementsByTagName('p');
for (const tegPElement of tegP) {
  tegPElement.style.padding = '20px';
}*/

/*// // m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)

let getText = document.getElementsByClassName('text2');
for (const textElement of getText) {
  textElement.innerText = 'sep - 2021';
}*/
