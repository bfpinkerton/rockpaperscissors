
    function computerPlay(){
        let computerChoice = Math.floor((Math.random())*3 + 1);
        if(computerChoice == 1){
            return "rock";
        }
        else if(computerChoice == 2){
            return "paper";
        }
        else{
            return "scissors";
        }
    }

    function playRound(playerSelection, computerSelection){
        if(playerSelection == "rock"){
            if(computerSelection == "scissors"){
                console.log("You won!");
            }
            else if(computerSelection == "rock"){
                console.log("It's a draw!");
            }
            else{
                console.log("You lost!");
            }
        }
        else if(playerSelection == "scissors"){
            if(computerSelection == "paper"){
                console.log("You won!");
            }
            else if(computerSelection == "scissors"){
                console.log("It's a draw!");
            }
            else{
                console.log("You lost!");
            }
        }
        else{
            if(computerSelection == "rock"){
                console.log("You won!");
            }
            else if(computerSelection == "paper"){
                console.log("It's a draw!");
            }
            else{
                console.log("You lost!")
            }
        }
    }
    
    function game(){
        playRound("rock", computerPlay());
    }

    const rockButton = document.querySelector('#rock');
    rockButton.addEventListener('click', ()=>{
        playRound("rock", computerPlay());
    });

    const paperButton = document.querySelector('#paper');
    paperButton.addEventListener('click', ()=>{
        playRound("paper", computerPlay());
    });

    const scissorsButton = document.querySelector('#scissors');
    scissorsButton.addEventListener('click', ()=>{
        playRound("scissors", computerPlay());
    });

    console.log(computerPlay());
