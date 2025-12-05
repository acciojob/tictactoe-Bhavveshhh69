let player1 = "";
let player2 = "";
let currentPlayer = "";
let symbol = "x";
let gameActive = true;

// Handle Submit
document.getElementById("submit").addEventListener("click", () => {
    player1 = document.getElementById("player-1").value.trim();
    player2 = document.getElementById("player-2").value.trim();

    if (player1 === "" || player2 === "") {
        alert("Please enter both names!");
        return;
    }

    document.getElementById("player-input").style.display = "none";
    document.getElementById("game").style.display = "block";

    currentPlayer = player1;
    symbol = "x";
    document.querySelector(".message").textContent = `${currentPlayer}, you're up`;
});

// Game cells
const cells = document.querySelectorAll(".cell");

const winningCombos = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
];

cells.forEach(cell => {
    cell.addEventListener("click", () => {
        if (!gameActive) return;
        if (cell.textContent !== "") return;

        cell.textContent = symbol;

        if (checkWinner()) {
            document.querySelector(".message").textContent =
                `${currentPlayer} congratulations you won!`;
            gameActive = false;
            return;
        }

        switchTurn();
    });
});

function switchTurn() {
    if (currentPlayer === player1) {
        currentPlayer = player2;
        symbol = "o";
    } else {
        currentPlayer = player1;
        symbol = "x";
    }
    document.querySelector(".message").textContent = `${currentPlayer}, you're up`;
}

function checkWinner() {
    return winningCombos.some(combo => {
        const [a, b, c] = combo;
        return (
            document.getElementById(a).textContent === symbol &&
            document.getElementById(b).textContent === symbol &&
            document.getElementById(c).textContent === symbol
        );
    });
}
