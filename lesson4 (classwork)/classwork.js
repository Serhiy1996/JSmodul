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

// - створити функцію яка повертає найбільше число з масиву
let maxNumb = [1, 2, 34, 0, -1];

function maxNumboOFArr(arrayNumb) {
  let max = arrayNumb[0];
  for (let max1 of arrayNumb) {
    if (arrayNumb > max1 ){
      max1 = arrayNumb;
    }
  }
  return max;
}
console.log(maxNumboOFArr(maxNumb));
// - створити функцію яка повертає найменьше число з масиву
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
