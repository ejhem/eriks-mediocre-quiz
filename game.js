var question = document.getElementById("question");
var choices = Array.from(document.getElementsByClassName("choice-text"));
var questionsCountText = document.getElementById("questionsCount");
var scoreText = document.getElementById("score");

var currentQuestion = {};
var acceptingAnswer = false;
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
    question:
      "What is the correct format for aligning written content to the center of the page in CSS?",
    choice1: "Text-align:center;",
    choice2: "Font-align:center;",
    choice3: "Text:align-center;",
    choice4: "Font:align-center;",
    answer: 1,
  },
  {
    question:
      "Which built-in method adds one or more elements to the end of an array and returns the new length of the array?",
    choice1: "last()",
    choice2: "put()",
    choice3: "push()",
    choice4: "None of the above.",
    answer: 3,
  },
];

const CORRECT = 10;
const MAX = 5;

var seconds = 60;

function countdown() {
  seconds = seconds - 1;
  if (seconds < 0) {
    window.location = "index.html";
  } else {
    document.getElementById("countdown").innerHTML = seconds;
    window.setTimeout("countdown()", 1000);
  }
}

countdown();

function startGame() {
  questionsCount = 0;
  score = 0;
  availQuestions = [...questions];
  getNewQuestion();
}

function getNewQuestion() {
  if (availQuestions.length === 0 || questionsCount >= MAX) {
    localStorage.setItem("recentScore", score);
    return window.location.assign("final.html");
  }

  questionsCount++;

  questionsCountText.innerText = questionsCount + "/" + MAX;

  var questionIndex = Math.floor(Math.random() * availQuestions.length);
  currentQuestion = availQuestions[questionIndex];
  question.innerText = currentQuestion.question;

  choices.forEach(function (choice) {
    var number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });
  availQuestions.splice(questionIndex, 1);
  acceptingAnswer = true;
}

choices.forEach(function (choice) {
  choice.addEventListener("click", function (event) {
    if (!acceptingAnswer) return;
    acceptingAnswer = false;
    var selectedChoice = event.target;
    var selectedAnswer = selectedChoice.dataset["number"];
    var classToApply = "incorrect";
    if (selectedAnswer == currentQuestion.answer) {
      classToApply = "correct";
    }

    if (classToApply === "correct") {
      scoreUp(CORRECT);
    }

    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(function () {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 1000);
  });
});

function scoreUp() {
  score++;
  scoreText.innerText = score;
}

startGame();
