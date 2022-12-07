// function RPS() {
//     function determineComputer (num) {
//         if (num <= 0.33) return "rock";
//         else if (num <= 0.66) return "paper";
//         return "scissors";
//     }

// let userChoice = prompt ("Choose rock / paper / scissor").toLowerCase();
// let computerChoice = determineComputer(Math.random());
// let answers = ["rock", "paper", "scissors"];

// if (!userChoice || answers.indexOf(userChoice) === -1) {
//     return "Please select valid option";
// }

// if (userChoice === computerChoice) return "Tie";

// if (userChoice === "rock" && computerChoice === "paper"){
//     return "You loose! Computer picked " + computerChoice;
// }

// if (userChoice === "paper" && computerChoice === "scissors"){
//     return "You loose! Computer picked " + computerChoice;   
// }

// if (userChoice === "scissors" && computerChoice === "rock"){
//     return "You loose! Computer picked " + computerChoice;    
// }

// return "You win! Computer picked " + computerChoice; 
// }

const getPlayerChoice = (userChoice) => {
    userInput = prompt(
        "Choose rock, paper or scissors?"
    ).toLowerCase();
    if (
        userChoice === "rock" ||
        userChoice === "paper" ||
        userChoice === "scissors"
    ) {
        return userInput;
    } else {
        alert("Error! Please enter a valid input. Rock, Paper or Scissors.");
    }
};
const getComputerChoice = () => {
    const randomChoice = Math.floor(Math.random() * 3);
    switch (randomChoice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
};
const winner = (userPicked, computerChoice) => {
    let winnerMessage = `You won! ${userChoice} beats ${computerChoice}`;
    let loserMessage = `You lost! ${computerChoice} beats ${userChoice}`;
    if (userChoice === computerChoice) {
        return "The game is a tie!";
    } else if (userChoice === "rock") {
        if (computerChoice === "paper") {
            return loserMessage;
        } else {
            return winnerMessage;
        }
    } else if (userPicked === "paper") {
        if (computerChoice === "scissors") {
            return loserMessage;
        } else {
            return winnerMessage;
        }
    } else if (userPicked === "scissors") {
        if (computerChoice === "rock") {
            return loserMessage;
        } else {
            return winnerMessage;
        }
    }
};
const playGame = () => {
    const userPicked = getPlayerChoice();
    const computerChoice = getComputerChoice();
    alert(`the computer picked ${computerChoice}`);
    alert(winner(userChoice, computerChoice));
};
playGame();
