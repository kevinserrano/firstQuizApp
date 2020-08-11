//grab button on html and add click listener to start the quiz function
var generateBtn = document.querySelector(".btn-primary");
generateBtn.addEventListener("click", strtQuiz);









//make vars for questions, answers, correct, wrong, final score
var qzQuestion = [{
    question: " What do 'if' and 'else' statements always evaluate to?",
    questionOptions: ["A) always false", "B) always true", "C) true or false depending on statement", "D) undefined"],
    answer: 2,
}, {
    question: " What are the 3 building blocks of the internet?",
    questionOptions: ["legos, logs, popsicle sticks", "HTML, CSS, JavaScript", "ice, wind, fire", "coffee, energy drinks, mountain dew"],
    answer: 1,
}, {
    question: " What type of language is JavaScript?",
    questionOptions: ["spanish", "frustrating", "pig-latin", "dynamic"],
    answer: 3,
}, {
    question: " What does var do?",
    questionOptions: ["declares a variable", "declares a war", "declares and eclair", "declares mistakes were made"],
    answer: 0,
}];
var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("container");
var questionNum = 0;
var finalScore = 0;
var replaceItem = document.querySelector("#para");
var secondsOnTimer = 3;
// function call to 1st question with answer
function strtQuiz() {
    // TODO : add timer



    function setTime() {
        var timerInterval = setInterval(function () {
            secondsOnTimer--;
            timeEl.textContent = secondsOnTimer + " seconds remaining";

            if (secondsOnTimer === 0) {
                clearInterval(timerInterval);
                provideInfo();
            }

        }, 1000);
    }

    function provideInfo() {
        timeEl.textContent = " ";

        var finalPopUp = document.createElement("<form>");

        finalPopUp.setAttribute("<form>");

        mainEl.appendChild(finalPopUp);

    }
    setTime()

    // grab paragraph div and set to question 1
    document.getElementById("para").innerHTML = qzQuestion[0].question;
    //grabbed start button to hide after click
    var btn = document.getElementById("clicker");
    btn.parentNode.removeChild(btn);
    // array of question options
    var optionText = [qzQuestion[0].questionOptions[0], qzQuestion[0].questionOptions[1], qzQuestion[0].questionOptions[2], qzQuestion[0].questionOptions[3]]
    //loop creating answer buttons
    for (var i = 0; i < 4; i++) {
        var option = document.createElement("button");
        option.className = "btn btn-primary ansButtons";
        option.id = "choice" + i;
        option.value = i;
        option.innerHTML = optionText[i];
        document.body.appendChild(option);

    }
    // adding event listeners to new buttons
    document.getElementById("choice0").addEventListener("click", secondPart);
    document.getElementById("choice1").addEventListener("click", secondPart);
    document.getElementById("choice2").addEventListener("click", secondPart);
    document.getElementById("choice3").addEventListener("click", secondPart);


}
// calling next function to update and eval questions
function secondPart() {
    //TODO: find if this is the final question

    if (event.target.value == qzQuestion[questionNum].answer) {
        finalScore++;
        console.log("correct");
    } else {
        //TODO : decrease timer
    }
    // when function is done this increments the question number
    questionNum++;

    updateQuestions();
}
// this updates all text based on question number
function updateQuestions() {
    document.getElementById("para").innerHTML = qzQuestion[questionNum].question;

    document.getElementById("choice0").innerHTML = qzQuestion[questionNum].questionOptions[0];
    document.getElementById("choice1").innerHTML = qzQuestion[questionNum].questionOptions[1];
    document.getElementById("choice2").innerHTML = qzQuestion[questionNum].questionOptions[2];
    document.getElementById("choice3").innerHTML = qzQuestion[questionNum].questionOptions[3];

}
// when quiz is over promps the users score and a place for them to enter initials
// TODO: pop up form to check score and add initials
var finalPopUp = document.createElement("<form>");