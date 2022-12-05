let winner = "";

function getComputerChoice(){ 
    let randomNumber = Math.floor(Math.random() * 3)
  switch (randomNumber) {
    case 0:
      return 'ROCK'
    case 1:
      return 'PAPER'
    case 2:
      return 'SCISSORS'
  }
}

function playRound(playerSelection, computerSelection){
    
    
    if(playerSelection === computerSelection){
        winner = "tie";
    }

    if (
        (playerSelection.toLowerCase("Rock") && computerSelection.toLowerCase === ("Scissors")) ||
        (playerSelection.toLowerCase("Paper") && computerSelection.toLowerCase("Rock")) ||
        (playerSelection.toLowerCase("Scissors") && computerSelection.toLowerCase("Paper"))
      ) {
        winner = "player";

    if (
        (computerSelection.toLowerCase("Rock") && playerSelection.toLowerCase === ("Scissors")) ||
        (computerSelection.toLowerCase("Paper") && playerSelection.toLowerCase("Rock")) ||
        (computerSelection.toLowerCase("Scissors") && playerSelection.toLowerCase("Paper"))
      ) {
        winner = "computer";

    
}
      }
    }



function playGame(){

    output.textContent = "Rock, Paper, Scissors";
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));

    for(let i=0; i<5; i++)
    {
        playRound(playerSelection, getComputerChoice());
    }

}

