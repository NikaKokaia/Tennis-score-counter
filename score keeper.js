const p1 = {
    score: 0,
    button: document.querySelector('#p1button'),
    display: document.querySelector('#p1display')
}


const p2 = {
    score: 0,
    button: document.querySelector('#p2button'),
    display: document.querySelector('#p2display')
}

const winningScoreSelect = document.querySelector('#playTo')

const resetButton = document.querySelector('#resetButton');

let winningScore = 3;

let isGameOver = false;

function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}

p1.button.addEventListener('click', function () {
    updateScores(p1, p2)
    // if (!isGameOver) {
    //     p1Score += 1;
    //     if (p1Score === winningScore) {
    //         isGameOver = true;
    //         p1Display.classList.add('has-text-success');
    //         p2Display.classList.add('has-text-danger');
    //         p1Button.disabled = true;
    //         p2Button.disabled = true;
    //     }
    //     p1Display.textContent = p1Score;
    // }
})

p2.button.addEventListener('click', function () {
    updateScores(p2, p1)
    // if (!isGameOver) {
    //     p2Score += 1;
    //     if (p2Score === winningScore) {
    //         isGameOver = true;
    //         p2Display.classList.add('has-text-success');
    //         p1Display.classList.add('has-text-danger');
    //         p1Button.disabled = true;
    //         p2Button.disabled = true;

    //     }
    //     p2Display.textContent = p2Score;
    // }
})


winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})

resetButton.addEventListener('click', reset)

function reset() {
    isGameOver = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }
}
