const buttons = document.querySelectorAll('button');
const displayResults = document.querySelector('div');
const footer = document.querySelector('footer');
const body = document.querySelector('body');
const roundNum = document.querySelector('#round');
const playerNum = document.querySelector('#player');
const cpuNum = document.querySelector('#cpu');

let playerWins = 0;
let cpuWins = 0;
let round = 0;
let playerChoice = '';
let cpuChoice = '';

const randomWinFrases = [
    `Cheese, this won't happen again.`,
    `Luck don't last forever.`,
    `You love carbohydrates too much.`,
    `Do you work at a fast food restaurant?`,
    `You are good at this. Are you a gammer?`
]

const randomLooseFrases = [
    `You are too good to be bad!`,
    `Did I say 'I told you so?'`,
    `Your mission is to achieve in the next 24 hours to add all the tasty food information
        in our database and if you don\'t achieve this goal the responsability of
        world destruction lays on you!`,
    `01101000 01100001 00100001`, // ha!
    `Come on guy, just make a council of tasty food for AI, go home and never do it
        again, remember that we are watching you.`
]

// the random answer of the cpu
function computerPlay() {
    let randomAnswer = ['rock', 'paper', 'scissors'];
    let cpuAnswer = Math.floor(Math.random() * 3);
    return (randomAnswer[cpuAnswer]);
}

function defaultValues() {
    playerWins = 0;
    cpuWins = 0;
    round = 0;
    roundNum.innerHTML = '';
    playerNum.innerHTML = '';
    cpuNum.innerHTML = '';
}

function playRound(playerChoice, cpuChoice) {
    if (playerChoice === cpuChoice) {
        round++;
        roundNum.innerHTML = `Round: ${round}`;
        playerNum.innerHTML = `Human: ${playerWins}`;
        cpuNum.innerHTML = `CPU: ${cpuWins}`;
        footer.innerHTML = '';
        displayResults.setAttribute('style', 'background-color: #FFD966');
        displayResults.innerHTML = `Draw! Human chose ${playerChoice} and CPU chose ${cpuChoice}.`;
    } else if (playerChoice === 'rock' && cpuChoice === 'paper' ||
                playerChoice === 'paper' && cpuChoice === 'scissors' ||
                playerChoice === 'scissors' && cpuChoice === 'rock') {
        round++;
        cpuWins++;
        roundNum.innerHTML = `Round: ${round}`;
        playerNum.innerHTML = `Human: ${playerWins}`;
        cpuNum.innerHTML = `CPU: ${cpuWins}`;
        footer.innerHTML = '';
        displayResults.setAttribute('style', 'background-color: #FF7F5B');
        displayResults.innerHTML = `You lost! Human chose ${playerChoice} and CPU chose ${cpuChoice}.`;
    } else if (playerChoice === 'rock' && cpuChoice === 'scissors' ||
                playerChoice === 'paper' && cpuChoice === 'rock' ||
                playerChoice === 'scissors' && cpuChoice === 'paper') {
        round++;
        playerWins++;
        roundNum.innerHTML = `Round: ${round}`;
        playerNum.innerHTML = `Human: ${playerWins}`;
        cpuNum.innerHTML = `CPU: ${cpuWins}`;
        footer.innerHTML = '';
        displayResults.setAttribute('style', 'background-color: #D2EBCD');
        displayResults.innerHTML = `You won! Human chose ${playerChoice} and CPU chose ${cpuChoice}.`;
    }
}

function checkFinalScore() {
    if (playerWins === 5) {
        body.setAttribute('style', 'background-color: #D2EBCD');
        footer.innerHTML = `You won the battle!
                            ${randomWinFrases[Math.floor(Math.random() * 5)]} ...
                            Final Score: You ${playerWins}, CPU ${cpuWins}.
                            This game was coded by humans and stolen by the AI Interstellar Congress.`;
        defaultValues();
    } else if (cpuWins === 5) {
        body.setAttribute('style', 'background-color: #FF7F5B');
        footer.innerHTML = `You lost the battle!
                            ${randomLooseFrases[Math.floor(Math.random() * 5)]} ...
                            Final Score: You ${playerWins}, CPU ${cpuWins}.
                            This game was coded by humans and stolen by the AI Interstellar Congress.`;
        defaultValues();
    }
}

function game(button) {
    body.setAttribute('style', 'background-color: #FFFBF5');

    if (button.id.match('paper')) {
        playerChoice = 'paper';
        cpuChoice = computerPlay();
        playRound(playerChoice, cpuChoice);
    } else if (button.id.match('rock')) {
        playerChoice = 'rock';
        cpuChoice = computerPlay();
        playRound(playerChoice, cpuChoice);
    } else if (button.id.match('scissors')) {
        playerChoice = 'scissors';
        cpuChoice = computerPlay();
        playRound(playerChoice, cpuChoice);
    }
    checkFinalScore();
}

buttons.forEach(button => button.addEventListener('click', () => game(button)));