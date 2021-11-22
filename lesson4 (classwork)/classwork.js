/*// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

function minNumb(numb1, numb2, numb3) {
  if (numb1 < numb2 && numb1 < numb3) {
    document.write(numb1);
  }else if (numb2 < numb1 && numb2 < numb3){
    document.write(numb2);
  }else {
    document.write(numb3);
  }

}

minNumb(12, 123, 9);*/


/*// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
function maxNumb(numb1, numb2, numb3) {
  if (numb1 > numb2 && numb1 > numb3){
    document.write(numb1);
      } else if ( numb2 > numb1 && numb2 > numb3){
    document.write(numb2);
  }else {
    document.write(numb3);
  }

}

maxNumb(10,21,4)*/

/*// - створити функцію яка повертає найбільше число з масиву
let array = [2,1,24,414,421,241,12]
function arrayMaxNubm(array) {
    let max = array[0];
    for (let element of array) {
        if(element > max){
            max = element;
        }
    }
    return max;
}

console.log(arrayMaxNubm(array));*/

/*// - створити функцію яка повертає найменьше число з масиву

let arrayNumb = [12, 4, 53, -10, 2, -343, 1];

function minNumb(array) {
  let min = array[0];
  for (let minElement of array) {
    if (minElement < min){
      min = minElement;
    }


  }
  return min;
}

console.log(minNumb(arrayNumb));*/

/*// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

let arrayNumb = [1, 10, 5, 4];

function sumNumb(arr) {
  let sum = 0;
  for (let arrElement of arr) {
    sum = arrElement + sum

  }
  return sum;
}

document.write(sumNumb(arrayNumb));*/

/*// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

let arrNumb = [10, 5, 2, 3];

function seredne(array) {
  let s = 0;
  for (let arrayElement of array) {
    s = arrayElement + s;

  }
  return s / array.length;
}

console.log(seredne(arrNumb));*/


// (не працює )
/*// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);


/!*function minMaxNumb(number) {
  let max = numb[0];
  let min = numb[0];
  for (let maxElement of numb) {
    if (maxElement > max) {
      max = maxElement;
    }
    if (maxElement < min) {
      min = maxElement;
    }
  }
  console.log(max);
  return min;
}

minMaxNumb(2, 4, 14, 6, 4, 31, 42, 1);*!/*/




/*// - створити функцію яка заповнює масив рандомними числами

function randomNumb(random) {
  let arrRandom = [];
  for (let i = 0; i < random; i++) {
    arrRandom.push(Math.round(Math.random()*5));
  }
  return arrRandom;
}

console.log(randomNumb(10));*/

// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

/*// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

function randomArray(random, limit) {
  let randonNumb = [];
  for (let i = 0; i < random; i++) {
    randonNumb.push(Math.round(Math.random() * limit));
  }
  return randonNumb;
}
console.log(randomArray(100, 100));*/



/*(не можу догнати, поки що, як правильно зробити, а просто переписати із розв'язку не хочеться)*/
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

function revers(newArr) {
  let rev = [];
  for (const newElement of newArr) {
    rev.push(newElement.reverse());
  }
  return rev;
}
console.log(revers(4, 3, 2, 1));
