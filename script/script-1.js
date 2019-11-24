/*=============================================
NO HEX RANDOM CHANGE BG COLOR
=============================================*/

const colorBtn = document.querySelector('.colorBtn');
const bodyBG = document.querySelector('body');

const colors = ['red', 'blue', 'green'];

colorBtn.addEventListener('click', changeColor);

function changeColor() {
  let random = Math.floor(Math.random() * colors.length)
  bodyBG.style.backgroundColor = colors[random];
}

/*=============================================
        WITH HEX RANDOM CHANGE BG COLOR
=============================================*/

const hexNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'A', 'B', 'C', 'D', 'E', 'F'];
const hex = document.querySelector('.hex');
const hexBtn = document.querySelector('.hexBtn');

hexBtn.addEventListener('click', getHex);

function getHex() {
  let hexCode = '#';

  for (i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * hexNumbers.length)
    hexCode += hexNumbers[random];
  }

  bodyBG.style.backgroundColor = hexCode;
  hex.innerHTML = hexCode;
}

/*=============================================
                QUOTE GENERATOR
=============================================*/

const quotes = [
  {
    name: 'Oscar Wilde',
    quote: '“Be yourself; everyone else is already taken.”'
  },
  {
    name: 'Mahatma Gandhi',
    quote: '“Be the change that you wish to see in the world.”'
  },
  {
    name: 'Eleanor Roosevelt',
    quote: '“No one can make you feel inferior without your consent.”'
  },
  {
    name: 'Walt Disney',
    quote: '"The way to get started is to quit talking and begin doing."'
  },
  {
    name: 'Rob Siltanen',
    quote: '“Here\'s to the crazy ones.The misfits.The rebels.The troublemakers.The round pegs in the square holes.The ones who see things differently.They\'re not fond of rules. And they have no respect for the status quo. You can quote them, disagree with them, glorify or vilify them. About the only thing you can\'t do is ignore them.Because they change things.They push the human race forward.And while some may see them as the crazy ones, we see genius.Because the people who are crazy enough to think they can change the world, are the ones who do.”'
  }
]

const quoteBtn = document.querySelector('#quoteBtn');
const quote = document.querySelector('#quote');
const quoteAuthor = document.querySelector('#quoteAuthor');

quoteBtn.addEventListener('click', getQuote);

function getQuote() {
  let random = Math.floor(Math.random() * quotes.length)
  quote.innerHTML = quotes[random].quote;
  quoteAuthor.innerHTML = quotes[random].name;
}

/*=============================================
                INPUT MESSAGE
=============================================*/

const messageIn = document.querySelector('#messageIn');
const sendBtn = document.querySelector('#sendBtn');
const messageOut = document.querySelector('#messageOut');

sendBtn.addEventListener('click', sendMsg);

function sendMsg() {
  let content = messageIn.value;
  if (content === '') {
    content = '"Please, Type a Message"'
    messageOut.style.color = 'red';
  } else if (content.length >= 1) {
    messageOut.style.color = 'orange';
  }
  messageOut.innerHTML = content;
  messageIn.value = '';
}

/*=============================================
                    COUNT
=============================================*/

let counter = document.querySelector('.counter');
const minusOne = document.querySelector('#minusOne');
const resetCount = document.querySelector('#resetCount');
const addOne = document.querySelector('#addOne');

let count = 0;

minusOne.addEventListener('click', decrementCount);
addOne.addEventListener('click', incrementCount);
resetCount.addEventListener('click', backToZero);

function decrementCount() {
  count--;
  counter.innerHTML = count;
  if (counter.innerHTML < '0') {
    counter.style.color = 'red';
  } else if (counter.innerHTML === '0') {
    counter.style.color = 'black';
  }
  counter.animate([{ opacity: '0.1' }, { opacity: '1' }], { duration: 200, fill: 'forwards' });
}

function incrementCount() {
  count++;
  counter.innerHTML = count;
  if (counter.innerHTML > '0') {
    counter.style.color = 'green';
  } else if (counter.innerHTML === '0') {
    counter.style.color = 'black';
  }
  counter.animate([{ opacity: '0.1' }, { opacity: '1' }], { duration: 200, fill: 'forwards' });
}

function backToZero() {
  count = 0;
  counter.innerHTML = count;
  counter.style.color = 'black';
  counter.animate([{ opacity: '0.1' }, { opacity: '1' }], { duration: 200, fill: 'forwards' });
}

/*=============================================
                    CAROUSEL
=============================================*/

const image = document.querySelector('.images');
const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');

let imgCount = 0;

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

function nextSlide() {
  //iterate
  imgCount++;
  //animation transition
  image.animate([{ opacity: '0.5' }, { opacity: '1' }], { duration: 200, fill: 'forwards' })
  //loop to first image
  if (imgCount === 5) {
    imgCount = 0;
  }
  //render current imgCount
  image.style.backgroundImage = `url(/images/bcg-${imgCount}.jpg)`
}

function prevSlide() {
  //decrement
  imgCount--;
  //animation transition
  image.animate([{ opacity: '0.5' }, { opacity: '1' }], { duration: 200, fill: 'forwards' })
  //loop to last image
  if (imgCount === -1) {
    imgCount = 4;
  }
  //render current imgCount
  image.style.backgroundImage = `url(/images/bcg-${imgCount}.jpg)`
}


/*=============================================
                  CALCULATOR  
=============================================*/
//numbers and oprands
const numbers = document.querySelectorAll('#numberBtn');
//screen
const screen = document.querySelector('#screen');
//clear 'AC'
const clearBtn = document.querySelector('#clearBtn');
//equal 'result'
const equalBtn = document.querySelector('#equalBtn');


for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener('click', function () {
    let number = numbers[i].getAttribute('data-num');
    screen.value += number;
  })
}

equalBtn.addEventListener('click', function () {
  if (screen.value === '') {
    return;
  } else {
    let calculate = eval(screen.value);
    screen.value = calculate;
  }
})

clearBtn.addEventListener('click', function () {
  screen.value = '';
})

/*=============================================
                    CLOCK
=============================================*/

//main function
function showTime() {

  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  //AM/PM format
  let formatHours = convertFormat(hours);

  //!2400HR format
  hours = checkTime(hours);

  //addZero before single numbers
  hours = addZero(hours);
  minutes = addZero(minutes);
  secondss = addZero(seconds);

  document.getElementById('clock').innerHTML = `${hours} : ${minutes} : ${seconds} ${formatHours}`;
}

//helper func: to toggle between AM and PM
function convertFormat(time) {
  let format = 'AM';
  if (time >= 12) {
    format = 'PM';
  }
  return format;
}

//helper func: not get 2400HR format 
function checkTime(time) {
  if (time > 12) {
    time -= 12;
  }
  if (time === 0) {
    time = 12;
  }
  return time
}

//helper func: unshift('0') to single numbers
function addZero(time) {
  if (time < 10) {
    time = '0' + time;
  }
  return time;
}

//call main func thru setInterval
setInterval(showTime, 1); // 1millisecond refresh
