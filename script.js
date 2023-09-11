let choiceArr = ["Rock", "Paper", "Scissor"];

function getComputerChoice(){
    const choiceIndex = Math.floor(Math.random() * 3);
    return choiceArr[choiceIndex];
}

function playRound(playerChoice, compChoice){
    if(playerChoice.toLowerCase() == compChoice.toLowerCase())
        return `You won`;
    return `Sorry, you lost`;
}

function game(){
    const playerChoice = prompt("Enter choice");
    const compChoice = getComputerChoice();
    return playRound(playerChoice, compChoice);
}

for(let i=0;i<5;i++){
    console.log(game());
}