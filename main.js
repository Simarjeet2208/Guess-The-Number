let form = document.getElementById('form');
let input = document.getElementById('input');
let prev_guess = document.getElementById('prev_guess');
let remaining_guess = document.getElementById('remaining');
let answer = document.getElementById('ans');
let submit = document.getElementById('submit')
let result_section = document.getElementById('result_section')

let playGame = true;
let guessArray = [];
let numGuess = 1;
let random_num = parseInt(Math.random()*101);
let guess;

if(playGame)
{
    submit.addEventListener('click',function(e){
    e.preventDefault()
    guess =  parseInt(input.value);
    validateValue(guess)
    })
}

function validateValue(guess)
{
    if(isNaN(guess)){
        alert('Enter valid number');
    }
    else if(guess > 100){
        alert('Enter value less than 100')
    }
    else if(guess < 1)
    {
        alert('Enter value greater than 1')
    }
    else{
        guessArray.push(guess);
        if(numGuess > 10){
            displayGuess(guess)
            displayMessege('GAME OVER !!!')
            gameEnd()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess)
{
    if(guess===random_num){
        displayMessege(`You guessed it right random number is ${random_num}`);
        gameEnd()
    }
    else if(guess > random_num){
        displayMessege(`This number is too high !!!`)
    }
    else{
        displayMessege(`This number is too low !!!`)
    }
}

function displayGuess(guess){
    input.value = '';
    prev_guess.innerHTML += ` ${guess} `;
    numGuess++;
    remaining_guess.innerHTML = `${11-numGuess}`;
}

let p = document.createElement('p');

function displayMessege(message){
    answer.innerHTML = `<h3>${message}</h3>`;
}
function gameEnd(){
    input.value = '';
    input.setAttribute('disabled','')
    p.classList.add('button');
    p.innerHTML = '<h3 id = "start">Start New Game</h3>'
    result_section.appendChild(p)
    playGame = false;
    newGame()
}
function newGame()
{
    let start_button = document.getElementById('start');
    start_button.addEventListener('click',function(){
        guessArray = [];
        numGuess = 1;
        random_num = parseInt(Math.random()*101);
        remaining_guess.innerHTML = `${11-numGuess}`;
        answer.innerHTML = ''
        input.removeAttribute('disabled');
        result_section.removeChild(p)
        prev_guess.innerHTML = '';
        playGame = true;
    })
}