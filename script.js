document.addEventListener('DOMContentLoaded', function() {
    const guessInput = document.getElementById('guessInput');
    const guessButton = document.getElementById('guessButton');
    const message = document.getElementById('message');
    const attemptsLeft = document.getElementById('attemptsLeft');

    let randomNumber = Math.floor(Math.random() * 100) + 1;
    //console.log("Correct Number(for testing purpose):", randomNumber==67);
    let attempts = 3;

    function validateInput(input) {
        const number = parseInt(input);
        if (isNaN(number) || number < 1 || number > 100 || input.includes('.')) {
            return false;
        }
        return true;
    }

    guessButton.addEventListener('click', function() {
        const userGuess = guessInput.value;

        if (!validateInput(userGuess)) {
            message.textContent = "Please enter a valid integer between 1 and 100.";
            message.style.color = "red";
            return;
        }

        const guess = parseInt(userGuess);

        if (guess < randomNumber) {
            message.textContent = "Too low!";
            message.style.color = "blue";
        } else if (guess > randomNumber) {
            message.textContent = "Too high!";
            message.style.color = "blue";
        } else {
            message.textContent ='Congratulations! You guessed the number {randomNumber}!' ;
            message.style.color = "green";
            guessButton.disabled = true;
            guessInput.disabled = true;
            return;
        }

        attempts--;
        attemptsLeft.textContent = 'Attempts left: {attempts}';

        if (attempts === 0) {
            message.textContent = 'Game over! The number was {randomNumber}.';
            message.style.color = "red";
            guessButton.disabled = true;
            guessInput.disabled = true;
        }
    });
});