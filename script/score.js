let sessionValue = sessionStorage.getItem("score");
let savedScore = Number(sessionValue);

function addScore(number) {
    savedScore += number;
    document.querySelector('.score').innerHTML = savedScore;
    sessionStorage.setItem("score", savedScore);
}

function addBonus(gif, score) {
    if (gif === false) {
        addScore(score);
    }
}

addScore(0);