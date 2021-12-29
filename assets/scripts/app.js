
const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];



function getUserNumberInput() {
    return parseInt(usrInput.value)
}


function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc}  ${operator}  ${calcNumber}`;
    outputResult(currentResult, calcDescription);
}

function whriteToLog(
    operationalIdentifier,
    prevResult,
    operationNumber,
    newResult
) {
    const logEntry = {
        operation: operationalIdentifier,
        prevResult: prevResult,
        number: operationNumber,
        result: newResult
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}

function calculateResult(calculationType) {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;

    let mathOperator;
    if (calculationType === 'ADD') {
        currentResult += enteredNumber;
        mathOperator = '+';
    } else {
        currentResult -= enteredNumber;
        mathOperator = '-';
    }
    createAndWriteOutput(mathOperator, initialResult, enteredNumber);
    whriteToLog(calculationType, initialResult, enteredNumber, currentResult);
    setInputField(currentResult);
}

function add() {
    calculateResult('ADD');
}

function subtract() {
    calculateResult('SUBTRACT');
}
function multiply() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult *= enteredNumber;
    createAndWriteOutput('*', initialResult, enteredNumber)
    whriteToLog('MULTIPLY', initialResult, enteredNumber, currentResult)
}
function divide() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult /= enteredNumber;
    createAndWriteOutput('/', initialResult, enteredNumber)
    whriteToLog('DIVIDE', initialResult, enteredNumber, currentResult)
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);







 // let errorMassage = 'an error \n \n' + 'occured'; //ми юзаємо бек слеш щоб передати "особливий елемент який до стрінга не має відношення"
// якщо ми пишемо \n тоді ми робимо переривання строки
// let currentResult = 2
// let calculationDescription = 2
// parsStr або parsInt переторює в текст або число
// currentResult = currentResult + +userInput.value можна да плюси написати і воно конкертне його також в цифру 