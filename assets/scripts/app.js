const defaultResult = 0;
let currentResult = defaultResult;
currentResult = (currentResult + 10) * 3 / 2 - 1;

let calculationDescription = `(${defaultResult} +   10*3/2-1)`;

let errorMassage = 'an error \n \n' + 'occured' //ми юзаємо бек слеш щоб передати "особливий елемент який до стрінга не має відношення"
// якщо ми пишемо \n тоді ми робимо переривання строки
// let currentResult = 2
// let calculationDescription = 2


 outputResult(currentResult,errorMassage)

