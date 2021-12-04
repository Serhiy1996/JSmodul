// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

let divElement = document.createElement('div');
divElement.id = 'text';
divElement.innerText = 'click'
document.body.appendChild(divElement)

document.getElementById('hider').onclick = function (){
  document.getElementById('text').hidden = true;
  // input type="button" onClick="this.style.display='none'" value="Нажми, чтобы меня спрятать"
}
let buttonElement = document.createElement('button');
buttonElement.innerText = 'заховай мене';
buttonElement.classList = 'button';
buttonElement.style.background = `rgba(62,238,3,0.56)`
document.body.appendChild(buttonElement);

buttonElement.onclick = `this.style.display = 'none';`

//   - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
//
// let buttonElement = document.createElement('button');
// buttonElement.id = 'click';
// buttonElement.innerText = 'click here';
// buttonElement.style.background = '#da1717';
// document.body.appendChild(buttonElement);
//
// document.getElementById('clock').onclick = function () {
//
// }



// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//
// - Создайте меню, которое раскрывается/сворачивается при клике
//
//
// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//   Вывести список комментариев в документ, каждый в своем блоке.
//   Добавьте каждому комментарию по кнопке для сворачивания его body.


