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

var playButton = document.querySelector("#play");
var clock = document.querySelector("#timer");
var welcome = document.querySelector("#welcome")
var quiz = document.querySelector("#quiz")
var answer1 = document.querySelector("#answer-0")
var answer2 = document.querySelector("#answer-1")
var answer3 = document.querySelector("#answer-2")
var answer4 = document.querySelector("#answer-3")
var result = document.querySelector("#result")
var list = document.querySelector("#list")
var score = document.querySelector("#score")


console.log(answer1);
console.log(answer2);
console.log(answer3);
console.log(answer4);






var questionArray = [
    {
        questions: "This is the first question?",
        answers: ["answer1", "answer2", "answer3", "answer4"],
        correct: "answer1",
    },


    {
        questions: "This is the second question?",
        answers: ["answer1", "answer2", "answer3", "answer4"],
        correct: "This is the first choice",
    },
    {
        questions: "This is the third question?",
        answers: ["answer1", "answer2", "answer3", "answer4"],
        correct: "answer1",
    },
    {
        questions: "This is the fourth question?",
        answers: ["answer1", "answer2", "answer3", "answer4"],
        correct: "answer1",
    },
]
var userChoice = []
console.log(questionArray[0]);
console.log(questionArray[0].answers[0]);
// console.log(userChoice);

var timeLeft = 300;


// function setTimerText() {
// clock.textContent = 300;
// }
playButton.addEventListener("click", startGame);
function startGame() {

    var timeDecrease = setInterval(function (countdown) {
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

    

        welcome.children[1].setAttribute("style", "display: none")
        quiz.setAttribute("style", "display: flex")
        playButton.setAttribute("style", "display: none")
        welcome.children[0].textContent = questionArray[0].questions
        answer1.textContent = questionArray[0].answers[0];
        answer2.textContent = questionArray[0].answers[1];
        answer3.textContent = questionArray[0].answers[2];
        answer4.textContent = questionArray[0].answers[3];

        console.log(answer1);
        console.log(answer2);
        console.log(answer3);
        console.log(answer4);






        // answer1.addEventListener("click", secondQuestion);
        // answer2.addEventListener("click", secondQuestion);
        // answer3.addEventListener("click", secondQuestion);
        // answer4.addEventListener("click", secondQuestion);

        console.log(answer1);
        console.log(answer2);


        quiz.addEventListener("click", function (event) {
        if (userChoice === questionArray[0].correct) {
            welcome.children[0].textContent = questionArray[1].questions
            answer1.textContent = questionArray[1].answers[0];
            answer2.textContent = questionArray[1].answers[1];
            answer3.textContent = questionArray[1].answers[2];
            answer4.textContent = questionArray[1].answers[3];
            result.textContent = " the previous answer was CORRECT!";

            // console.log(userChoice);

            console.log(onclick);
        } else {
            welcome.children[0].textContent = questionArray[1].questions;
            result.textContent = "WRONG! you lost 45 seconds";
            answer1.textContent = questionArray[1].answers[0];
            answer2.textContent = questionArray[1].answers[1];
            answer3.textContent = questionArray[1].answers[2];
            answer4.textContent = questionArray[1].answers[3];
            // clearInterval(timeDecrease)

            timeLeft -= 45
        }
    })
        ;

// console.log(userChoice);






quiz.addEventListener("click", function (event) {

    if (userChoice == questionArray[1].correct) {
        welcome.children[0].textContent = questionArray[2].questions
        answer1.textContent = questionArray[2].answers[0];
        answer2.textContent = questionArray[2].answers[1];
        answer3.textContent = questionArray[2].answers[2];
        answer4.textContent = questionArray[2].answers[3];
        result.textContent = " the previous answer was CORRECT!";


        console.log(onclick);
    } else {
        welcome.children[0].textContent = questionArray[2].questions;
        result.textContent = "WRONG! you lost 45 seconds";
        answer1.textContent = questionArray[2].answers[0];
        answer2.textContent = questionArray[2].answers[1];
        answer3.textContent = questionArray[2].answers[2];
        answer4.textContent = questionArray[2].answers[3];
        timeLeft -= 45


        console.log(answer1);
    }
});
// console.log(userChoice);







quiz.addEventListener("click", function (event) {
   event.stopPropagation()
    if (userChoice == questionArray[2].correct) {
        welcome.children[0].textContent = questionArray[3].questions
        answer1.textContent = questionArray[3].answers[0];
        answer2.textContent = questionArray[3].answers[1];
        answer3.textContent = questionArray[3].answers[2];
        answer4.textContent = questionArray[3].answers[3];
        result.textContent = " the previous answer was CORRECT!";

        // console.log(userChoice);

        console.log(onclick);
    } else {
        welcome.children[0].textContent = questionArray[3].questions;
        result.textContent = "WRONG! you lost 45 seconds";
        answer1.textContent = questionArray[3].answers[0];
        answer2.textContent = questionArray[3].answers[1];
        answer3.textContent = questionArray[3].answers[2];
        answer4.textContent = questionArray[3].answers[3];
        timeLeft -= 45

        console.log(answer1);
    }
})
// console.log(userChoice);



function endGame() {
    quiz.setAttribute("style", "display: none")
    score.setAttribute("style", "display: flex")
}
}