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









function countdown() {
    var timeLeft = 300;
    var timeInterval = setInterval(function() {
        
    }1000)
    
}