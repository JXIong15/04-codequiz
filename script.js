var pageEl = document.getElementById("page");
var timerEl = document.querySelector("#time");

// when start button is clicked, then the quiz begins
var startButton = document.getElementById("start").addEventListener("click", generateQuiz);

// MIGHT WANT TO MAKE THIS QUIZ ITS OWN JS FILE
// quiz questions
var quiz = [
    {question: 'How would I make all the characters in a string capitalized?',
     choices: [".toLowerCase()", ".toUpperCase", ".toUpperCase()", ".toCapitalized();"],
     answer: ".toUpperCase()"},

    {question: 'Which is NOT a coding language?',
     choices: ['Java', 'JavaScript', 'html', 'Python'],
     answer: 'html'},

    {question: 'What would you use to iterate through an array of a set length?',
     choices: ['while loop', 'iteration loop', 'loop', 'for loop'],
     answer: 'loop'},

    {question: 'How would you move up through the DOM tree?',
     choices: ['.parent()', 'eq()', '.css()', '.branchUp'],
     answer: '.parent()'},

    {question: 'How would you use git to upload your work to GitHub?',
     choices: ['git upload', 'git push', 'git transfer', 'git pass'],
     answer: 'git push'}
];

function countdown() {
    var timeLeft = 30;

    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
        if (timeLeft > 0) {
            timerEl.textContent = timeLeft;
            timeLeft--;
        } else {
            timerEl.textContent = '0';
            // Use `clearInterval()` to stop the timer
            clearInterval(timeInterval);
            // Call the `displayResults()` function to show the score
            displayResults();
        }
    }, 1000);
}

function generateQuiz() {
    countdown();
    var score = 0; // NEED TO DISPLAY THE SCORE

    // creates the choices
    var choiceA = $('<button>');
    var choiceB = document.createElement("button");
    var choiceC = document.createElement("button");
    var choiceD = document.createElement("button");
    
    // interates through the array of the questions in the quiz.
    for (var i = 0; i < quiz.length; i++) {
        // pageEl.innerHTML= `<div> 
        // <h2>this is the question</h2>
        // <button id='answer1' >answer1</button>
        // <button id='answer1' >answer1</button>
        // `;
        
        var quizQuestion = {
            displayQuestion: quiz[i].question,
            // choiceA = quiz[i].choices[0],
            // choiceB = quiz[i[1[1]]],
            // choiceC = quiz[i[1[2]]],
            // choiceD = quiz[i[1[3]]],
            score,
        }

        pageEl.innerHTML = quizQuestion;

        console.log(quizQuestion);

        // var userChoice = pick.addEventListener("click", generateQuiz);
        // if (userChoice == quiz[2]) {
        //     score++;
        // }
        // else {
        //     score--;
        // }
    }
    
    displayResults();
}

function displayResults() {
    
    // if (timerEl > 0) {
    //     page.textContent = "YOU WIN!!!🏆";
    //     // allow user to submit their name and time
    // }
    // else {
    //     page.textContext = "GAME OVER";
    // }
    // var resetButton = document.createElement("button").addEventListener("click", resetGame);
}