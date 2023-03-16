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
var timerEl = document.getElementById("timer");
var timeLeft = 60;
var questionContainerEl = document.getElementById('question-container');
var shuffledQuestions;
var currentQuestionIndex;

startButton.addEventListener('click', startGame)
function timer() {
    timerEl = setInterval(function () {
        if (timeLeft > 0) {
            timeAdjustment(-1);
        } else {
            endQuiz();
        }
    }, 1000);
}
function timeAdjustment(amount) {
    timeLeft += amount;
    if (timeLeft < 0) {
        timeLeft = 0;
    }
    timerEl.textContent = 'Time Remaining: ' + timeLeft;
}
clickStart.onclick = timer;
function startGame() {
    startButton.classList.add('hide');
    // questionContainerEl.classList.remove('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    nextQuestion();
}

function nextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex])

}
function showQuestion(questions) {
    questionElement.innerText = questions.questions;
    questions.answers.forEach(answer => {
        var button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectedAnswer);
        answerButtonEl.appendChild(button)
    })
}
function resetState() {
    nextButton.classList.add('hide')
    while (answerButtonEl.firstChild) {
        answerButtonEl.removeChild(answerButtonEl.firstChild)
    }
}
function selectedAnswer() {
    var selectedButton = e.target;
    var correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerButtonEl.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
}
function setStatusClass() {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}
function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}