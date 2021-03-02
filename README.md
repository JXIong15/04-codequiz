# 04 Web APIs: Code Quiz

* Functioning Website link: https://jxiong15.github.io/04-codequiz/
    * Displays an interactive quiz about coding.
* GitHub Repository Link: https://github.com/JXIong15/04-codequiz


## Functionalitty

* Start screen displays how to work the quiz. User can view the high score. User can se ehow much time they have to do the quiz.
* When the start button is clicked, the user begins the quiz.
* The quiz page will show one question with 4 buttons, each button has different answer choices.
* Once the user clicks on a choice, the page will tell them if they were correct or wrong while also displaying the next question.
* Once the timer reaches 0 or the user completes the questions in time, then the results page will show the user their score, time, and a message.
    * User will also be allowed to input their name/initials to display on the high score page.
* Once the user clicks "Submit", they are brought to an updated high scores list.


## Tasks Completed

* Created IDs in the HTML file to reference via JQuery in the JS file.
* Used the "hide" CSS to hide and display certain pages on the window.
* Used a separate JS file to contain the array of quiz questions. In the array are objects for each question, their answer, and the choices.
* Created a timer from one of the activities we did in class.
* Created buttons for each choice and compared the user answer to the correct answer.
* Created an array to store objects for the user's information: userName, userScore, and userTime from the current session.
* Clicking the Submit button will allow the input to be set as a variable. The High Scores page is then displayed, showing the name, score, and time.


## Incomplete Tasks

* Could not figure out how to put multiple values in the array every time the user wants to play again. I couldn't get localStorage figured out.
* Could not make the high scores ranking display in order of best to worst, though that's mainly because I can't put more than the current values on the screen.
* Could not figure out how to clear the table, but that's mainly because I can't retain anything to test it.
* If the user types more than just one word for their name, then the spacing is already preset, so it looks weird. I didn't have time to make this aesthetically pleasing.
    * If the user does not input a name, then the spacing is off because there are only 2 values.
    * I know how to solve these issues, which will take time to learn. However, for simplicity, I left it as is. If I have time, I will revisit it to make containers and/or a table for everything to align nicely.


## Known Bugs

* Timer is off. The timer on the screen is correct, but when grabbing the time for the high scores, that time is wrong.


## Website Images
* Start Page: 
![Start Page](./Assets/start.png)

* Quiz: 
![Quiz Page](./Assets/quiz.png)

* Incorrect Answer on Previous Question: 
![When previous question is incorrect](./Assets/incorrect.png)

* Results Page (Lose):
![Results Page when user loses](./Assets/results-lose.png)

* Results Page (Win):
![Results Page when user wins](./Assets/results-win.png)

* High Scores:
![High Score Page](./Assets/highscores.png)

- - -
© 2021 Jou Xiong, Northwestern Coding Bootcamp