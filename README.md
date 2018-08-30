# Hangman REACH LinkedIn

Implemented a Javascript program that works as a count down timer.

It takes a start time which should be in hh:mm:ss format, which represents: hour, minute and seconds, respectively. It also takes an end time in the same format. The timer will countdown a number that is the differnce between the start and end time.Created a button with "Start Countdown" text on it. When user clicks the button, it:Verifys both inputs' validity, and throws error message if there is a problem, e.g. input format, intervals, etc.The Reset button resets the stop watch.

## Game Rules
-	At the start of the game the computer/secret-keeper will choose a dictionary word
-	The guesser loses the game if they guess 6 letters that are not in the secret word
-	The guesser wins the game if they guess all letters in the secret word correctly and have not already lost the game per the conditions above

### Technologies
- React 
- React Router
- Webpack


#### Installing

Clone github to your local machine, navigate to the root folder of the directory, then:

```shell
npm install
npm run react-dev
npm run server-dev
```
...then go to http://localhost:3000 on your browser.
