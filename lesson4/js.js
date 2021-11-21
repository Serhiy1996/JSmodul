/*// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function area(a,b) {

  return (a *b)
    }
    let area1 = area(10,5);
console.log(area1);*/

/*// - створити функцію яка обчислює та повертає площу кола з радіусом r

function formulaCircle(r) {
  if (typeof r === 'number') {
    return (Math.pow(r, 2) * 3.14)
  } else {
    console.log(undefined);
  }
}
console.log(formulaCircle(2));*/

/*
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function formula(h,r) {
   if (typeof h === 'number' && typeof r === 'number') {
  return (2 * 3.14 *(h *r))
}else {
     console.log('не правильні значення')}
}

console.log(formula(2, 'd'));*/

/*// - створити функцію яка приймає масив та виводить кожен його елемент

function array(arr) {
  for (let arrElement of arr) {
    console.log(arrElement)

  }
}
array([123, 'fsdf',321]);*/

/*// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function parahraf(text) {
  document.write(`<p>${text}</p>`)
}
parahraf('Lorem ipsum dolor sit amet.');*/

/*
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function createUl(text, elementLi) {
  document.write(`<ul>`)
  for (let i = 0; i < elementLi; i++) {
    document.write(`<li>${text}</li>`)
  }
  document.write(`</ul>`)
}

createUl('Lorem ipsum dolor sit amet.', 3);
*/

/*// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function arr(array) {

  document.write(`<ul>`)
  for (let arrayElement of array) {
    document.write(`<li>${arrayElement}</li>`)
  }
  document.write(`</ul>`)
}

arr(['hallo', 321, 9 === 9, 'qwe']);*/

/*// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let object = [{id: 'qwe', name: 'asd', age: 234}, {id: 'ewq', name: 'dsa', age: 4321}, {id: 'uyt',name: 'uio', age: 86}];

function arrayObject (array){
  for (const arrayElement of array) {
    document.write(`<div>${arrayElement.id}.${arrayElement.name}.${arrayElement.age}</div>`);
  }

}

arrayObject(object);*/
