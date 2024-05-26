Tic-Tac-Toe in React
Overview
I created a classic Tic-Tac-Toe game using the React framework. This project showcases my ability to use React components, manage state, and implement game logic in a web application.

Key Features
Interactive Game Board:

The game board is a 3x3 grid made up of individual squares.
Players can click on these squares to place their mark (either X or O).
Square Component:

Each square on the board is a React component.
Clicking a square updates its state to show the current player's mark.
Game Component:

This is the main component that manages the overall state of the game.
It keeps track of which squares are filled, whose turn it is, and whether the game has been won or is a draw.
Turn Management:

The game alternates between two players, X and O.
It displays a message indicating whose turn it is.
Winning Logic:

The game checks for a win condition (three of the same marks in a row, column, or diagonal).
When a player wins, a message announces the winner.
Draw Condition:

The game also checks for a draw (all squares filled with no winner).
A draw results in an appropriate message.
Restart Game:

A reset button is provided to start a new game after a win or draw.
Clicking this button clears the board and resets the game state.
Styling:

The game has been styled to be visually appealing and easy to use.
CSS or a styling framework has been used to layout the board and add aesthetic touches.
How It Works
Rendering the Board: The Game component renders the board by creating an array of Square components.
Handling Clicks: When a square is clicked, the Square component notifies the Game component. The Game component updates the state to reflect the current move.
Checking for Wins: After each move, the Game component checks if the move causes a win or if the board is full.
Updating the Display: The game status (current player, win, or draw message) is displayed dynamically based on the game state.
