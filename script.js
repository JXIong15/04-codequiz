var pageEl = document.querySelector("page");
var timerEl = document.querySelector("time");

// when start button is clicked, then the quiz begins
var startButton = document.getElementById("start").addEventListener("click", generateQuiz);

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
    
    // MAKE THE START PAGE DISAPPEAR

    // var score = 0; // NEED TO DISPLAY THE SCORE
    // pageEl.appendChild(score);

    // // creates the choices
    // var choiceA = document.createElement("button");
    // var choiceB = document.createElement("button");
    // var choiceC = document.createElement("button");
    // var choiceD = document.createElement("button");

    // pageEl.appendChild(choiceA);
    // pageEl.appendChild(choiceB);
    // pageEl.appendChild(choiceC);
    // pageEl.appendChild(choiceD);

    // // interates through the array of the questions in the quiz.
    // for (var i = 0; i < quiz.length; i++) {
    //     pageEl.textContent = quiz[i];
        
    //     question = quiz[i[0]];

    //     choiceA.innerHTML = quiz[i[1[0]]];
    //     choiceB.innerHTML = quiz[i[1[1]]];
    //     choiceC.innerHTML = quiz[i[1[2]]];
    //     choiceD.innerHTML = quiz[i[1[3]]];

    //     var userChoice = pick.addEventListener("click", generateQuiz);
    //     if (userChoice == quiz[2]) {
    //         score++;
    //     }
    //     else {
    //         score--;
    //     }
    // }
    // countdown();
    // displayResults();
}

function displayResults() {
    if (timerEl > 0) {
        page.textContent = "YOU WIN!!!🏆";
        // allow user to submit their name and time
    }
    else {
        page.textContext = "GAME OVER";
    }
    var resetButton = document.createElement("button").addEventListener("click", resetGame);
}