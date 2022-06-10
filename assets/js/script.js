
const timerElement = document.querySelector(".timer-count");
const startButton = document.querySelector(".start-btn");
const startBttnContainerEl = document.querySelector(".start-bttn-container");
const openingEl = document.querySelector(".opening-section")
const quizEl = document.querySelector(".quiz-container");
const questionElement = document.getElementById("question-title")
const optionsEl = document.getElementById("options");
const answerResult = document.getElementById("answer-result");
const userScore = document.getElementById("final-score");
const userName = document.querySelector(".user-name");
const submitButton = document.querySelector(".submit-btn");
const scoreContainer = document.querySelector(".score-container")

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

var totalQuestions = quizArray.length-1;

// function to start game on start button click
function startQuiz() {
    openingEl.setAttribute("class", "hide");
    quizEl.setAttribute("class", "show")
    startBttnContainerEl.setAttribute("class", "hide")
    startButton.disabled = true;
    timerCount = 120;
    generateQuestion();
    startTimer();
    
};

startButton.addEventListener("click", startQuiz);

// Function to end Game if parameters are met
function endQuiz () {
    scoreContainer.setAttribute("class", "show");
    quizEl.setAttribute("class", "hide")
        recordScore();
}

// function to record timer
function startTimer() {       
    // Sets timer
    timer = setInterval(function() {
        timerCount--;
        //if condition to check if time is 0 then run endQuiz
        if (timerCount <=0) {
            endQuiz();
        }
        timerElement.textContent = timerCount;
    }, 1000);
    }

// Function to generate a question from an array
function generateQuestion() {
    
    currentQuestion = quizArray[questionCount];
    questionElement.innerText = currentQuestion.question;
  
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
        answerResult.textContent = "Correct!";
        if(questionCount == totalQuestions) {
            endQuiz()
        } 
        else {
            questionCount++;
            generateQuestion()
        }
    }

    else if (userSelectedAnswer !== currentQuestion.correctA) {
        answerResult.textContent = "Wrong!";
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

function recordScore() {
    clearInterval(timer);
    score = timerCount - totalQuestions
    userScore.innerText = "Your Final Score is: " + score + ".";
}

// function to record time once last question ansered and quiz finished
//     text-area input name to log high score against time
//     save name and score against local-storage
var highscores = JSON.parse(localStorage.getItem("userHighScore")) || [];

submitButton.addEventListener("click", function(event) {
    event.preventDefault();

    var userHighScore = {
        score: score,
        userInitials: userName.value.trim(),
    }

    highscores.push(userHighScore);
    localStorage.setItem("userHighScore", JSON.stringify(highscores));

})







// function phases() {
//     if ()
// }