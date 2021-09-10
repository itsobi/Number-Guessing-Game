let randomNum = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let output = document.getElementById("output-text");

function guessGame() {
    let input = document.getElementById("number").value;
    
    
    if (input === randomNum) {
        output.innerHTML = "Congrats! You guessed the correct number.";
    }
    else if (input > randomNum) {
        output.innerHTML = "Sorry, you guessed to high";
        attempts++
    }
    else if (input < randomNum) {
        output.innerHTML = "Sorry, you guessed to low";
        attempts++
    }
    if (attempts === 3) {
        output.innerHTML = "Sorry, you ran out of attempts! The correct number is " + randomNum;
    }

      return false;

}

  
