const timerEl = document.querySelector(".timer-count");
const startButton = document.querySelector(".start-bttn");
const submitButton = document.querySelector(".submit-bttn");
const resetButton = document.querySelector(".reset-bttn");
const startBttnContainerEl = document.querySelector(".start-bttn-container");
const scoreContainerEl = document.querySelector(".score-container")
const openingEl = document.querySelector(".opening-section")
const quizEl = document.querySelector(".quiz-container");
const questionEl = document.getElementById("question-title")
const optionsEl = document.getElementById("options");
const answerResultEl = document.getElementById("answer-result");
const userScoreEl = document.getElementById("final-score");
const userNameEl = document.querySelector(".user-name");
const scoresDisplayedEl = document.querySelector(".display-scores");
const viewHighScoresEl = document.querySelector("#view-highscores-link");
const timerControlEl = document.querySelector(".timer-control");
const navbarEl = document.querySelector(".navbar-links")
const highscoreContainerEl = document.querySelector(".highscores-container");

var timer;
var timerCount;
var score = 0;
var questionCount = 0;
var highscores = [];
var currentQuestion = {};

// Objects containing:
    // An index value, questions, options and correct answer
const quizArray = [
    {
        question: "Commonly used data types DO NOT include:",
        options: ["Arrays", "Alerts", "Strings", "Booleans"],
        correctA: 1,
    },
    {
        question: "The condition in an if/else statement is enclosed within______.",
        options: ["Quotes", "Curly Brackets", "Parentheses","Square Brackets"],
        correctA: 2,
    },
    {
        question: "Arrays in Javascript can be used to store______.",
        options: ["All of These", "other arrays","booleans","numbers and strings"],
        correctA: 0,
    },
    {
        question: "String values must be enclosed within ______ when being assigned to variables.",
        options: ["commas", "curly brackets", "quotes", "parentheses"],
        correctA: 2,
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        options: ["Javascript", "terminal/bash", "for loops", "console.log"],
        correctA: 3,
    },
    {
        question: "JavaScript is a ___ -side programming language.",
        options: ["Client", "Server", "Both","Neither of those"],
        correctA: 2,
    },
    {
        question: "Which of the following will write the message “Hello World” in an alert box?",
        options: ["alertBox(“Hello World”);", " alert(Hello World);", "msgAlert(“Hello World”);","alert(“Hello World”);"],
        correctA: 3,
    },
    {
        question: "How do you find the minimum of x and y using JavaScript?",
        options: ["min(x,y);", " Math.min(x,y)", "Math.min(xy)","min(xy);"],
        correctA: 1,
    },
    {
        question: "Which are the correct “if” statements to execute certain code if “x” is equal to 2?",
        options: ["if(x 2)", " if(x = 2)", "if(x == 2)","if(x != 2 )"],
        correctA: 2,
    },
    {
        question: "Which of the following is an array method?",
        options: ["Map", "Filter", "Reduce","All of These"],
        correctA: 3,
    },

    ];

// variable to dictate total length of quiz and # of quiz questions
var totalQuestions = quizArray.length-1;

// function to start game on start button click
function startQuiz() {
    openingEl.setAttribute("class", "hide");
    quizEl.setAttribute("class", "show");
    startBttnContainerEl.setAttribute("class", "hide");
    navbarEl.setAttribute("class", "hide")
    viewHighScoresEl.disabled = true;
    startButton.disabled = true;
    timerCount = 120;
    generateQuestion();
    startTimer();
};

startButton.addEventListener("click", startQuiz);

// Function to end Game if parameters are met
function endQuiz () {
    scoreContainerEl.setAttribute("class", "show");
    quizEl.setAttribute("class", "hide");
        recordScore();
}

// function to record and manage all time functionality and start timer when called
function startTimer() {       
    // Sets timer
    timer = setInterval(function() {
        timerCount--;
        //if condition to check if time is 0 then run endQuiz
        if (timerCount <=0) {
            endQuiz();
        }
        timerEl.textContent = timerCount;
    }, 1000);
    }

// Function to generate a question from an array
function generateQuestion() {
    
    currentQuestion = quizArray[questionCount];
    questionEl.innerText = currentQuestion.question;
  
    optionsEl.innerHTML = "";

    currentQuestion.options.forEach(function(option, i) {
        var optionBttn = document.createElement("button");
        optionBttn.innerHTML = option;
        optionBttn.setAttribute("value", i);
        optionBttn.onclick = checkAnswer;
        optionsEl.append(optionBttn);
    })
}

// Conditional function to check if answer is wrong if so, reduce the time by 10sec.
// if conditional to display text if answered correctly or incorrectly
function checkAnswer() {

    userSelectedAnswer = this.value

    if (userSelectedAnswer == currentQuestion.correctA) {
        answerResultEl.textContent = "Correct!";
        if(questionCount == totalQuestions) {
            endQuiz()
        } 
        else {
            questionCount++;
            generateQuestion()
        }
    }

    else if (userSelectedAnswer !== currentQuestion.correctA) {
        answerResultEl.textContent = "Wrong!";
            timerCount = timerCount - 10;
        if(questionCount == totalQuestions) {
            endQuiz()
        } 
        else {
            questionCount++;
            generateQuestion()
        }
    }
}

// function to record score once quiz has ended
function recordScore() {
    clearInterval(timer);
    score = timerCount;
    userScoreEl.innerText = "Your Final Score is: " + score + ".";
}


var highscores = JSON.parse(localStorage.getItem("userHighScore")) || [];

// functionality for all the quiz elements and buttons to start various sectoins of the quiz or hide/show sections.
submitButton.addEventListener("click", function(event) {
    event.preventDefault();

    var userHighScore = {
        score: score,
        userInitials: userNameEl.value.trim(),
    }

    highscores.push(userHighScore);
    localStorage.setItem("userHighScore", JSON.stringify(highscores));
    scoreContainerEl.setAttribute("class", "hide");
    highscoreContainerEl.setAttribute("class", "show")
    navbarEl.setAttribute("class", "show")
    resetButton.setAttribute("class", "show");
    scoresDisplayedEl.innerHTML = "highscores";
    timerEl.textContent = 0;
})


resetButton.addEventListener("click", function(event) {
    event.preventDefault();
    
    localStorage.setItem("userHighScore", JSON.stringify([]));
    scoresDisplayedEl.innerHTML = "highscores";

})

viewHighScoresEl.addEventListener("click", function(event) {
    event.preventDefault();

    viewHighScoresEl.setAttribute("class", "show");
    highscoreContainerEl.setAttribute("class", "show");
    openingEl.setAttribute("class", "hide")
    quizEl.setAttribute("class", "hide");
    scoreContainerEl.setAttribute("class", "hide");
    startBttnContainerEl.setAttribute("class", "hide");
    scoresDisplayedEl.innerHTML = "highscores";
    resetButton.setAttribute("class", "show");
})

document.getElementById("home-link").addEventListener("click", function(event) {
    event.preventDefault();

    openingEl.setAttribute("class", "show");
    startBttnContainerEl.setAttribute("class", "show");
    resetButton.setAttribute("class", "hide");
    highscoreContainerEl.setAttribute("class", "hide");
    startButton.disabled = false;
    questionCount = 0;
})