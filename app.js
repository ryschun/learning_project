const startGameBtn = document.getElementById('start-game-btn');
const SELECTION_ROCK = 'ROCK';
const SELECTION_PAPER = 'PAPER';
const SELECTION_SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = SELECTION_ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER WINS';
const RESULT_COMP_WINS = 'COMPUTER WINS';

let gameIsRunning = false;


const getPlayerChoice = () => {
    const selection = prompt(`${SELECTION_ROCK}, ${SELECTION_PAPER} ${SELECTION_SCISSORS}?`, '').toUpperCase();
    if (selection !== SELECTION_ROCK &&
        selection !== SELECTION_PAPER &&
        selection !== SELECTION_SCISSORS
    ) {
        alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`)
        return;
    }
    return selection;

    function someFn() {

    }

};

const getComputerChoice = () => {
    const randomValue = Math.random();
    if (randomValue < 0.34) {
        return SELECTION_ROCK;
    } else if (randomValue < 0.67) {
        return SELECTION_PAPER;
    } else {
        return SELECTION_SCISSORS;
    }

};


const getWinner = (compChoice, playerChoice = DEFAULT_USER_CHOICE) => {
    const plwin1 = compChoice === SELECTION_ROCK && playerChoice === SELECTION_PAPER;
    const plwin2 = compChoice === SELECTION_PAPER && playerChoice === SELECTION_SCISSORS;
    return compChoice === playerChoice
        ? RESULT_DRAW
        : (plwin1) ||
            (plwin2) ||
            (compChoice === SELECTION_SCISSORS && playerChoice === SELECTION_ROCK)
            ? RESULT_PLAYER_WINS
            : RESULT_COMP_WINS;
}
//     if (compChoice === playerChoice) {
//         return RESULT_DRAW;
//     } else if (
//         compChoice === SELECTION_ROCK && playerChoice === SELECTION_PAPER ||
//         compChoice === SELECTION_PAPER && playerChoice === SELECTION_SCISSORS ||
//         compChoice === SELECTION_SCISSORS && playerChoice === SELECTION_ROCK
//     ) {
//         return RESULT_PLAYER_WINS;
//     } else {
//         return RESULT_COMP_WINS;
//     }
// };

startGameBtn.addEventListener('click', () => {
    if (gameIsRunning) {
        return;
    }
    gameIsRunning = true;
    console.log('The game is starting...',);
    const playerChoice = getPlayerChoice();
    const ComputerChoice = getComputerChoice();
    let winner;
    if (playerChoice){
        winner = getWinner(ComputerChoice, playerChoice);
    } else {
        winner = getWinner(ComputerChoice, playerChoice); // він буде не визначенний. передасться в функцію, де другий аргумент заданий за замовчуванням. Відповідно якщо передається undefined - то воно перетворбє його на значення за замовчуванням. якби не написали нічого був би той самий ефект. тобто передали би лише один аргумент. ПЕРЕДАЄТЬСЯ ЛИШЕ В JS І ЛИШЕ В ПЕРШИЙ ПАРАМЕТР
    }
    
    let message = `You picked ${playerChoice || DEFAULT_USER_CHOICE}, computer picked ${ComputerChoice}, therefore `;
    if (winner === RESULT_DRAW) {
        message = message + 'you had a draw.';
    } else if (winner === RESULT_PLAYER_WINS) {
        message = message + 'you won.';
    } else if (winner === RESULT_COMP_WINS) {
        message = message + 'computer wins.'
    }
    alert(message);
    gameIsRunning = false;
});


// not related to the game
const sumUp = (...numbers) => { // це називається рест оператором. і він завжди має бути останній в листі
    const validateNumber = (number) => {
        console.log('Number before validation: ',number);
        
        return isNaN(number) ? 0 : number;
    };
    let sum = 0;
    for (const num of numbers){
        // console.log('Validate number:',validateNumber(num));      
        sum += validateNumber(num); 
        console.log(sum);
    }
    return sum;

}

const subtractUp = function(){
    let sum = 0;
    for (const num of arguments){ // аргументи це специфічне keyword яке утворюються в дужках параметрів функції якщо ти використовуєш слово function. НЕ ВИКОРИСТОВУВАТИ ЦЕ!!!!
        sum -= num; 
    }
    return sum;
}
console.log(sumUp(1,2,'awfoaswofoawfbna',0,0,0,0));
// console.log(sumUp(1,5,10,-3,6,8,8,50));
// console.log(subtractUp(1,3,8,10));