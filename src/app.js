// Global player selection
let playerSelection


// player and computer score counter
let player = document.querySelector('#you')
let com = document.querySelector('#com')


// getting all buttons as a node list
const buttons = document.querySelectorAll('button')






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
    
    if(res == 1 || res  == -1) {
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

// attaching every button with the same eventlistener
buttons.forEach((button) => {
    button.addEventListener('click', () => {

        playerSelection = button.id
        let roundRes = playRound(playerSelection, getComputerSelection())
        
        // Depending on the output of this conditional expression, the score will be updated
        if(roundRes.includes('W')) {
            player.textContent = `${parseInt(player.textContent) + 1}`
            console.log(roundRes);

        } if (roundRes.includes('L')) {
            com.textContent = `${parseInt(com.textContent) + 1}`
            console.log(roundRes);

        } else {
            alert('Tie!')
        }

    })
})





