let answer = prompt('Do you want to play a game?')
answer = answer.toLowerCase()
while (answer !== 'no') {
    let guess = prompt('What number am I thinking of?')
    let num = (Math.random() * 10).toPrecision(1)
    if (guess === num) { 
        console.log('You win!')
    } else {
        console.log('You lose!')
    }
    answer = prompt('Do you want to play again?')
}

