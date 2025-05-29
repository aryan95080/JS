let randomNum=parseInt(Math.random()*100+1)

const submit=document.querySelector('#subt')
// console.log(submit)
const userInput=document.querySelector('#guessField')
// console.log(userInput)
const guessSlot=document.querySelector('.guesses');
// console.log(guessSlot)
const remaining=document.querySelector('.lastResult');
// console.log(remaining)
const lowOrHi=document.querySelector('.lowOrHi')
// console.log(lowOrHi)
const startOver=document.querySelector('.resultParas')
// console.log(startOver)

const p=document.createElement('p')
let prevGuess=[]
let numGuess=1
let playGame=true

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess=parseInt(userInput.value)
        validateGuess(guess)
    });
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number')
    }
    else if(guess<1){
        alert('Please Enter a number more than 1')
    }
    else if(guess>100){
        alert('Please Enter a number less than 100')
    }
    else{
        prevGuess.push(guess)
        if(numGuess===11){
            displayGuess(guess)
            displayMessage(`Game over.Random number was ${randomNum}`)
            endGame()
        }   
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess===randomNum){
        displayMessage(`Your guess is right`)
        endGame()
    }
    else if(guess<randomNum){
        displayMessage(`Number is Too low`)
    }
    else if(guess>randomNum){
        displayMessage(`Number is Too high`)
    }
}



function displayGuess(guess){
    userInput.value='';
    numGuess++
    guessSlot.innerHTML+=`${guess} , `
    remaining.innerHTML=`${11-numGuess}`
}

function displayMessage(message){
    lowOrHi.textContent = message;
}

function endGame(){
    userInput.value='';
    userInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
    startOver.appendChild(p);
    playGame=false;
    newGame();
}

function newGame(){
    const newGameButton=document.querySelector('#newGame')
    newGameButton.setAttribute='pointer'
    newGameButton.addEventListener('click',function(e){
        randomNum=parseInt(Math.random()*100+1);
        prevGuess=[];
        numGuess=1;
        guessSlot.innerHTML='';
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame=true;
    });
}