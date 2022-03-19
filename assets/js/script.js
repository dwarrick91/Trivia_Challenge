/*
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts 
THEN i need to hide #welcome 
THEN I need to unhide #quiz
THEN I would need to load #questiontext
THEN I would want to load answer buttons



WHEN I answer a question
If answer is incorrect 
THEN time is subtracted from the clock
THEN provide user if they were correct or not

If we have more questions
THEN I am presented with another question
THEN I would load the next question and repeat lines 7-17
If answered last question or timer reaches zero
THEN END GAME


WHEN the game is over
Then I need to Stop Timer
THEN I need to hide #quiz 
THEN I need to unhide #score
THEN I can save my initials and my score

WHEN user clicks save score button
THEN we need to store initials and score in local storage



*/

var questionsArray = [
    {
        question: "question1",
        answers: ["answer1", "answer2", "answer3"],
        correct: "answer1"
    },
    {
        question: "question2",
        answers: ["answer1", "answer2", "answer3"],
        correct: "answer1"
    }

]

var playButton = document.querySelector("#play");
var clock = document.querySelector("#timer");
var welcome = document.querySelector("#welcome")
var quiz = document.querySelector("#quiz")
var answer1 = document.querySelector("#answer-0")
var answer2 = document.querySelector("#answer-1")
var answer3 = document.querySelector("#answer-2")
var answer4 = document.querySelector("#answer-3")

// function setTimerText() {
// clock.textContent = 300;
// }
playButton.addEventListener("click", startGame); 
    function startGame() {
    
    welcome.children[1].setAttribute("style", "display: none")
    quiz.setAttribute("style", "display: flex")
    playButton.setAttribute("style", "display: none")
    answer1.textContent = "This is the first choice"
    answer2.textContent = "This is the second choice"
    answer3.textContent = "This is the third choice"
    answer4.textContent = "This is the fourth choice"
    var timeLeft = 300;

    var timeDecrease = setInterval(function() {
      if (timeLeft > 0) {
          clock.textContent = timeLeft + " seconds";
          timeLeft--;
      } else if (timeLeft === 1) {
          clock.textContent = timeLeft = "second";
          timeLeft--;
      } else {
          clock.textContent = "GAME OVER";
          clearInterval(timeDecrease);
          endGame();
      }
           
    }, 1000);

}


// } {
//     function countdown() {
//         var timeLeft = 300;
//         var timeInterval = setInterval(function() {
//             timeLeft--;
//             clock.textContent = timeLeft
    
//             if()
            
//         }1000))
// clock--;
