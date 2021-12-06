/*// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
document.getElementById('hiden').onclick = function () {
  document.getElementById('text').hidden = true;
}*/

/*//   - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
document.getElementById('hiden').onclick = function () {
  this.hidden = true;
}*/

/*// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18,
// та повідомити про це користувача
//
document.getElementById('buton').onclick = function () {
  let age = document.getElementById('age').value;
  if (!age) {alert('введіть свій вік правильно')

  }else if (age < 18) {
    alert('тобі не сюди');

  } else {
    alert('заходь))');
  }
}*/

// // // - Создайте меню, которое раскрывается/сворачивается при клике
// //
// let menuElement = document.querySelector('.menu');
// let titleElement = menuElement.querySelector('.title');
// titleElement.onclick = function () {
//   menuElement.classList.toggle('hidden');
// }



//   Вывести список комментариев в документ, каждый в своем блоке.
//   Добавьте каждому комментарию по кнопке для сворачивания его body.

// - Создать список комментариев , пример объекта коментария -
// {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
let coment = [
  {name: 'Арсен', сlass: 'Продуктовий магазин'},
  {name: 'КінгКрос',сlass: 'ТРЦ'},
  {name: 'Південний', сlass: 'ТЦ'},
  {name: 'Спартак', сlass: 'ТРЦ'},
  {name: 'SportLife', сlass: 'Фітнес-клуб'},
];
let divElement = document.createElement('div');
for (const value of coment) {
  let div1 = document.createElement('div');
  let h3 = document.createElement('h3');
  let h1 = document.createElement('h1');
  let btn = document.createElement('button');

  h3.innerText = value.name;
  h1.innerText = value.сlass;
  btn.innerText = 'click';
  btn.onclick = function () {
    h1.classList.add('pHidden');
  };
  div1.append(h3);
  div1.append(h1);
  div1.append(btn);
  divElement.append(div1);
}
document.body.appendChild(divElement);

