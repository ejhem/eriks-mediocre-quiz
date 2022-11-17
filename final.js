var name = document.getElementById('yourname');
var finalScore = document.getElementById('finalScore');
var recentScore=localStorage.getItem('recentScore');

finalScore.innerText=recentScore;

function saveScore(e) {
    e.preventDefault();
}