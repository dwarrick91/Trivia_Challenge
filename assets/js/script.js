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
var questionText = document.querySelector("#questiontext")
var points = document.querySelector("#points")
console.log(answer1);
console.log(answer2);
console.log(answer3);
console.log(answer4);



var correctAnswers = 0


var questionArray = [
    {
        questions: "What was the name of the Philadelphia Eagles before they were the Eagles?",
        answers: ["Philadelphia Liberty Bells", "Frankford Yellowjackets", "Frankford Bald Eagles", "Philadelphia Kites"],
        correct: "Frankford Yellowjackets",
    },


    {
        questions: "Who caught the Eagles first td catch?",
        answers: ["Swede Hanson", "Tommy Mcdonald", "Terrell Owens", "Red Kirkman"],
        correct: "Swede Hanson",
    },
    {
        questions: "In what year did the Eagles win their first NFL Championship?",
        answers: ["1960", "1980", "2018", "1948"],
        correct: "1948",
    },
    {
        questions: "Who scored the only Touchdown in the Eagles first NFL Championship win?",
        answers: ["Lex Thompson", "Tommy Thompson", "Pete Pihos", "Steve Van Buren"],
        correct: "Steve Van Buren",
    },
]



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
    questionText.setAttribute("style", "display: flex")
    quiz.setAttribute("style", "display: flex")
    result.setAttribute("style", "display: flex", "padding: 2rem 0 0")
    playButton.setAttribute("style", "display: none")
    welcome.children[0].textContent = questionArray[0].questions
    answer1.textContent = questionArray[0].answers[0];
    answer1.setAttribute("class", questionArray[0].answers[0])
    answer2.textContent = questionArray[0].answers[1];
    answer2.setAttribute("class", questionArray[0].answers[1])
    answer3.textContent = questionArray[0].answers[2];
    answer3.setAttribute("class", questionArray[0].answers[2])
    answer4.textContent = questionArray[0].answers[3];
    answer4.setAttribute("class", questionArray[0].answers[3])

    console.log(answer1);
    console.log(answer2);
    console.log(answer3);
    console.log(answer4);
    quiz.addEventListener("click", firstQuestion);








    function firstQuestion(event) {
        // event.stopPropagation()
        var userChoice = event.target.textContent;
        // console.log(userChoice.getAttribute("class"));


        if (userChoice === questionArray[0].correct) {

            result.textContent = " the previous answer was CORRECT!";
            correctAnswers++
            points.innerHTML = "You got " + correctAnswers + " questions correct!!"
            // quiz.addEventListener("click", secondQuestion);
        } else {

            result.textContent = "WRONG! you lost 45 seconds";

            // quiz.addEventListener("click", secondQuestion);

            timeLeft -= 45
        }
        welcome.children[0].textContent = questionArray[1].questions
        answer1.textContent = questionArray[1].answers[0];
        answer1.setAttribute("class", questionArray[1].answers[0])
        answer2.textContent = questionArray[1].answers[1];
        answer2.setAttribute("class", questionArray[1].answers[1])
        answer3.textContent = questionArray[1].answers[2];
        answer3.setAttribute("class", questionArray[1].answers[2])
        answer4.textContent = questionArray[1].answers[3];
        answer4.setAttribute("class", questionArray[1].answers[3])
        quiz.addEventListener("click", secondQuestion);

    }
    function secondQuestion(event) {
        quiz.addEventListener("click", thirdQuestion);


        var userChoice = event.target.textContent;
        if (userChoice === questionArray[1].correct) {

            result.textContent = " the previous answer was CORRECT!";
            correctAnswers++
            points.innerHTML = "You got " + correctAnswers + " questions correct!!"


        } else {

            result.textContent = "WRONG! you lost 45 seconds";

            timeLeft -= 45


        }
        welcome.children[0].textContent = questionArray[2].questions;
        answer1.textContent = questionArray[2].answers[0];
        answer1.setAttribute("class", questionArray[2].answers[0])
        answer2.textContent = questionArray[2].answers[1];
        answer2.setAttribute("class", questionArray[2].answers[1])
        answer3.textContent = questionArray[2].answers[2];
        answer3.setAttribute("class", questionArray[2].answers[2])
        answer4.textContent = questionArray[2].answers[3];
        answer4.setAttribute("class", questionArray[2].answers[3])

    }
    function thirdQuestion(event) {
        event.stopPropagation()
        var userChoice = event.target.textContent;


        if (userChoice === questionArray[2].correct) {

            result.textContent = " the previous answer was CORRECT!";
            correctAnswers++
            points.innerHTML = "You got " + correctAnswers + " questions correct!!"

        } else {

            timeLeft -= 45


        }
        welcome.children[0].textContent = questionArray[3].questions
        answer1.textContent = questionArray[3].answers[0];
        answer1.setAttribute("class", questionArray[3].answers[0])
        answer2.textContent = questionArray[3].answers[1];
        answer2.setAttribute("class", questionArray[3].answers[1])
        answer3.textContent = questionArray[3].answers[2];
        answer3.setAttribute("class", questionArray[3].answers[2])
        answer4.textContent = questionArray[3].answers[3];
        answer4.setAttribute("class", questionArray[3].answers[3])
        quiz.addEventListener("click", fourthQuestion);
    }

    function fourthQuestion(event) {

        var userChoice = event.target.textContent;


        if (userChoice == questionArray[3].correct) {
            welcome.children[0].textContent = questionArray[3].questions
            result.textContent = " the previous answer was CORRECT!";
            correctAnswers++
            points.innerHTML = "You got " + correctAnswers + " questions correct!!"

            endGame()
        } else {
            welcome.children[0].textContent = questionArray[3].questions;
            result.textContent = "WRONG! you lost 45 seconds";
            timeLeft -= 45

            endGame()
            console.log(answer1);
        }

    }
    function endGame() {

        welcome.children[0].textContent = "GAME OVER"
        clearInterval(timeDecrease)
        quiz.setAttribute("style", "display: none")
        score.setAttribute("style", "display: flex; flex-direction: column; flex-wrap: wrap; align-content: center")

        var saveScoreButton = document.querySelector("#save")
        renderLastRegistered();

        function displayMessage(type, message) {
            score.textContent = message;
            score.setAttribute("class", type);
        }

        function renderLastRegistered() {
            var saveInitals = localStorage.getItem("initials");
            var correctAnswers = localStorage.getItem("pointsScored")

            if (!saveInitals) {
                return;
            }

            
        }
        saveScoreButton.addEventListener("click", function (event) {
            event.preventDefault();

            var saveInitals = document.querySelector("#initials").value;
             
            if (saveInitals === "") {
                displayMessage("error", " Please put your initials.");
            } else {
                displayMessage("success", "Registered successfully");

                localStorage.setItem("initials", saveInitals);
                localStorage.setItem("pointsScored", correctAnswers);
                renderLastRegistered();
            }
        })



    }
}