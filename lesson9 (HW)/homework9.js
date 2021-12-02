/*
// Все робити за допомоги js.
// - створити блок,
//   - додати йому класи wrap, collapse, alpha, beta
// // - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// // - додати цей блок в body.
// // - клонувати його повністю, та додати клон в body.

let div = document.createElement('div');
div.classList.add('wrap', 'collapse', 'alpha', 'beta');
div.style.background = 'rgba(46,238,3,0.99)';
div.style.color = '#7cb2b2';
div.style.fontSize = '100px';
document.body.appendChild(div);
document.body.appendChild(div.cloneNode(true));
*/

/*// - Є масив:
//   ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.

let array = ['Main', 'Products', 'About us', 'Contacts'];
let byClassName = document.getElementsByClassName('menu')[0];
array.forEach(value => {
  let li = document.createElement('li');
  li.innerText = value;
  byClassName.appendChild(li);
})*/

/*
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

let coursesAndDurationArray = [
  {title: 'JavaScript Complex', monthDuration: 5},
  {title: 'Java Complex', monthDuration: 6},
  {title: 'Python Complex', monthDuration: 6},
  {title: 'QA Complex', monthDuration: 4},
  {title: 'FullStack', monthDuration: 7},
  {title: 'Frontend', monthDuration: 4}
];

for (const coursesAndDurationArrayElement of coursesAndDurationArray) {
  let element = document.createElement('div');
  element.innerText = `${coursesAndDurationArrayElement.title} : ${coursesAndDurationArrayElement.monthDuration}`;
  document.body.appendChild(element);
}*/


// - Є масив
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>
// з title  елементу, та <p class='description'> з monthDuration елементу.
//   Завдання робити через цикли.


let coursesAndDurationArray = [
  {title: 'JavaScript Complex', monthDuration: 5},
  {title: 'Java Complex', monthDuration: 6},
  {title: 'Python Complex', monthDuration: 6},
  {title: 'QA Complex', monthDuration: 4},
  {title: 'FullStack', monthDuration: 7},
  {title: 'Frontend', monthDuration: 4}
];

for (const courses of coursesAndDurationArray) {
  let divElement = document.createElement('div');
  divElement.classList = 'item';
  let headingElement = document.createElement('h1');
  headingElement.classList = 'heading';
  headingElement.innerText = courses.title;
  let paragraphElement = document.createElement('p');
  paragraphElement.classList = 'description';
  paragraphElement.innerText = courses.monthDuration;

  document.body.appendChild(divElement);
  divElement.appendChild(headingElement);
  divElement.appendChild(paragraphElement);
}
