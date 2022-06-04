// Objects containing:
    // An index value, questions, options and correct answer
const quizQuestionsArray = [
    {
        question1: "Commonly used data types DO NOT include:",
        ind: "1",
        optionAs: {
            a: "1. strings", 
            b: "2. booleans", 
            c: "3. numbers",
            d: "4. alerts"
        },
        correctA: "d",
},
{
    question2: "The condition in an if/else statement is enclosed within______.",
    ind: "2",
    optionAs: {
        a: "1. quotes", 
        b: "2. curly braces", 
        c: "3. parentheses",
        d: "4. square brackets"
    },
    correctA: "c",
},
{
    question3: "Arrays in Javascript can be used to store______.",
    ind: "3",
    optionAs: {
        a: "1. all of the below", 
        b: "2. other arrays", 
        c: "3. booleans",
        d: "4. numbers and strings",
    },
    correctA: "a",
},
{
    question4: "String values must be enclosed within ______ when being assigned to variables.",
    ind: "4",
    optionAs: {
        a: "1. commas", 
        b: "2. curly brackets", 
        c: "3. quotes",
        d: "4. parentheses"
    },
    correctA: "c",
},
{
    question5: "A very useful tool used during development and debugging for printing content to the debugger is:",
    ind: "5",
    optionAs: {
        a: "1. Javascript", 
        b: "2. terminal/bash", 
        c: "3. for loops",
        d: "4. console.log"
    },
    correctA: "d",
},
]
var timerElement = document.querySelector(".timer-count")
var startButton = document.querySelector(".start-btn")
var questionsElements = document.querySelector(".questions");
var timer;
var timerCount;
// funciton to start game on start button click
    function startQuiz() {
        startButton.disabled = true;
        startButton.style.display = "none";
        timerCount = 10;
        startTimer()
  }

  function buildQuiz () {

  }  
  
  function qAllAnswered() { 

    }
// function to record timer
    function startTimer() {       
        // Sets timer
        timer = setInterval(function() {
            timerCount--;
            timerElement.textContent = timerCount;
            // if (timerCount >= 0) {
            //     // Tests if win condition is met
            //     if ( qAllAnswered && timerCount > 0) {
            //     // Clears interval and stops timer
            //     recordScore();
            //     clearInterval(timer);
            //     }
            // }
            // Tests if time has run out
            if (timerCount === 0) {
                // Clears interval
                clearInterval(timer);
                recordScore();
            }
        }, 1000);
      }
      
// eventlistener on starting quiz
    //function starts time
    // Adds question objects randomly to an array


// loop through array to pull questions, options and right answer.
    //function displays answer options in order randomly

// startButton.addEventListener("click", function(event) {
//   var element = event.target;

//   if (element.matches(".box")) {
//     var state = element.getAttribute("data-state");

//     // Use an if statement to conditionally render the number on the card
//     if (state === "hidden") {
//       // If the card is clicked while the state is "hidden", we set .textContent to the number 
//       element.textContent = element.dataset.number;
//       // Using the dataset property, we change the state to visible because the user can now see the number
//       element.dataset.state = "visible";
   
//     } else {
//       // 'Hide' the number by setting .textContent to an empty string
//       element.textContent= "";
//       // Use .setAttribute() method
//       element.setAttribute("data-state", "hidden")
     
//     }  
//   }
// });

// eventlistener function recording userchoice
    // function to check whether choice is correct/matches
    // if conditional to display text if answered correctly or incorrectly

// function to reduce time on timer
    // if conditional to check if answer is incorrect and reduce time

// function to stop time once last question answered
    //

// function to record time once last question ansered and quiz finished
    // text-area input name to log high score against time
    // save name and score against local-storage

startButton.addEventListener("click", startQuiz);



