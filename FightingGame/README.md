markdown
Copy code
# Fighting Game

Welcome to the Fighting Game! This is a simple web-based fighting simulation game where two players (Hulk and Thanos) battle it out. Players can attack and heal, and the game will automatically simulate turns until one player's health reaches zero.

## Features

- **Two Players**: Hulk and Thanos, each with their own attack and heal capabilities.
- **Player Controls**: Attack and heal using keyboard inputs.
- **Game Simulation**: A button to simulate a full match between the two players.
- **Game Reset**: Reset the game to start a new match.

## Technologies Used

- **HTML**: Structure of the game interface.
- **CSS**: Styling for the game.
- **JavaScript**: Game logic and interactions.

## Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/fighting-game.git
Navigate to the Project Directory
bash
Copy code
cd fighting-game
Open index.html in Your Web Browser
Simply open the index.html file in your preferred web browser to start playing.
Usage
Controls
Player 1 (Hulk)

Q: Attack Player 2 (Thanos)
A: Heal Player 1 (Hulk)
Player 2 (Thanos)

P: Attack Player 1 (Hulk)
L: Heal Player 2 (Thanos)
Simulate Game
Click the Simulate button to automatically run a full match simulation between the two players.
Reset Game
Click the Reset button to restart the game with both players' health restored to 100.
Game Logic
Player Class
Attributes: name, health, attackDmg
Methods:
strike(player, enemy, attackDmg): Attacks the enemy with a random damage amount.
heal(player): Heals the player with a random health amount.
Game Class
Attributes: isOver
Methods:
play(p1, p2): Simulates the entire game until one player's health reaches zero.
checkIsOver(): Checks if the game is over.
declareWinner(isOver, p1, p2): Declares the winner based on the health of the players.
reset(p1, p2): Resets the players' health and the game state.
Credits
Player Images:

Hulk: Hulk GIF
Thanos: Thanos GIF
Sound Effects:

Attack and heal sounds for both players.
Contributing
If you'd like to contribute to this project, please fork the repository and submit a pull request with your changes. For major changes, please open an issue first to discuss what you'd like to change.

License
This project is licensed under the MIT License - see the LICENSE file for details.

Happy gaming!

Feel free to adjust any sections according to your preferences or any additional details you want!
