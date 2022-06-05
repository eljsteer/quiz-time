
const timerElement = document.querySelector(".timer-count");
const startButton = document.querySelector(".start-btn");
const questionElements = document.getElementById("question-title");
const answerElements = Array.from(document.getElementsByClassName("answer-text"));
const answerResult = document.getElementById("answer-result");
const finalScore = document.getElementById("final-score");


var timer;
var timerCount;
var score = 0;
var questionCount = 0;
var questionsToUse = []
var currentQuestion = {}

const TotalQuestions = 10

// Objects containing:
    // An index value, questions, options and correct answer
const quizQuestionsArray = [
{
    question: "Commonly used data types DO NOT include:",
    answer1: "strings", 
    answer2: "booleans", 
    answer3: "numbers",
    answer4: "alerts",
    correctA: 4,
},
{
    question: "The condition in an if/else statement is enclosed within______.",
    answer1: "quotes", 
    answer2: "curly braces", 
    answer3: "parentheses",
    answer4: "square brackets",
    correctA: 3,
},
{
    question: "Arrays in Javascript can be used to store______.",
    answer1: "all of the below", 
    answer2: "other arrays", 
    answer3: "booleans",
    answer4: "numbers and strings",
    correctA: 1,
},
{
    question: "String values must be enclosed within ______ when being assigned to variables.",
    answer1: "commas", 
    answer2: "curly brackets", 
    answer3: "quotes",
    answer4: "parentheses",
    correctA: 3,
},
{
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    answer1: "Javascript", 
    answer2: "terminal/bash", 
    answer3: "for loops",
    answer4: "console.log",
    correctA: 4,
},
{
    question: "Commonly used data types DO NOT include:",
    answer1: "strings", 
    answer2: "booleans", 
    answer3: "numbers",
    answer4: "alerts",
    correctA: 4,
},
{
    question: "The condition in an if/else statement is enclosed within______.",
    answer1: "quotes", 
    answer2: "curly braces", 
    answer3: "parentheses",
    answer4: "square brackets",
    correctA: 3,
},
{
    question: "Arrays in Javascript can be used to store______.",
    answer1: "all of the below", 
    answer2: "other arrays", 
    answer3: "booleans",
    answer4: "numbers and strings",
    correctA: 1,
},
{
    question: "String values must be enclosed within ______ when being assigned to variables.",
    answer1: "commas", 
    answer2: "curly brackets", 
    answer3: "quotes",
    answer4: "parentheses",
    correctA: 3,
},
{
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    answer1: "Javascript", 
    answer2: "terminal/bash", 
    answer3: "for loops",
    answer4: "console.log",
    correctA: 4,
},
]

function recordScore() {
    score = timerCount - questionsToUse.length
}

// function to record timer
function startTimer() {       
    // Sets timer
    timer = setInterval(function() {
        timerCount--;
        timerElement.textContent = timerCount;
    }, 1000);
  }

// function to start game on start button click
function startQuiz() {
    startButton.disabled = true;
    startButton.style.display = "none";
    timerCount = 30;
    questionsToUse = [...quizQuestionsArray];
    generateQuestion();
    startTimer();
}

function generateQuestion() {
    if (questionsToUse.length === 0 || questionCount >= TotalQuestions || (timerCount <= 0) ) {
        return window.location.assign ("highscores.html")
    }
    questionCount++;
    const questionIndex = Math.floor(Math.random() * questionsToUse.length)
    currentQuestion = questionsToUse[questionIndex];
    questionElements.innerHTML = currentQuestion.question;

    answerElements.forEach( answer => {
        const number = answer.dataset['number'];
        answer.innerHTML = currentQuestion['answer' + number];
    })
//Remove question from total Questions array ""
    questionsToUse.splice(questionIndex,1);
}

// Addeventlistener function to record users choice
answerElements.forEach(answer => {
    answer.addEventListener("click", selected => {
    const userchoice = selected.target;
    const userSelectedAnswer = userchoice.dataset['number'];
    
// Conditional function to check if answer is wrong if so, reduce the time by 10sec.
    // if conditional to display text if answered correctly or incorrectly
    function checkAnswer() {
        if (userSelectedAnswer == currentQuestion.correctA) {
            answerResult.textContent = "Correct!";
        }
        else if (userSelectedAnswer !== currentQuestion.correctA) {
            answerResult.textContent = "Wrong!";
                if (timerCount <= 10) {
                    timerCount = 0;
                }
                
                else if (timerCount > 10) {
                    timerCount = timerCount - 10;
                }
        }
    }
    checkAnswer()
    generateQuestion()
    })
})

// function to stop time once last question answered
    //

// function to record time once last question ansered and quiz finished
    // text-area input name to log high score against time
    // save name and score against local-storage
function userScoreDetails() {
    recordScore();
    clearInterval(timer);
    userScore.innerHTML = "Your Final Score is: " + score + ".";
}


function saveHighScores() {
    // Stringify and set key in localStorage to todos array
    localStorage.setItem("highscores", JSON.stringify(highscores));
}
// This function is being called below and will run when the page loads.
function init() {
    // Get stored todos from localStorage
    var storedHighScores = JSON.parse(localStorage.getItem("highscores"));
  
    // If todos were retrieved from localStorage, update the todos array to it
    if (storedHighScores !== null) {
      userScore = storedTodos;
    }
}
init()
startButton.addEventListener("click", startQuiz);