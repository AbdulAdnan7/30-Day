function Digiclock() {
    let now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();


    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;


    const digiDisplay = `${hours}:${minutes}:${seconds}`;

    const clockDisplay = document.getElementById('clock').textContent = digiDisplay;
}

setInterval(Digiclock, 1000);

Digiclock();


const quotes = [
    "Believe you can and you're halfway there. — Theodore Roosevelt",
    "Your limitation—it’s only your imagination.",
    "Push yourself, because no one else is going to do it for you.",
    "Great things never come from comfort zones.",
    "Success doesn’t just find you. You have to go out and get it.",
    "Dream it. Wish it. Do it.",
    "The harder you work for something, the greater you’ll feel when you achieve it.",
    "Don’t watch the clock; do what it does. Keep going.",
    "Little things make big days.",
    "It’s going to be hard, but hard does not mean impossible."
  ];


  const dailyQuote = document.getElementById('quote');


  function randomqoutes() {
    const indexofquotes = Math.floor(Math.random() * quotes.length);
    dailyQuote.textContent = quotes[indexofquotes];
  }

  randomqoutes();


  //to-do List


  const input = document.getElementById('todoInput');
  const addBtn = document.getElementById('addTodo');
  const lists = document.getElementById('todoList');


  function addTask() {
    if(input.value === "") {
        alert("Wrtie Something First!");
    } else {
        let li = document.createElement('li');
        li.textContent = input.value;
        lists.appendChild(li);
        let span = document.getElementById("span");
        span.textContent = "&times;";
        span.appendChild(li);
    }

    input.value = "";
    SaveData();
  }


addBtn.addEventListener("click", function() {
     addTask()
     SaveData()
    }
)

function SaveData() {
  localStorage.setItem("data", lists.innerHTML);
  lists.innerHTML = localStorage.getItem("data");
}
SaveData();


let startGame = document.getElementById('playGame');
let  secretMessage = document.getElementById('gameMessage');
let randomNum = Math.floor(Math.random() * 100) + 1;

startGame.addEventListener("click", function() {
  let userGuess = prompt("Guess the Number: ");
  if(!userGuess === null) {
     return
  }

  const Guess = Number(userGuess);

  if(!Guess || Guess < 0 || Guess > 100) {
    alert("please enter a valif number")
  } else if(Guess < randomNum) {
    alert("Number is too low Guess Higher!")
  } else if(Guess > randomNum) {
    alert("Number is too High Guess Lower!")
  } else {
    secretMessage.textContent = `Your Guess is Correct! Number is ${randomNum}`;
    randomNum = Math.floor(Math.random() * 100) + 1;
  }
}) 

