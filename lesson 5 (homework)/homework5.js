//
// Всі функції повинні бути описані стрілочним типом!!!!

/*//   - створити функцію яка обчислює та повертає площу прямокутника висотою

let pl = (a, b) => a * b;
console.log(pl(5, 5));*/

/*// - створити функцію яка обчислює та повертає площу кола

let area = (r) => Math.PI * Math.pow(r, 2);
console.log(area(5));*/

/*// - створити функцію яка обчислює та повертає площу циліндру

let formula = (h, r) => {
  if (typeof h === 'number' && typeof r === 'number') {
    return (2 * Math.PI * (h * r));
      }else {
    console.log('не правильні значення');}
}

console.log(formula(2, 2));*/

/*// - створити функцію яка приймає масив та виводить кожен його елемент

let arr = (...array) => {
  for (const arrayElement of array) {
    console.log(arrayElement);
  }
};
arr([1, 3, 'qwe', '3']);*/

/*// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент

let paragraf = (text) => document.write(`<p>${text}</p>`);
paragraf('Lorem ipsum dolor sit amet.');*/


// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// ???(показує що все ок але не хоче відпрацьовувати)???

let element = (text, lenghtlLi) => {
  document.write(`<ul>`)
  for (let i = 0; i < lenghtlLi; i++) {
    document.write(`<li>${text}</li>`)
  }
  document.write(`</ul>`);
};
element('Lorem ipsum dolor sit.', 3);


/*// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

 let arr = (array) =>{
  document.write(`<ul>`)
   for (let arrayElement of array) {
     document.write(`<li>${array}</li>`);
   }
   document.write(`</ul>`);
}

arr([1, 3, 4, 'string', 4 < 4]);*/

/*
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let object = [{id: 123, name: 'Dima', age: 22 }, {id: 321, name: 'Olga', age: 27}]


let arrayObg = (array) => {
  for (const arrayElement of array) {
    document.write(`<div>${arrayElement.id}/ ${arrayElement.name}/ ${arrayElement.age}</div>`);
  }
}
arrayObg(object);
*/
