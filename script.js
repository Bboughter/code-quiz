var questions = [{
    question: "What does HTML stand for?",
    a: "1. Hyper Text Markup Language",
    b: "2. Hyper Tool Markup List",
    c: "3. Hungry Total Meat Lover",
    d: "4. Hyper Text Manager Language",
    correct: "Hyper Text Markup Language",
},
{
    question: "Choose the correct HTML element to define important text.",
    a: "1. <important>",
    b: "2. <massive>",
    c: "3. <strong>",
    d: "4. <hulk>",
    correct: "<strong>",
},
{
    question: "The *[asterik symbol] is called",
    a: "1. All Selector",
    b: "2. Universal Selector",
    c: "3. General Selector",
    d: "4. Star",
    correct: "Universal Selector",
},
{
    question: "Which code removes the underline from links?",
    a: "1. text-decoration: go away",
    b: "2. text-decoration: none",
    c: "3. text-decoration: hide",
    d: "4. text-underline: none",
    correct: "text-decoration: none",
},
{
    question: "How do you write 'Hello World!' in an alert box?",
    a: "1. msg('Hello World!')",
    b: "2. alertBox('Hello World!')",
    c: "3. noticeMe('Hello World!')",
    d: "4. alert('Hello World!')",
    correct: "alert('Hello World!')",
},
{
    question: "How do you declare a JavaScript variable?",
    a: "1. var carName",
    b: "2. v carName",
    c: "3. variable carName",
    d: "4. create carName",
    correct: "var carName",
}
];
var startButton = document.getElementById("start-button");
var startQuiz = document.querySelector(".start");
var timerEl = document.getElementById("timer");
var timeLeft = 60;
var quizContainerEl = document.querySelector('#quiz-container');
var timerCount;
var shuffledQuestions;
var currentQuestionIndex = 0;
var userScore = 0;


startButton.addEventListener('click', startPage);


function startTimer() {
    setInterval(() => {
        timerEl.textContent = 'Time remaining:' + timeLeft;
        timeLeft--;

        if (timeLeft <= 0) {
            clearInterval(timerEl);
            timerEl.innerHTML = "Time's up!";
            endGame();
        }
    }, 1000);
}
function startPage() {

    startButton.setAttribute('style', 'display:none');
    startQuiz.setAttribute('style', 'display:none')

    startTimer();
    quizContainerEl.style.display = "block";
    quizContainerEl.innerHTML = '';
    var questionHeader = document.createElement("h2");
    questionHeader.textContent = questions[currentQuestionIndex].question;
    var answerA = document.createElement('button');
    answerA.textContent = questions[currentQuestionIndex].a;
    answerA.addEventListener('click', answerClick);
    var answerB = document.createElement('button');
    answerB.textContent = questions[currentQuestionIndex].b;
    answerB.addEventListener('click', answerClick);
    var answerC = document.createElement('button');
    answerC.textContent = questions[currentQuestionIndex].c;
    answerC.addEventListener('click', answerClick);
    var answerD = document.createElement('button');
    answerD.textContent = questions[currentQuestionIndex].d;
    answerD.addEventListener('click', answerClick);

    quizContainerEl.appendChild(questionHeader);
    quizContainerEl.appendChild(answerA);
    quizContainerEl.appendChild(answerB);
    quizContainerEl.appendChild(answerC);
    quizContainerEl.appendChild(answerD);


}
// var correctAnswer = questions[currentQuestionIndex].correct
var answerDetermination = document.getElementById('answer-determination')

var answerClick = function (event) {
    event.preventDefault();
    var answerPicked = event.target.textContent;
    var correctAnswer = questions[currentQuestionIndex].correct;
    if (answerPicked !== correctAnswer) {
        adjustTime(-10);
        answerDetermination.textContent = "Bummer!";
        currentQuestionIndex++;
    } else {
        (answerClick === correctAnswer)
        answerDetermination.textContent = "Awesome!";
        currentQuestionIndex++;
        userScore++;
        endGame();
    }
    if (currentQuestionIndex >= questions.length) {
        endGame();
    } else {
        startPage(questions[currentQuestionIndex])
    };

}

var test = function (event) {
    event.preventDefault();
    resetDisplay();
    getQuestion(questions[currentQuestionIndex]);
}
function resetDisplay() {
    quizContainerEl.innerHTML = "";
    document.querySelector('.start').style.display = 'none';
}
var highScoresView = document.getElementById('high-score');

function highScores() {
    var data = localStorage.getItem('object');
    var getData = JSON.parse(data);
    var name = getData.name;
    var score = getData.score;
    quizContainerEl.innerHTML = '';
    quizContainerEl.inn = name + "" + score;
}
highScoresView.addEventListener('click', () => {
    highScores();
})
var initials = '';
function endGame() {
    resetDisplay();
    timerEl.textContent = '';
    clearInterval()
}
var endingPage = document.createElement('h2');
var empty = document.getElementById('answer-determination');
empty.appendChild(endingPage);
answerDetermination.innerHTML = "";
endGame.innerHTML="WOW! Way to go! Your final score is " + userScore + ". Enter your initials below to save it to the high scores list.";

var initialsInput = document.createElement('input');
empty.appendChild(initialsInput);

var submitBtn = document.createElement('button');
submitBtn.textContent = 'Submit';
empty.appendChild(submitBtn);

submitBtn.addEventListener('click', initialsInput);

var storeData = (...input) => {
    var data = JSON.stringify("name:", input[0], "score:", input[1])
    localStorage.setItem('object', data);
}

