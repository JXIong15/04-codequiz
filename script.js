// when start button is clicked, then the quiz begins
var startButton = document.querySelector(".start");
button.addEventListener("click", generateQuiz);

// MIGHT WANT TO MAKE THIS QUIZ ITS OWN JS FILE
// Initialized empty array to store the choices for each question
var choices = [];
// quiz questions
var quiz = [
    ['How would I make all the characters in a string capitalized?',
        choices[".toLowerCase()", ".toUpperCase", ".toUpperCase()", ".toCapitalized();"],
        choices[2]],
    ['Which is NOT a coding language?',
        choices['Java', 'JavaScript', 'html', 'Python'],
        choices[3]],
    ['What would you use to iterate through an array of a set length?',
        choices['while loop', 'iteration loop', 'loop', 'for loop'],
        choices[3]],
    ['How would you move up through the DOM tree?',
        choices['.parent()', 'eq()', '.css()', '.branchUp'],
        choices[0]],
    ['How would you use git to upload your work to GitHub?',
        choices['git upload', 'git push', 'git transfer', 'git pass'],
        choices[1]]
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
    var score = 0;
    var question = document.getElementById("question");
    var choiceA = document.getElementById("choiceA");
    var choiceB = document.getElementById("choiceB");
    var choiceC = document.getElementById("choiceC");
    var choiceD = document.getElementById("choiceD");

    // interates through the array of the questions in the quiz.
    for (var i = 0; i < quiz.length; i++) {
        question = quiz[i[0]];

        choiceA = choices[0];
        choiceB = choices[1];
        choiceC = choices[2];
        choiceD = choices[3];

        var userChoice = whatever the user selects
        if userChoice == quiz[2] {
            score++;
        }
        else {
            score--;
        }
        refresh page to prepare for the next question
    }
    countdown();
    displayResults();
    // IF TIMELEFT==0 OR I'M DONE WITH THE ARRAY OF QUESTIONS, RESULTS
}

function displayResults() {

}