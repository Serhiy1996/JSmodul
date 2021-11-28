/*
//  Дано список імен.
//   let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'


let n1 = 'Harry..Potter';
let n2 = 'Ron---Whisley';
let n3 = 'Hermione__Granger';

let normalName = (name) => name.replaceAll('..', ' ')
  .replaceAll('---', ' ')
  .replaceAll('__', ' ');


console.log(normalName(n2));
console.log(normalName(n1));
console.log(normalName(n3));*/


/*// -створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

let random = (lenght,numb) => {
  let newArr = [];
  for (let i = 0; i < lenght; i++) {
    newArr.push(Math.floor(Math.random() * numb));
      }
  return newArr;
};

console.log(random(10, 100));*/

/*// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

let random = (lenght, number) => {
  let newArr = [];
  for (let i = 0; i < lenght; i++) {
    newArr.push(Math.floor(Math.random() * number));

  }
  newArr.sort();
  return newArr;
};
console.log(random(100, 6));*/

/*// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа

let random = (lenght, number) => {
  let newArr = [];
  for (let i = 0; i < lenght; i++) {
    newArr.push(Math.floor(Math.random() * number));
  }
  return newArr.filter(value => value % 2 === 0);

};
console.log(random(100, 6));*/

/*// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
let random = (lenght, number) => {
  let newArr = [];
  for (let i = 0; i < lenght; i++) {
    newArr.push(Math.floor(Math.random() * number));
  }
  return newArr.map(value => value.toString());

};
console.log(random(100, 6));*/


/*// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
let nums = [11,21,3];

let sortNumb = (array, direction) => {
  if (direction === 'true')
    return array.sort((a, b) => a - b);
  if (direction === 'false') return array.sort((a, b) => b - a);

};
console.log(sortNumb(nums, 'true'));*/


// - є масив
// let coursesAndDurationArray = [
//   {title: 'JavaScript Complex', monthDuration: 5},
//   {title: 'Java Complex', monthDuration: 6},
//   {title: 'Python Complex', monthDuration: 6},
//   {title: 'QA Complex', monthDuration: 4},
//   {title: 'FullStack', monthDuration: 7},
//   {title: 'Frontend', monthDuration: 4}
// ];

/*// -- відсортувати його за спаданням за monthDuration

let filterMonth = (field) => {
  return (a, b) => a[field] > b[field] ? 1 : -1;
};

console.log(coursesAndDurationArray.sort(filterMonth('monthDuration')));
coursesAndDurationArray.forEach(coursesAndDurationArray => console.log(coursesAndDurationArray.monthDuration));*/



/*// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

let result = coursesAndDurationArray.filter(coursesAndDurationArray => coursesAndDurationArray.monthDuration > 5);
console.log(result);*/

