$(document).ready(function () {
    var qEl = 0;
    var score = 0;
    var timeLeft = 30;
    var timeInterval;

    // when the user clicks on the high score, it takes them to the high score page
    $("highscores").on("click",highScoreCard)

    // when start button is clicked, then the quiz begins
    $('#startBtn').on("click", startGame);

    // MIGHT WANT TO MAKE THIS QUIZ ITS OWN JS FILE
    // quiz questions
    var quiz = [
        {
            question: 'How would I make all the characters in a string capitalized?',
            choices: [".toLowerCase()", ".toUpperCase", ".toUpperCase()", ".toCapitalized();"],
            answer: ".toUpperCase()"
        },

        {
            question: 'Which is NOT a coding language?',
            choices: ['Java', 'JavaScript', 'html', 'Python'],
            answer: 'html'
        },

        {
            question: 'What would you use to iterate through an array of a set length?',
            choices: ['while loop', 'iteration loop', 'loop', 'for loop'],
            answer: 'for loop'
        },

        {
            question: 'How would you move up through the DOM tree?',
            choices: ['.parent()', 'eq()', '.css()', '.branchUp'],
            answer: '.parent()'
        },

        {
            question: 'How would you use git to upload your work to GitHub?',
            choices: ['git upload', 'git push', 'git transfer', 'git pass'],
            answer: 'git push'
        }
    ];

    // timer
    function countdown() {
        var timerEl = document.getElementById('time');
        // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
        timeInterval = setInterval(function () {
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

    // begins the game by starting the countdown
    function startGame() {
        countdown();
        $("#start").addClass("hide");
        $("#quiz").removeClass("hide");
        generateQuizCard();
    }

    // displays the individual questions and choices for each question on the screen.
    function generateQuizCard() {
        $("#score-board").text(score);
        var currentQuestion = quiz[qEl];
        $("#quiz-question").text(currentQuestion.question);

        // creates the individual buttons in the choices array to display to the HTML.
        currentQuestion.choices.forEach(function (choice) {
            var button = $("<button>").addClass("btn btn-danger").val(choice).text(choice).attr("type", "button");
            button.on("click", evaluateAnswer);
            $("#choices").append(button);
        })
    }

    // compares the user choice to the correct answer.
    function evaluateAnswer() {
        $("#answer").html("");
        
        if ($(this).val() !== quiz[qEl].answer) {
            score--;
            timeLeft-=5;
            $("#answer").append("Wrong!");
        }
        else {
            score++;
            timeLeft+=5;
            $("#answer").append("Correct!");
        }

        qEl++;
        if (quiz[qEl]) {
            $("#choices").html("");
            generateQuizCard();
        }
        else {
            displayResults();
        }
    }

    // end result. Either the user beats the timer or scores more than the high score. User can view high scores.
    function displayResults() {
        $("#quiz").addClass("hide");
        $("#results").removeClass("hide");
        $("#rScore").text(score);
        clearInterval(timeInterval);
        
        if (timeLeft > 0 && score > 0) { //need to make this the high score
            $("#results-message").text("YOU WIN!!!🏆");
            // allow user to submit their name and time
        }
        else {
            $("#results-message").text("GAME OVER");
        }
        // creates a reset button for the user to play again if desired
        var resetButton = $("<button>").addClass("btn btn-danger").text("Play Again?").attr("type", "button");
        // resetButton.on("click", document.getElementById('configform').reset());
        $("#resetBtn").append(resetButton);

        // document.getElementById("page").reset();
    }

    // displays the high scores
    function highScoreCard() {
        $("#start").addClass("hide");
        $("#quiz").addClass("hide");
        $("#results").addClass("hide");
    }
})
