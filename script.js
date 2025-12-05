//your JS code here. If required.
let player1 = "";
let player2 = "";
let currentPlayer = "";
let currentSymbol = "X";
let gameActive = true;

const submitBtn = document.getElementById("submit");
const messageBox = document.querySelector(".message");

submitBtn.addEventListener("click", () => {
    player1 = document.getElementById("player-1").value.trim();
    player2 = document.getElementById("player-2").value.trim();

    if (player1 === "" || player2 === "") {
        alert("Please enter both player names.");
        return;
    }

    document.getElementById("player-input-section").style.display = "none";
    document.getElementById("game-section").style.display = "block";

    currentPlayer = player1;
    messageBox.textContent = `${currentPlayer}, you're up`;
});


const cells = document.querySelectorAll(".cell");

// Winning combinations
const winningCombos = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
];

cells.forEach(cell => {
    cell.addEventListener("click", () => {
        if (!gameActive) return;

        if (cell.textContent !== "") return;

        cell.textContent = currentSymbol;

        if (checkWinner()) {
            messageBox.textContent = `${currentPlayer}, congratulations you won!`;
            gameActive = false;
            return;
        }

        switchPlayer();
    });
});

function switchPlayer() {
    if (currentPlayer === player1) {
        currentPlayer = player2;
        currentSymbol = "O";
    } else {
        currentPlayer = player1;
        currentSymbol = "X";
    }

    messageBox.textContent = `${currentPlayer}, you're up`;
}

function checkWinner() {
    return winningCombos.some(combo => {
        const [a, b, c] = combo;

        return (
            document.getElementById(a).textContent === currentSymbol &&
            document.getElementById(b).textContent === currentSymbol &&
            document.getElementById(c).textContent === currentSymbol
        );
    });
}
