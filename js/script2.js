const divisibility = prompt('Pari o dispari?').toLowerCase();
const numUser = parseInt(prompt('Dammi un numero tra 1 e 5'));
const numComputer = numRandom(1, 5)

console.log ('numero random', numComputer);
const sum = numUser + numComputer;

console.log('somma', sum);

if ((isEven(sum) && divisibility == 'pari') || (!isEven(sum) & divisibility == 'dispari')) {
    alert('hai vinto');
}    
else {
    alert('hai perso');
};

function numRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isEven(number) {
    if (number % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
};