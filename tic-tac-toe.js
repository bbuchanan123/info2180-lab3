document.addEventListener("DOMContentLoaded", function() {
    const squares = document.querySelectorAll("#board div");
    const statusDiv = document.getElementById("status");
    const newGameButton = document.querySelector(".btn"); 
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

    // Check for a winner
    function checkWinner() {
        for (const combo of winningCombos) {
            const [a, b, c] = combo;
            if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
                statusDiv.textContent = `Congratulations! ${gameState[a]} is the Winner!`;
                statusDiv.classList.add("you-won");
                return true;
            }
        }
        // Check for draw
        if (!gameState.includes(null)) {
            statusDiv.textContent = "It's a draw!";
            return true;
        }
        return false;
    }

    // Handle clicks and hover
    squares.forEach((square, index) => {
        square.classList.add("square");

        square.addEventListener("click", function() {
            if (!gameState[index] && !checkWinner()) {
                // Mark the square
                square.textContent = currentPlayer;
                square.classList.add(currentPlayer);
                gameState[index] = currentPlayer;

                // Check winner
                if (!checkWinner()) {
                    // Switch player
                    currentPlayer = currentPlayer === "X" ? "O" : "X";
                }
            }
        });

        // Hover effect
        square.addEventListener("mouseover", function() {
            if (!gameState[index]) {
                square.classList.add("hover");
            }
        });

        square.addEventListener("mouseout", function() {
            square.classList.remove("hover");
        });
    });

    // Reset the game
    newGameButton.addEventListener("click", function() {
        squares.forEach(square => {
            square.textContent = "";
            square.classList.remove("X", "O", "hover");
        });
        gameState = Array(9).fill(null);
        currentPlayer = "X";
        statusDiv.textContent = "Move your mouse over a square and click to play an X or an O.";
        statusDiv.classList.remove("you-won");
    });
});