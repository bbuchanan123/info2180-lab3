document.addEventListener("DOMContentLoaded", function() {
    const squares = document.querySelectorAll("#board div");
    const statusDiv = document.getElementById("status");
    const newGameButton = document.getElementById("newgame"); 
    let currentPlayer = "X";
    let gameState = Array(9).fill(null);

    const winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    //check for a winner
    function checkWinner() {
        for (const combo of winningCombos) {
            const [a, b, c] = combo;
            if (
                gameState[a] &&
                gameState[a] === gameState[b] &&
                gameState[a] === gameState[c]
            ) {
                statusDiv.textContent = `Congratulations! ${gameState[a]} is the Winner!`;
                statusDiv.classList.add("you-won");
                return true;
            }
        }
        return false;
    }
    // squares
    squares.forEach((square, index) => {
        square.classList.add("square");
        square.addEventListener("click", function() {
            if (!square.textContent && !checkWinner()) {
                square.textContent = currentPlayer;
                square.classList.add(currentPlayer);
                gameState[index] = currentPlayer;

                if (checkWinner()) return;

                currentPlayer = currentPlayer === "X" ? "O" : "X";
            }
        });

        // Hover effects
        square.addEventListener("mouseover", function() {
            square.classList.add("hover");
        });
        square.addEventListener("mouseout", function() {
            square.classList.remove("hover");
        });
    });

    newGameButton.addEventListener("click", function() {
        // Clear all squares
        squares.forEach(square => {
            square.textContent = "";
            square.classList.remove("X", "O");
        });

        // Reset game
        statusDiv.textContent = "Move your mouse over a square and click to play an X or an O.";
        statusDiv.classList.remove("you-won");

        //start with X
        gameState = Array(9).fill(null);
        currentPlayer = "X";
    });
});
