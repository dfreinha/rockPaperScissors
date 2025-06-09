var computerChoice;
var winner;
let humanScore = 0;
let computerScore = 0;


function getComputerChoice () { // function will return a string of either "Rock" "Paper" "Scissors"
    let choice;
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            choice = "Rock";
            break;
        case 1:
            choice = "Paper";
            break;
        case 2:
            choice = "Scissors";
            break;
    }
    return choice;
}


function findWhoWon(humanChoice,computerChoice) { // function will return the winner
    

    if (humanChoice == computerChoice) {
        winner = "Tie";
    }
    else if (humanChoice == "Rock" && computerChoice == "Paper"){
        winner = "Computer";
    }
    else if (humanChoice == "Rock" && computerChoice == "Scissors"){
        winner = "Human";
    }
    else if (humanChoice == "Paper" && computerChoice == "Rock"){
        winner = "Human";
    }
    else if (humanChoice == "Paper" && computerChoice == "Scissors"){
        winner = "Computer";
    }
    else if (humanChoice == "Scissors" && computerChoice == "Rock"){
        winner = "Computer";
    }
    else if (humanChoice == "Scissors" && computerChoice == "Paper"){
        winner = "Human";
    }
    else {
        winner = "Quit";
    }
    return winner;
}

function startGame() {
    computerChoice = getComputerChoice()
    document.getElementById("popup").style.display = "block";
}

function displayChoice(choice) {
    winner = findWhoWon(choice, computerChoice);

    // update score
    if (winner === "Human") {
        humanScore++;
    } else if (winner === "Computer") {
        computerScore++;
    }
    // dispaly choices and who won
    alert(`You chose: ${choice}\nThe CPU chose: ${computerChoice}\n${winner === "Tie" ? "It was a TIE!" : `The ${winner} has won!`}`);
    document.getElementById("popup").style.display = "none";
    document.getElementById("scoreDisplay").innerText = `Score: Human - ${humanScore} | Computer - ${computerScore}`;

}

