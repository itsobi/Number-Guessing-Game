let randomNum = Math.floor((Math.random() * 100) + 1);
let guess = 1;

document.getElementById("btn").onclick = function() {
    let x = document.getElementById("text").value

    if (x === randomNum) {
        alert("Nice job, you guessed the correct number!");
    }
    else if (x > randomNum) {
        guess++
        alert("Oops, the number is greater than the random number.");
    }
    else if (x < randomNum) {
        guess++
        alert("Oops, the number is less than the random number.");
    }
    else if (randomNum === x) {
        alert("CONGRATS! You guessed the correct number");
    }
    if (guess = 3) {
        alert("You ran out of attempts! The number is " + randomNum)
    }
    
}

console.log("hello")