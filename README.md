# Hangman REACH LinkedIn

I created a space-themed web browser version of the popular game Hangman.

The project is built with React, bundled with webpack, and uses Node.js on an Express server. The game application is isomorphic because most of the server side code is within the client.

## Installing

Clone github to your local machine, navigate to the root folder of the directory, then:

```shell
npm install
npm run react-dev
npm run server-dev
```
...then go to http://localhost:3000 on your browser.

#Game Play
## Game Rules
-	At the start of the game the computer/secret-keeper will choose a dictionary word
-	The guesser loses the game if they guess 6 letters that are not in the secret word
-	The guesser wins the game if they guess all letters in the secret word correctly and have not already lost the game per the conditions above
-	You can choose to solve words that are at different levels of difficulty
-	If you solve a word at a higher level it is worth more points (Level 1: 10 pts, Level 2: 20pts, Level 3: 30pts, etc...)
-	Hints are sometimes available, if you chose to use a hint you will be deducted - 1pt per hint used
- The user can then start a new round by either selecting another difficulty level and clicking the "New Word" button
- Once you're done playing, click the "Game Over" button and see if you made the scoreboard!

## Guesses
The player will try to solve the answer by guessing one letter at a time:

- Correct letters in the answer are revealed in their correct positions
- With every incorrect guess a body part of the alien hangman will be revealed.
- If all 6 attempts have been used and the entire hangman is revealed without the full word being guessed, the user has lost the round
- If the full word is guessed without using all 6 attempts then the user has won the round!

### Technologies
- React
- React Router
- Webpack
- Node.js
- Express
- Bootstrap
- Github
- Heroku

## Process

1. Creation of wire frames of UI flow
2. Created basic React/Node app ensuring basic connections are set up
3. Implemented React Routing, and created basic UI outlines for the homepage and game page
4. Set up the route that would query the LinkedIn Word dictionary API
5. Created the keyboard that dynamically updated the "letter placeholder" components, disabled themselves when clicked, and updated the scoreboard component if the letter was an incorrect guess
6. Created Navbar, ensuring that the initiation of new game with varying difficulty levels would reset the appropriate UI components and was communicating properly with the server
7. Added the Hints section that query's a new Word API for the word's definition and synonym   
8. Display LeaderBoard


##Ideas for Future Enhancements

- Add tests
- Adding a database so that people can save games
- Add multiplayer functionality
- Improve UI of NavBar, and pop-overs for Hints 
