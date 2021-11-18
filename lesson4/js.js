/*// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function formula( a, b ) {
  return (a * b)
}
let formula1 = formula(10,5);
console.log(formula1);*/

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

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

function array(a,b,c) {

  document

}

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
