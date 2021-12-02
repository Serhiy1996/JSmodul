// Всі функції повинні бути описані стрілочним типом!!!!
/*//   - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

let minNumb = (a, b, c) => {
  if (a < b && a < c) {
    console.log(a);
  } else if (b < a && b < c) {
    console.log(b);
  } else {
    console.log(c);
  }
};
minNumb(1, -4, -3);*/

/*// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

let maxNumb = (a, b, c) => {
  if (a > b && b > c) {
    console.log(a);
  } else if (b > a && b > c) {
    console.log(b);
  } else {
    console.log(c);
  }
};

maxNumb(4, 1000, 3223);*/

/*// - створити функцію яка повертає найбільше число з масиву

let numbArr = [-10, 0, -4, 3, 2];
let maxNumbArr = (arr) => {
  let max = 0;
  for (let arrElement of arr) {
    if (arrElement > max) {
      max = arrElement;
    }
  }
  return max;
}

console.log(maxNumbArr(numbArr));*/

/*// - створити функцію яка повертає найменьше число з масиву

let minArr = [-20, 4, 2, 0, -22];

let minNumbArr = (minArrNumb) => {
  let min = 0;
  for (const minArrNumbElement of minArrNumb) {
    if (minArrNumbElement <min) {
      min = minArrNumbElement;
    }
  }
  return min;
};

console.log(minNumbArr(minArr));*/

/*// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

let sumArr = [1, 4, 5, 2, 8];

let sumNumbArr = (arr) => {
  let sum = 0;
  for (const arrElement of arr) {
    sum = arrElement + sum;
  }
  return sum;
};

console.log(sumNumbArr(sumArr));*/

/*// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
let arrNumb = [1, 4, 5, 2, 6, 3];

let seredne = (arr) => {
  let seredneAref = 0;
  for (const arrElement of arr) {
    seredneAref = arrElement + seredneAref;
  }
  return seredneAref / arr.length;

}

console.log(seredne(arrNumb));*/

/*// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

let minMaxElement = [1, 4, 5, 3, 6,];

let minMaxNumb = (arr) =>{
  let min =arr [0];
  let max = arr[0];
  for (const arrElement of arr) {
    if (arrElement < min) {
      min = arrElement;
    }
    else if (arrElement > max) {
      max = arrElement;
    }
  }
  console.log(max);
  return min;

}
minMaxNumb(minMaxElement);*/


/*// - створити функцію яка заповнює масив рандомними числами

let randomElement = (arr) => {
  let random = [];
  for (let i = 0; i < arr; i++) {
    random.push(Math.round(Math.random() * 5));
  }
  return random;
};
console.log(randomElement([10]));*/

// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

let randomElement = (number, limit) => {
  let random = [];
  for (let i = 0; i < number; i++) {
    random.push(Math.round(Math.random() * limit));
  }
  return random;
};
console.log(randomElement(5, 5));

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
