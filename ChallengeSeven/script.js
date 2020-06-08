/* CODING CHALLENGE 

--- Let's  build a fun quiz fame in the console!---

1. Build a function constructor called Question to describe  a quiestion. A question should include:
a) question itself
b) the answers from which the player can choose the correct one ( choose an adequate data structure here, 
    array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answer (each question
    should hace a number) (Hint: write a method for the Question object for this task).
    
5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of
the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot not (Hint: write another method for this)

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your
code is private and doesn't interfere with the other programmers code (HINT: we learned a special technique to do exactly that).

--- Expert level ---

8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for 
    this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit'
insted of the answer. In this case, DON't call the function from task 8.

10. Track the user's score to make the game more fun! So each tome an answer is correct, add 1 point to the score (Hint: I'm 
going to use the power of closures for this, but you do't have to, jusr do ths with the tools you feel more confortable at this project)

11. Display the score in the console. Use yer another method for this.

*/

(() => {
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

    Question.prototype.displayQuestion = function() {
        console.log(this.question);
        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ':' + this.answers[i]);
        }
    }

    Question.prototype.checkAnswer = function(ans, callback) {
        var sc;
        if (ans === this.correct) {
            console.log('Correct answer!');
            sc = callback(true);
        } else {
            console.log('Wrong answer try again!');
            sc = callback(false);
        }
        this.displayScore(sc);
    }

    Question.prototype.displayScore = function(score) {
        console.log(`Your current score is ${score}`);

    }
    var q1 = new Question('What is the name of this courses\'s teacher', ['John', 'Mike', 'Jonas'], 2);
    var q2 = new Question('Javascript the coolest programming language in the world', ['Yes', 'No'], 0);
    var q3 = new Question('What does best describe coding', ['Boring', 'Hard', 'Fun', 'Tedious'], 2);

    var question = [q1, q2, q3];

    function score() {
        var sc = 0;
        return function(correct) {
            if (correct) {
                sc++;
            }
            return sc;
        }
    }
    var keepScore = score();

    function nextQuestion() {
        var n = Math.floor(Math.random() * question.length);
        question[n].displayQuestion();
        var answer = prompt('Please select the correct answer');
        if (answer !== 'exit') {
            question[n].checkAnswer(parseInt(answer), keepScore);
            nextQuestion();
        }
    }
    nextQuestion();
})();