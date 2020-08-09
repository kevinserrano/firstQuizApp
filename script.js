var generateBtn = document.querySelector(".btn-primary");
generateBtn.addEventListener("click", strtQuiz);



//make vars for questions, answers, correct, wrong, final score
//start quiz
//screen change and 1st question with answers is generated
//allow user to pick answer
//after submit is pushed next question comes up
// when quiz is over promps the users score and a place for them to enter initials




var qzQuestion = [{
    question: " What do 'if' and 'else' statements always evaluate to?",
    questionOptions: ["always false", "always true", "true or false depending on statement", "undefined"],
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

var userAns;
var correctAns;
var incorrectAns;
var finalScore;
var replaceItem = document.querySelector("#para");


function strtQuiz() {


    //1st question needs to populate with possible answers

    document.getElementById("para").innerHTML = qzQuestion[0].question;
    var btn = document.getElementById("clicker");
    var optionText = [qzQuestion[0].questionOptions[0], qzQuestion[0].questionOptions[1], qzQuestion[0].questionOptions[2], qzQuestion[0].questionOptions[3]]

    for (var i = 0; i < 4; i++) {
        var option = document.createElement("button");
        option.className = "ansButtons";
        option.innerHTML = optionText[i];
        document.body.appendChild(option);

    }

}