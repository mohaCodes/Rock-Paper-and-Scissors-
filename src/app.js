// Global player selection
let playerSelection

// reset button in header
const resetButton = document.getElementById('resetButton')

// player and computer score counter
let player = document.querySelector('#you')
let com = document.querySelector('#com')

// getting all buttons as a node list
const buttons = document.querySelector('#conSection').querySelectorAll('button')

// result message
let resultMessage = document.getElementById('resultMessage')







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


// attaching an eventlistener for reset button
resetButton.addEventListener('click', () => {
    player.textContent = 0
    com.textContent = 0
})



// attaching every choice button with the same eventlistener
buttons.forEach((button) => {
    button.addEventListener('click', () => {

        playerSelection = button.id
        let roundRes = playRound(playerSelection, getComputerSelection())
        
        // Depending on the output of this conditional expression, the score will be updated
        if(roundRes.includes('W')) {
            player.textContent = `${parseInt(player.textContent) + 1}`
            resultMessage.textContent = roundRes
            console.log(roundRes);

        } if (roundRes.includes('L')) {
            com.textContent = `${parseInt(com.textContent) + 1}`
            resultMessage.textContent = roundRes
            console.log(roundRes);

        } else {
            resultMessage.textContent = roundRes
            console.log('Tie!');
        }

    })
})

