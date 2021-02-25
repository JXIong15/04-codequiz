// when start button is clicked, then the quiz begins

// Initialized empty array to store the choices for each question
var choices = [];

// quiz questions
var quiz =[
    ['How would I make all the characters in a string capitalized?', 
        choices[".toLowerCase()", ".toUpperCase", ".toUpperCase()", ".toCapitalized();"],
        choices[2]]
    
];

function countdown() {
    var timeLeft = 30;
  
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
      if (timeLeft > 0) {
        timerEl.textContent = timeLeft;
        timeLeft--;
      } else {
        // Once `timeLeft` gets to 0, set `timerEl` to an empty string
        timerEl.textContent = '0';
        // Use `clearInterval()` to stop the timer
        clearInterval(timeInterval);
        // Call the `displayResults()` function to show the score
        displayResults();
      }
    }, 1000);
  }


var score = 0;
// interates through the array of the questions in the quiz.
for (var i = 0; i < quiz.length; i++) {
    in the html selector, select the question to display quiz[i[0]]
    in the html selector, select the choices to display quiz[i[2]]
        html selector at li 1 is choices [0]
        html selector at li 2 is choices [1]
        html selector at li 3 is choices [2]
        html selector at li 4 is choices [3]
    var userChoice = whatever the user selects
    if user choice == quiz[2] {
        score++;
    }
    else {
        score --;
    }
    refresh page to prepare for the next question
}
displayResults();
// IF TIMELEFT==0 OR I'M DONE WITH THE ARRAY OF QUESTIONS, RESULTS

function displayResults() {

}