const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;


let chosenMaxLife = 100;
let currentMonstarHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
adjustHealthBars(chosenMaxLife);

function attackMonster(mode){
    let maxDamage;
    if (mode==='ATTACK'){
    maxDamage = ATTACK_VALUE;
}   else if (mode==='STRONG_ATTACK'){
    maxDamage = STRONG_ATTACK_VALUE;
}
const damage = dealMonsterDamage(maxDamage);
    currentMonstarHealth -= damage;
    console.log(currentMonstarHealth);
    const playerDamaged = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= playerDamaged;
    if (currentMonstarHealth <=  0 && currentPlayerHealth > 0){
        alert('You won!');
    }else if (currentPlayerHealth <=  0 && currentMonstarHealth > 0){
        alert('You lost!');
    }else if (currentPlayerHealth <=  0 && currentMonstarHealth <= 0){
        alert('You have a draw!');
    }
}
function attackHandler(){
    attackMonster('ATTACK');    
}

function strongAttackHandler(){
    attackMonster('STRONG_ATTACK');    
}

function healingPlayer(){

}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healingPlayer);