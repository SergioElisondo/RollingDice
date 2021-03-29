document.getElementById('buttonPress').addEventListener('click', makeItRoll)
document.getElementById('buttonPress1').addEventListener('click', botRoll)

function makeItRoll(){
    const mathRoll = Math.ceil(Math.random() * 6)
    console.log(mathRoll)
    if(mathRoll === 1){
        document.getElementById('diceRollReturn').innerText = "You Rolled a 1!"
    }else if(mathRoll === 2){
        document.getElementById('diceRollReturn').innerText = "You Rolled a 2!"
    }else if(mathRoll === 3){
        document.querySelector('#diceRollReturn').innerText = 'You Rolled a 3!'
    }else if(mathRoll === 4){
        document.getElementById('diceRollReturn').innerText = "You Rolled a 4!"
    }else if(mathRoll === 5){
        document.getElementById('diceRollReturn').innerText = "You Rolled a 5!"
    }else if(mathRoll === 6){
        document.getElementById('diceRollReturn').innerText = "You Rolled a 6!"
    }else{
        document.getElementById('diceRollReturn').innerText = "You Rolled... 0??"
    }
}

function botRoll(){
    const playerRoll = Math.ceil(Math.random() * 6)
    const botAI = Math.ceil(Math.random() * 6)
    // console.log(playerRoll + botAI)
    if(playerRoll > botAI){
        document.getElementById('battleGround').innerText = `You win! 
        Player Roll was: ${playerRoll} 
        Bot Roll was: ${botAI}`
    }else if(playerRoll < botAI){
        document.getElementById('battleGround').innerText =  `You Lose... 
        Player Roll was: ${playerRoll} 
        Bot Roll was: ${botAI}`
    }else{
            document.getElementById('battleGround').innerText = `Draw! 
            Player Roll was: ${playerRoll} 
            Bot Roll was: ${botAI}`
        }
    console.log(`Player Roll is: ${playerRoll} Bot Roll is: ${botAI}`)
}




// function botAI(makeItRoll){
//     const botRoll = Math.ceil(Math.random() * 6)
//     console.log(botRoll)
//     if(makeItRoll > botRoll){
//         return document.getElementById('battleGround').innerText = "You Win!"
        
//     }else if(makeItRoll === botRoll){
//         return document.getElementById('battleGround').innerText = "It's a tie... Roll again!"
        
//     }else{
//         return document.getElementById('battleGround').innerText = "You Lose.."
        
//     }    
// }