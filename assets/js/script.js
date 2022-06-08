
const timerElement = document.querySelector(".timer-count");
const startButton = document.querySelector(".start-btn");
const startBttnContainerEl = document.querySelector(".start-bttn-container");
const openingEl = document.querySelector(".opening-section")
const quizEl = document.querySelector(".quiz-container");
var questionElement = document.getElementById("question-title")
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
var questionsToUse = []
var currentQuestion = {}

const totalQuestions = 5

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
        options: ["all of the below", "other arrays","booleans","numbers and strings"],
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
        question: "The condition in an if/else statement is enclosed within______.",
        options: ["choice 1", "choice2", "choice3","choice3"],
        correctA: 2,
    },

    ]

// function to start game on start button click
function startQuiz() {
    openingEl.setAttribute("class", "hide");
    quizEl.setAttribute("class", "show")
    startBttnContainerEl.setAttribute("class", "hide")
    startButton.disabled = true;
    timerCount = 60;
    // questionsToUse = [...quizQuestionsArray];
    generateQuestion();
    startTimer();
    
};

startButton.addEventListener("click", startQuiz);

// // // Function to end Game if parameters are met
// // function endQuiz () {
// //     //set question element class as hide
// //     //se score input element as show class
// //     if (questionsToUse.length === 0 || questionCount >=totalQuestions) {
// //         userScoreDetails();
// // }
// // }

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

// function recordScore() {
//     score = timerCount - questionsToUse.length
// }

// function userScoreDetails() {
//     clearInterval(timer);
//     recordScore();
//     showHide()
//     // element.dataset.scoresstate = "visible";
//     userScore.innerText = "Your Final Score is: " + score + ".";
// }


// Addeventlistener function to record users choice
        
//     // Conditional function to check if answer is wrong if so, reduce the time by 10sec.
//         // if conditional to display text if answered correctly or incorrectly

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

// function to record time once last question ansered and quiz finished
//     // text-area input name to log high score against time
//     // save name and score against local-storage

// function saveHighScores() {
//     // Stringify and set key in localStorage to todos array
//     localStorage.setItem("highscores", JSON.stringify(highscores));
// }
// submitButton.addEventListener("click", function(event) {
//     event.preventDefault();
    
//     var userScoreText = userName.value.concat(score)

//     highscores.push(userScoreText);
//     console.log(highscores)
//     })

// function phases() {
//     if ()
// }