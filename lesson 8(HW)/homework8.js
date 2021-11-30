// - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :

// -- отримує текст з параграфа з id "content"

let pElement = document.getElementById('content');
console.log(pElement.innerText);

// -- отримує текст з блоку з id "rules"
let divElement = document.getElementById('rules');
console.log(divElement.innerText);

// -- замініть текст параграфа з id 'content' на будь-який інший
pElement.innerText = ('New - text');

// -- замініть текст параграфа з id 'rules' на будь-який інший
divElement.innerText = ('bla-bla-bla)))');

// -- змініть кожному елементу колір фону на червоний

let ch = document.body.children;
for (const ch1 of ch) {
  ch1.style.background = 'red';
}
// -- змініть кожному елементу колір тексту на синій
let child2 = document.body.children;
for (const child2Element of child2) {
  child2Element.style.color = 'blue';
}


// -- отримати весь список класів елемента з id=rules і вивести їх в console.log

let allList = document.getElementById('rules');
console.log(allList.classList);

// -- поміняти колір тексту у всіх елементів fc_rules на червоний
let cgangeCollor = document.getElementsByClassName('fc_rules');
for (const cgangeCollorElement of cgangeCollor) {
  cgangeCollorElement.style.color = 'rgba(46,238,3,0.99)'
}
