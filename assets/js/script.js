
const timerElement = document.querySelector(".timer-count");
const startButton = document.querySelector(".start-btn");
const startBttnContainerEl = document.querySelector(".start-bttn-container");
const openingEl = document.querySelector(".opening-section")
const quizEl = document.querySelector(".quiz-container");
const answerElement = Array.from(document.getElementsByClassName("answer-text"));

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
const quizQuestionsArray = [
    {
        question: "Commonly used data types DO NOT include:",
        options: ["choice 1", "choice2", "choice3","choice3"],
        correctA: 2,
    },
    {
        question: "The condition in an if/else statement is enclosed within______.",
        options: ["choice 1", "choice2", "choice3","choice3"],
        correctA: 3,
    },
    // {
    //     question: "Arrays in Javascript can be used to store______.",
    //     answer1: "all of the below", 
    //     answer2: "other arrays", 
    //     answer3: "booleans",
    //     answer4: "numbers and strings",
    //     correctA: 1,
    // },
    // {
    //     question: "String values must be enclosed within ______ when being assigned to variables.",
    //     answer1: "commas", 
    //     answer2: "curly brackets", 
    //     answer3: "quotes",
    //     answer4: "parentheses",
    //     correctA: 3,
    // },
    // {
    //     question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    //     answer1: "Javascript", 
    //     answer2: "terminal/bash", 
    //     answer3: "for loops",
    //     answer4: "console.log",
    //     correctA: 4,
    // },
    // {
    //     question: "Commonly used data types DO NOT include:",
    //     answer1: "strings", 
    //     answer2: "booleans", 
    //     answer3: "numbers",
    //     answer4: "alerts",
    //     correctA: 4,
    // },
    // {
    //     question: "The condition in an if/else statement is enclosed within______.",
    //     answer1: "quotes", 
    //     answer2: "curly braces", 
    //     answer3: "parentheses",
    //     answer4: "square brackets",
    //     correctA: 3,
    // },
    // {
    //     question: "Arrays in Javascript can be used to store______.",
    //     answer1: "all of the below", 
    //     answer2: "other arrays", 
    //     answer3: "booleans",
    //     answer4: "numbers and strings",
    //     correctA: 1,
    // },
    // {
    //     question: "String values must be enclosed within ______ when being assigned to variables.",
    //     answer1: "commas", 
    //     answer2: "curly brackets", 
    //     answer3: "quotes",
    //     answer4: "parentheses",
    //     correctA: 3,
    // },
    // {
    //     question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    //     answer1: "Javascript", 
    //     answer2: "terminal/bash", 
    //     answer3: "for loops",
    //     answer4: "console.log",
    //     correctA: 4,
    // },
    ]

// function to start game on start button click
function startQuiz() {
    openingEl.setAttribute("class", "hide");
    quizEl.setAttribute("class", "show")
    startBttnContainerEl.setAttribute("class", "hide")
    startButton.disabled = true;
    startButton.style.display = "none";
    timerCount = 60;
    questionsToUse = [...quizQuestionsArray];
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
        //if condition to check if time is 0 then run endQuis
        timerElement.textContent = timerCount;
    }, 1000);
    }

// Function to generate a question from an array
function generateQuestion() {
    if (questionsToUse.length === 0 || questionCount >= totalQuestions ) {
            return
    }
    questionCount++;
    const questionIndex = Math.floor(Math.random() * questionsToUse.length)
    currentQuestion = questionsToUse[questionIndex];
    questionElements.innerHTML = currentQuestion.question;
    questionElements.options.forEach(function(option, i){
        //var optionBtn = make "anew button
        optionBnt.text = option
        optionBtn.setAttribute("data-number", i)
        optionBn.onClick = checekAnswer
       // optionsEl.append(optiponBnt)

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




//     answerElements.forEach( answer => {
//         const number = answer.dataset['number'];
//         answer.innerHTML = currentQuestion['answer' + number];
//     })
// //Remove question from total Questions array ""
//     questionsToUse.splice(questionIndex,1);
// }

// // Addeventlistener function to record users choice
// answerElements.forEach(answer => {
//     answer.addEventListener("click", selected => {
//     const userchoice = selected.target;
//     const userSelectedAnswer = userchoice.dataset['number'];
        
//     // Conditional function to check if answer is wrong if so, reduce the time by 10sec.
//         // if conditional to display text if answered correctly or incorrectly
// function checkAnswer() {

//     if (userSelectedAnswer == currentQuestion.correctA) {
//         answerResult.textContent = "Correct!";
//     }
//     else if (userSelectedAnswer !== currentQuestion.correctA) {
//         answerResult.textContent = "Wrong!";
//             if (timerCount <= 10) {
//                 timerCount = 0;
//                 endQuiz()
//             }
            
//             else if (timerCount > 10) {
//                 timerCount = timerCount - 10;
//             }
//     }
// }
// checkAnswer()
// generateQuestion()
// })
// })

// // function to record time once last question ansered and quiz finished
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