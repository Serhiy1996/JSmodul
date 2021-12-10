// -створити форму з інпутами для name та age.
//   При відправці форми записати об'єкт в localstorage

let key = document.forms['sendToLocal'].name;
let age = document.forms['sendToLocal'].age;
let elementById = document.getElementById('button');

let send = (sendToLcName, sendToLcAge) => {
  let user ={
    name: sendToLcName,
    age: sendToLcAge
      }
  localStorage.setItem(key, JSON.stringify(user));
};
elementById.onclick = () => {
  send(name.value);
  send(age.value);

}
document.forms

// -створити форму з інпутами для model,type та volume автівки.
//   при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.
