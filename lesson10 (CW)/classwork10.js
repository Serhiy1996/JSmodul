/*
// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку
// на яку считується та виводиться на консоль інформація з цих 2х форм.
//  Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

let divElement = document.createElement('div');
divElement.innerText = '1';
divElement.style.margin = '50px';
document.body.appendChild(divElement)
let divElement1 = document.createElement('div');
divElement1.innerText = '2';
divElement1.style.margin = '50px';
document.body.appendChild(divElement1);

let formElement = document.createElement('form');
formElement.setAttribute('name','formElement')
divElement.appendChild(formElement);

let formElement1 = document.createElement('form');
formElement1.setAttribute('name', 'formElement1');
divElement1.appendChild(formElement1);

let input1 = document.createElement('input');
input1.setAttribute('name', 'input1');
formElement.append(input1);

input2 = document.createElement('input');
input2.setAttribute('name', 'input2');
formElement1.append(input2);

let button = document.createElement('button');

document.body.appendChild(button);
button.innerText = 'Click';
button.addEventListener('click', function () {
  console.log(document.forms[formElement] = input1.value);
  console.log(document.forms[formElement1] = input2.value);
})*/


// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//   При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)


/*let input1 = document.createElement('input');

let input2 = document.createElement('input');

let input3 = document.createElement('input');

let button = document.createElement('button');
button.innerText = 'Інформація з таблички';

document.body.append(input1,input2,input3,button)

button.addEventListener('click',function () {
  let value = input1.value;
  let value1 = input2.value;
  let value2 = input3.value;


function table(value, value1, value2) {
  let tb = document.createElement('table');
  let divElement = document.createElement('div');

  tb.style.border = '2px solid blue';
  divElement.appendChild(tb);
  document.body.appendChild(divElement);

  for (let i = 0; i < value; i++) {
    let value = document.createElement('tr')
    value.style.border = '2px solid blue';
    for (let j = 0; j < value1; j++) {
    let value1 =  document.createElement('td');
      value1.style.border = '2px solid blue';
      value1.innerText = `${value2}`;
      tb.appendChild(value);
      value.append(value1);

    }
  }
}
  table(value, value1, value2);
})*/


/*// - Сворити масив не цензцрних слів.
//   Сворити інпут текстового типу.
//   Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//   Перевірку робити при натисканні на кнопку

let bedWord = ['свиня', 'козел', 'баран'];

let inputElement = document.createElement('input');
let buttonElement = document.createElement('button');
buttonElement.innerText = 'ПЕРЕВІРКА СЛІВ';
document.body.append(inputElement, buttonElement);

buttonElement.addEventListener('click', function () {
  let value1 = inputElement.value;
  for (const value of bedWord) {
    if (value === value1) {
      alert('ти ввів погане слово');
      return;
    }
    }
  if (value1) {
    alert('все добре');
  }
});*/




// - Сворити масив не цензцрних слів.
//   Сворити інпут текстового типу.
//   Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//   Кинути алерт з попередженням у випадку якщо містить.
//   Перевірку робити при натисканні на кнопку

let bedWord = ['свиня', 'козел', 'баран'];

let inputElement = document.createElement('input');
let buttonElement = document.createElement('button');
buttonElement.innerText = 'ПЕРЕВІРКА СЛІВ';
document.body.append(inputElement, buttonElement);

buttonElement.addEventListener('click', function () {
  let value1 = inputElement.value;
  for (const value of bedWord) {
    if (value === value1) {
      alert('ти ввів погане слово');
      return;
    }
  }
  if (value1) {
    alert('все добре');
  }
});
