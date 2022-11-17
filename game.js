const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));

var currentQuestion = {};
var acceptingAnswer = true;
var score = 0;
var questionsCount = 0;
var availQuestions = [];
var questions = [
    {
        question: "What does HTML stand for?",
        choice1: "Hyper Tag Markup Language",
        choice2: "HyperText Markup Language",
        choice3: "Hyperlinks Text Mark Language",
        choice4: "Hyperlinking Text Marking Language",
        answer: 2,
    },
    {
        question: "What does CSS stand for?",
        choice1: "Computing Style Sheet",
        choice2: "Creative Style System",
        choice3: "Cascading Style Sheet",
        choice4: "Creative Styling Sheet",
        answer: 3,
    },
    {
        question: "Where should a CSS file be referenced in a HTML file",
        choice1: "Before any HTML code",
        choice2: "After all HTML code",
        choice3: "Inside the head section",
        choice4: "Inside the body section",
        answer: 1,
    },
    {
        question: "What is the correct format for aligning written content to the center of the page in CSS?",
        choice1: "Text-align:center;",
        choice2: "Font-align:center;",
        choice3: "Text:align-center;",
        choice4: "Font:align-center;",
        answer: 1,
    },
    {
        question: "Which built-in method adds one or more elements to the end of an array and returns the new length of the array?",
        choice1: "last()",
        choice2: "put()",
        choice3: "push()",
        choice4: "None of the above.",
        answer: 3,
    },
];

const CORRECT = 10;
const MAX = 5;

function startGame(){
    questionsCount = 0;
    score = 0;
    availQuestions = [... questions];
    console.log(availQuestions);
    getNewQuestion();
}

function getNewQuestion(){
    questionsCount++;
    var questionIndex = Math.floor(Math.random()*availQuestions.length);
    currentQuestion = availQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(function (choice) {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });
}

startGame();