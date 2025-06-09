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
    if (winner === "Human") {
        humanScore++;
    } else if (winner === "Computer") {
        computerScore++;
    }
    
    alert(`You chose: ${choice}\nThe CPU chose: ${computerChoice}\n${winner === "Tie" ? "It was a TIE!" : `The ${winner} has won!`}`);
    document.getElementById("popup").style.display = "none";
    document.getElementById("scoreDisplay").innerText = `Score: Human - ${humanScore} | Computer - ${computerScore}`;

}

/*

let humanScore = 0;
let computerScore = 0;
let winner;
let messageToUser;

while (winner != "Quit") { // main loop

    let humanChoice = getHumanChoice();
    let computerChoice = (getComputerChoice());

    winner = findWhoWon(humanChoice,computerChoice,winner);

    if (winner == "Human"){
            humanScore++
        }
        else if (winner =="Computer"){
            computerScore++
        }
    
    if (winner == "Human" || winner == "Computer"){
    
        messageToUser = "You selected " + humanChoice + " The computer selected " + computerChoice + "   " + winner + " has won, the score is now Human: " + humanScore + " Computer: " + computerScore;
        console.log(messageToUser)
    }       
    else if (winner == "Tie"){
        messageToUser = "You selected " + humanChoice + " The computer selected " + computerChoice + "  " + " it was a Tie!! " + "The score is now Human: " + humanScore + " Computer: " + computerScore;
        console.log(messageToUser)
    }

    else{
        messageToUser = "Thanks for playing. Final score was Human: " + humanScore + " Computer: " + computerScore;
        console.log(messageToUser)
    }
}

*/