
const getComputerSelection = () => {
    const choices = ['Rock', 'Paper', 'Scissors']
    const getChoice = Math.floor(Math.random() * choices.length)
    const choice = choices[getChoice]
     
    return choice
}

    

function playRound(playerSelection, computerSelection) {

    

    const res = playerSelection.length - computerSelection.length
    let winMessage = `You Win! ${playerSelection} beats ${computerSelection}`
    let loseMessage = `You Lose! ${computerSelection} beats ${playerSelection}`
    
    if(res == 1 || res == -1) {
        return (res == 1) ? winMessage : loseMessage
    } 
    
    else if((res == -4) || (res == 4)) {
        return (res == -4) ? winMessage : loseMessage
    }

    else if((res == 3) || (res == -3)) {
        return (res == 3) ? winMessage : loseMessage
    } 
    else {
        return `Tie!`
    }

}



// Comment !

const playerSelection = 'Scissors'
const computerSelection = getComputerSelection()

function game() {

    let player = 0
    let com = 0

    for(let i = 0; i < 5; i++) {

        if (playRound(playerSelection, computerSelection).includes('W')) {
            player++

        } else if (playRound(playerSelection, computerSelection).includes('L')) {
            com++

        } else {
            continue
        }
    }


    return (player > com) ? 'You Won!' : 'Computer Won!'
}

console.log(game());