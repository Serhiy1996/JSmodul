/*// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
function car (model,producer, year, maxSpeed, volume) {
  this.model = model;
  this.produser = producer;
  this.year = year;
  this.maxSpeed = maxSpeed;
  this.volume = volume;

  // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`

  this.drive1 = function driveMax() {
    console.log(`їдемо зі швидкістю ${this.maxSpeed} км. на годину`);
  }

  // << Ще не доробив>>
  // // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
  // this.info = function () {
  //   for (const argument of this) {
  //     if (typeof this[argument] !== 'function') {
  //       console.log(`${argument} - ${this[arguments]}`)
  //     }
  //   }
  // };

// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed

this.increaseMaxSpeed = function (newSpeed) {
    this.maxSpeed = maxSpeed + newSpeed;
  }
// -- changeYear (newValue) - змінює рік випуску на значення newValue
  this.changeYear = function (newValue) {
    this.year = newValue;
  };

// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
  this.addDrive = function (drive) {
    this.drive = drive;
  };
 }

let car1 = new car('Tesla', 'tesla', 2019, 190, 'electro');
console.log(car1);
car1.drive1();
car1.increaseMaxSpeed(10);
car1.changeYear(2020);
car1.addDrive('olga');
console.log(car1);*/

/*
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
class car {
  constructor(model, producer, year, maxSpeed, volume) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.volume = volume;
  }
  // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
  drive() {
    console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
  }
  // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
  info() {
    for (const argument in this) {
      console.log(`${argument} - ${this[argument]}`);
    }
  }
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
  increaseMaxSpeed(newSpeed) {
    this.maxSpeed = this.maxSpeed + newSpeed;
  }
// -- changeYear (newValue) - змінює рік випуску на значення newValue
  changeYear(newValue) {
    this.year = newValue;
  }
  // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
  addDriver(driver) {
    this.drive = driver;
  }
 }
let car2 = new car('Skoda', 'VAG Grupe', '2021', 150, '2.0 benzin');
// console.log(car2);
car2.drive();
car2.info();
car2.increaseMaxSpeed(200);
car2.changeYear(2000);
car2.addDriver('Liza');
console.log(car2);
*/


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

class Popeluska {
  constructor(name, year, sizeLeg) {
    this.name = name;
    this.year = year;
    this.sizeLeg = sizeLeg;
  }
}

let cinderella = [
  new Popeluska('Irina', 37, 36),
  new Popeluska('Liza', 19, 37),
  new Popeluska('Olga', 20, 41),
  new Popeluska('Svitlana', 18, 40),
  new Popeluska('Eva', 22, 39),
  new Popeluska('Olena', 25, 35),
  new Popeluska('Natalia', 28, 34),
  new Popeluska('Juli', 30, 38),
  new Popeluska('Tania', 29, 39),
  new Popeluska('Oksana', 24, 35)
];
console.log(cinderella);
// console.log(cinderella);

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

class Prinz {
  constructor(name, age, findChoe) {
    this.name = name;
    this.age = age;
    this.findChoe = findChoe;
  }
}

let prinze = [
  new Prinz('Dima', 20, 38),
  new Prinz('Oleg', 26, 35),
  new Prinz('Vasya', 30, 39),
  new Prinz('Dima', 19, 37),
  new Prinz('Serhiy', 25, 36),
  new Prinz('Roman', 23, 34),
  new Prinz('Taras', 43, 40),
  new Prinz('Nazar', 27, 41),
  new Prinz('Petro', 29, 37),
  new Prinz('Misha', 33, 38),];

console.log(prinze);

//   За допомоги циклу знайти яка попелюшка повинна бути з принцом.

// ??вроді все добре але вибиває undefind, не можу знайти помилку (те ж саме із додатковим)??

function findCindarella (cinderella, prinze)  {
  for (const cinderellaElement of cinderella) {
    if (cinderellaElement.sizeLeg === prinze.findChoe) {
      return `твоя Попелюшка${cinderellaElement.name}`;
    }
  }
}

console.log(findCindarella(cinderella, prinze));

//   Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

console.log(cinderella.find((size) => size.sizeLeg === prinze.findChoe));
