$(document).ready(function () {
    var qEl = 0;
    var score = 0;
    var timeLeft = 29;
    var timeInterval;

    // when the user clicks on the high score, it takes them to the high score page
    $("#highscores").on("click", viewHighScoreCard);

    // when start button is clicked, then the quiz begins
    $('#startBtn').on("click", startGame);

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
        $("#score-board").text("Current Score: " + score);
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
        if ($(this).val() !== quiz[qEl].answer) {
            score--;
            timeLeft -= 5;
            $("#answer").text("Wrong!");
        }
        else {
            score++;
            timeLeft += 5;
            $("#answer").text("Correct!");
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
        $("#results-score").text("Score: " + score);
        clearInterval(timeInterval);

        if (timeLeft > 0 && score > 0) { //need to make this the high score
            $("#results-message").text("YOU WIN!!!🏆");
            // allow user to submit their name and time
        }
        else {
            $("#results-message").text("GAME OVER");
        }
        // user submits their initials, and score and time are added.
        $("#submitBtn").click(function () {
            $("#usernameForm").submit(viewHighScoreCard(event)); // Submit the form
        });
        submitScore();
    }

    // an array of an object of user information to make the scorecard
    var scoreCard = [];

    // on the results page, the user can submit their initials, which will then be logged with their score and time. The scores will be rearranged from greatest to least.
    function submitScore() {
        // function for the submit button
        $("#submitBtn").click(function(){        
            user = {
                userName: $("#username").val(),
                userScore: score,
                userTime: timeLeft,
            }
            console.log("userName: " + user.userName + " score: " + user.userScore + " time: " + user.userTime);
            console.log(user);

            if (scoreCard.length === 0) {
                scoreCard.push(user);
                console.log(scoreCard);
            }
            else {
                for (var i = 0; i < scoreCard.length; i++) {
                    if ((user.userScore === scoreCard[i.userScore] && userTime > scoreCard[i.userTime]) || userScore > scoreCard[i.userScore]) {
                        scoreCard.splice(i, 0, user);
                        onsole.log("splice: " + scoreCard + " user: " + user);
                    }
                }
            }
            $("#username").submit(viewHighScoreCard(event)); // Submit the form
        });
    }

    // displays the high scores
    function viewHighScoreCard(event) {
        console.log("high score");
        event.preventDefault();

        // clear whatever is currently on the screen
        $("#start").addClass("hide");
        $("#quiz").addClass("hide");
        $("#results").addClass("hide");
        $("#score-card").removeClass("hide");
        clearInterval(timeInterval);

        createScoreCard();

        // when "Play Again" is clicked, the page goes back to the game and it refreshes
        $("#resetBtn").click(function () {
            $("#page").submit(location.reload()).preventDefault(); // Submit the form
        });
        // clears the array of high scores
        $("#clear").click(function () {
            scoreCard = []; // clears the high scores
            viewHighScoreCard();
        });
    }

    function createScoreCard() {
        scoreCard.forEach(function () {
            var userRow = $("#rankings").addClass("style=red").val(user).text(user).attr("type", "li");
            $("#rankings").append(userRow).text(userRow);
        })
    }
})