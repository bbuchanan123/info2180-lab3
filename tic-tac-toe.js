document.addEventListener("DOMContentLoaded", function() {
    const squares = document.querySelectorAll("#board div");
    squares.forEach(square => {
        square.classList.add("square");
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const squares = document.querySelectorAll("#board div");
    let currentPlayer = "X"; // Start with X
    let gameState = Array(9).fill(null); // Track moves 

    squares.forEach((square, index) => {
        square.classList.add("square");

        square.addEventListener("click", function() {
            // Only allow clicking if the square is empty
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

        // 🔹 Handle mouseout
        square.addEventListener("mouseout", function() {
            square.classList.remove("hover");
        });
    });
});
