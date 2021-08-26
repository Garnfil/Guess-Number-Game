const easy = document.querySelector('.easy');
const hard = document.querySelector('.hard');
const start = document.querySelector('.start');
const submitGuess = document.querySelector('.submit-guess');

// event handler for easy and hard
easy.addEventListener('click', OnEasyGuess);
hard.addEventListener('click', OnHardGuess);

// event handler for start
start.addEventListener('click', OnStartGame);

// event handlet for submitting a guess number
submitGuess.addEventListener('click', SubmitGuessNumber);

const userName = document.querySelector('.user-name');
const lifeNumber = document.querySelector('.life')
const number = document.querySelector('.number');
const inputName = document.querySelector('#name');
const inputNumber = document.querySelector('#number-input');
const mode = document.querySelector('.mode');
const container = document.querySelector('.container');
const form = document.querySelector('.form');
const numberContainer = document.querySelector('.number-container');
let count = 5;

// a random numbers in different mode
const easyNumbers = Math.floor(Math.random() * 6);
const hardNumbers = Math.floor(Math.random() * 11);


function OnEasyGuess() {
  number.innerHTML = easyNumbers; 
  mode.innerHTML = this.innerHTML + ' 0-5';
  hard.removeEventListener('click', OnHardGuess);
  easy.style.backgroundColor = 'red';
};

function OnHardGuess() {
  number.innerHTML = hardNumbers;
  mode.innerHTML = this.innerHTML + ' 0-10';
  easy.removeEventListener('click', OnEasyGuess);
  hard.style.backgroundColor = 'red';
};

function OnStartGame() {
  
  userName.innerHTML = inputName.value;
  container.classList.add('show');
  form.style.display = 'none';
  lifeNumber.innerHTML = count;
  
  if (inputName.value === '') {
    form.style.display = 'block';
    container.classList.remove('show');
  }
}

function SubmitGuessNumber() {
  if (inputNumber.value == number.innerHTML) {
    number.style.opacity = '1';
    numberContainer.style.border = '20px solid green';
    window.location.reload();
  } else {
    numberContainer.style.border = '20px solid red';
    lifeNumber.innerHTML -= 1;
  }
  
  if (lifeNumber.innerHTML == 0) {
    alert('Try again');
    window.location.reload();
  }
}
