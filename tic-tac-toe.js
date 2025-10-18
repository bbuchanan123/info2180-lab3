document.addEventListener("DOMContentLoaded", function() {
    const squares = document.querySelectorAll("#board div");
    squares.forEach(square => {
        square.classList.add("square");
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const squares = document.querySelectorAll("#board div");
    const statusDiv = document.getElementById("status");
    let currentPlayer = "X"; // Start with X
    let gameState = Array(9).fill(null); // Track moves 

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

    // Function to check if someone has won
    function checkWinner() {
        for (const combo of winningCombos) {
            const [a, b, c] = combo;
            if (
                gameState[a] &&
                gameState[a] === gameState[b] &&
                gameState[a] === gameState[c]
            ) {
                // Update the status message
                statusDiv.textContent = `Congratulations! ${gameState[a]} is the Winner!`;
                statusDiv.classList.add("you-won");
                return true; // Stop further moves
            }
        }
        return false;
    }


    squares.forEach((square, index) => {
        square.classList.add("square");

        square.addEventListener("click", function() {
            if (!square.textContent) {
                square.textContent = currentPlayer;       // Display X or O
                square.classList.add(currentPlayer);       // Add "X" or "O" class for styling
                gameState[index] = currentPlayer;          // Save move to the game state

                // Switch players
                currentPlayer = currentPlayer === "X" ? "O" : "X";
            }
        });

        square.addEventListener("mouseover", function() {
            square.classList.add("hover");
        });

        square.addEventListener("mouseout", function() {
            square.classList.remove("hover");
        });
    });
});
