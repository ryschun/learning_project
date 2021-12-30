const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEALING_VALUE = 15;
const ENTERED_VALUE = prompt('Max life for you and the monster', '100');
const LOG_EVENT_PLAYER_ATTACK = 'PLAYER_ATTACK';
const LOG_EVENT_PLAYER_STRONG_ATTACK = 'PLAYER_STRONG_ATTACK';
const LOG_EVENT_MONSTER_ATTACK = 'MONSTER_ATTACK';
const LOG_EVENT_PLAYER_HEAL = 'PLAYER_HEAL';
const LOG_EVENT_GAME_OVER = 'GAME_OVER';

let chosenMaxLife = parseInt(ENTERED_VALUE);
let battleLog = [];
if (isNaN(chosenMaxLife) || chosenMaxLife <= 0) {
    chosenMaxLife = 100;
}
let currentMonstarHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;
adjustHealthBars(chosenMaxLife);

function writeToLog(event, value, monsterHealth, playerHealth) {
    logEntry = {
        event: event,
        value: value,
        finalMonsterHealth: monsterHealth,
        finalPlayerHealth: playerHealth
    };
    if (event === LOG_EVENT_PLAYER_ATTACK) {
        logEntry.target = 'MONSTER';
    } else if (event === LOG_EVENT_PLAYER_STRONG_ATTACK) {
        logEntry.target = 'MONSTER';
    } else if (event === LOG_EVENT_MONSTER_ATTACK) {
        logEntry.target = 'PLAYER';
    } else if (event === LOG_EVENT_PLAYER_HEAL) {
        logEntry.target = 'PLAYER';
    } else if (event === LOG_EVENT_GAME_OVER) {
        logEntry = {
            event: event,
            value: value,
            finalMonsterHealth: monsterHealth,
            finalPlayerHealth: playerHealth
        };
    }
    battleLog.push(logEntry);
}

function reset() {
    currentMonstarHealth = chosenMaxLife;
    currentPlayerHealth = chosenMaxLife;
    resetGame(chosenMaxLife)
    console.log(currentPlayerHealth, currentMonstarHealth, playerHealthBar.value, monsterHealthBar.value);
}

function useBonusLife() {
    if (currentPlayerHealth <= 0 && hasBonusLife) {
        hasBonusLife = false;
        removeBonusLife();
        currentPlayerHealth = chosenMaxLife;
        alert('You just used a bonus life');
        setPlayerHealth(currentPlayerHealth)
        writeToLog(
            LOG_EVENT_GAME_OVER, 
            'PLAYER USED A BONUS LIFE', 
            currentMonstarHealth, 
            currentPlayerHealth
            );
    } else {
        alert('You lost!');
        writeToLog(
            LOG_EVENT_GAME_OVER, 
            'MONSTER WON', 
            currentMonstarHealth, 
            currentPlayerHealth
            );
    }
}
function endRound() {
    let playerDamaged;
    // const initialPlayerHealth = currentPlayerHealth;
    writeToLog(
        LOG_EVENT_MONSTER_ATTACK, 
        playerDamaged, 
        currentMonstarHealth, 
        currentPlayerHealth
        );

    if (currentMonstarHealth <= 0 && currentPlayerHealth > 0) {
        alert('You won!');
        writeToLog(
            LOG_EVENT_GAME_OVER, 
            'PLAYER WON', 
            currentMonstarHealth, 
            currentPlayerHealth
            );
        reset();
    } else if (currentPlayerHealth <= 0 && currentMonstarHealth > 0) {
        useBonusLife();
        reset();
    } else if (currentPlayerHealth <= 0 && currentMonstarHealth <= 0) {
        alert('You have a draw!');
        writeToLog(
            LOG_EVENT_GAME_OVER, 
            'A DRAW', 
            currentMonstarHealth, 
            currentPlayerHealth
            );
        reset();
    }

}

function attackMonster(mode) {
    let maxDamage;
    let logEvent; 
    if (mode === 'ATTACK') {
        maxDamage = ATTACK_VALUE;
        logEvent = LOG_EVENT_MONSTER_ATTACK;
    } else if (mode === 'STRONG_ATTACK') {
        maxDamage = STRONG_ATTACK_VALUE;
        logEvent = LOG_EVENT_PLAYER_STRONG_ATTACK;
    }
    const damage = dealMonsterDamage(maxDamage);
    currentMonstarHealth -= damage;
    writeToLog(
        logEvent, 
        damage, 
        currentMonstarHealth, 
        currentPlayerHealth
        );
    console.log('Monsterhealth:', currentMonstarHealth);

    const playerDamaged = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= playerDamaged;
    endRound()
}
function attackHandler() {
    attackMonster('ATTACK');
}

function strongAttackHandler() {
    attackMonster('STRONG_ATTACK');
}

function healHandler() {
    let healValue;
    const heal = Math.random() * HEALING_VALUE;
    if (currentPlayerHealth >= chosenMaxLife - heal) {
        alert('You can`t heal more than your max intial health.')
        healValue = chosenMaxLife - currentPlayerHealth;
    } else {
        healValue = heal
    }
    const healPoint = increasePlayerHealth(healValue);
    currentPlayerHealth += healValue;
    writeToLog(
        LOG_EVENT_PLAYER_HEAL, 
        healValue, 
        currentMonstarHealth, 
        currentPlayerHealth
        );
    const playerDamaged = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= playerDamaged;

    endRound()
    console.log('Player health:', currentPlayerHealth);
    console.log('Player health bar:', playerHealthBar.value);
}

function printLogHandler() {
    console.log(battleLog);
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healHandler);
logBtn.addEventListener('click', printLogHandler);
