var questions = [{
    question: "What does HTML stand for?",
    a: "1. Hyper Text Markup Language",
    b: "2. Hyper Tool Markup List",
    c: "3. Hungry Total Meat Lover",
    d: "4. Hyper Text Manager Language",
    correct: "1. Hyper Text Markup Language",
},
{
    question: "Choose the correct HTML element to define important text.",
    a: "1. <important>",
    b: "2. <massive>",
    c: "3. <strong>",
    d: "4. <hulk>",
    correct: "3. <strong>",
},
{
    question: "The *[asterik symbol] is called",
    a: "1. All Selector",
    b: "2. Universal Selector",
    c: "3. General Selector",
    d: "4. Star",
    correct: "2. Universal Selector",
},
{
    question: "Which code removes the underline from links?",
    a: "1. text-decoration: go away",
    b: "2. text-decoration: none",
    c: "3. text-decoration: hide",
    d: "4. text-underline: none",
    correct: "2. text-decoration: none",
},
{
    question: "How do you write 'Hello World!' in an alert box?",
    a: "1. msg('Hello World!')",
    b: "2. alertBox('Hello World!')",
    c: "3. noticeMe('Hello World!')",
    d: "4. alert('Hello World!')",
    correct: "4. alert('Hello World!')",
},
{
    question: "How do you declare a JavaScript variable?",
    a: "1. var carName",
    b: "2. v carName",
    c: "3. variable carName",
    d: "4. create carName",
    correct: "1. var carName",
}
];
var startButton = document.getElementById("start-button");
var startQuiz = document.querySelector(".start");
var timerEl = document.getElementById("timer");
var timeLeft = 60;
var questionContainerEl = document.querySelector('#quiz-container');
var timerCount;
var shuffledQuestions;
var currentQuestionIndex;

function startPage() {
    currentQuestionIndex = 0;
    start.setAttribute('style','display:content');
    startButton.setAttribute('style', 'display:none');

    startTimer();
    startGame();
   }

function startTimer () {
    timerInterval=setInterval(function() {
        timerCount--;
        timerEl.textContent = timerCount;
        if (timerCount === 0) {
            endGame();
        }
    }, 1000);
}

function startGame() {
    
}
startButton.addEventListener('click', startGame)