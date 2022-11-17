var username = document.getElementById('username');
var saveScoreButton = document.getElementById('saveScoreButton');
var finalScore = document.getElementById('finalScore');
var recentScore=localStorage.getItem('recentScore');

var highScore = JSON.parse(localStorage.getItem('highScore')) || [];


console.log(highScore);


finalScore.innerText=recentScore;

saveHighScore = (e) => {
    e.preventDefault();

    const score = {
        score: recentScore,
        name: username.value,
    };
    highScore.push(score);
    highScore.sort((a, b) => b.score - a.score);
    highScore.splice(5);

    localStorage.setItem('highScore', JSON.stringify(highScore));
};