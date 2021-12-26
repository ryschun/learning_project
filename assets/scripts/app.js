const defaultResult = 0;
let currentResult = defaultResult;

function getUserNumberInput() {
    return parseInt(usrInput.value)
}

function add(){
    const enteredNumber = getUserNumberInput();
    const calcDescription = `${currentResult} + ${enteredNumber}`;
    currentResult = currentResult  + enteredNumber;
    outputResult(currentResult, calcDescription);
}

addBtn.addEventListener('click', add);




 



 // let errorMassage = 'an error \n \n' + 'occured'; //ми юзаємо бек слеш щоб передати "особливий елемент який до стрінга не має відношення"
// якщо ми пишемо \n тоді ми робимо переривання строки
// let currentResult = 2
// let calculationDescription = 2
// parsStr або parsInt переторює в текст або число
// currentResult = currentResult + +userInput.value можна да плюси написати і воно конкертне його також в цифру 