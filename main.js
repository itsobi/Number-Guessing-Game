let randomNum = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let output = document.getElementById("output-text");
let final_text = document.getElementById("final");

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
        final_text.innerHTML = "Refresh page to play again!"
        
        
    }

      return false;

}

// function resetGame() {
//     randomNum.reset();
//     attempts.reset();
// }




  
