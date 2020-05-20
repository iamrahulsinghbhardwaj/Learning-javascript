const Hangman = function (word, remainingGuesses) {
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = []
}

Hangman.prototype.getPuzzle=function(){
    let puzzle=' '
    this.word.forEach((letter)=>{
        if(this.guessedLetters.includes(letter) || letter===' '){
            puzzle+=letter
        }else{
            puzzle+='*'
        }
    })
    return puzzle

}
Hangman.prototype.makeGuess=function(guess){
    guess=guess.toLowerCase()
    const isunique=!this.guessedLetters.includes(guess)
    const isbadGuess=!this.word.includes(guess)
    if(isunique){
        this.guessedLetters.push(guess)
    }
    if(isunique && isbadGuess){
        this.remainingGuesses--;
    }
}

const game1 = new Hangman('Cat', 2)
console.log(game1.getPuzzle())
console.log(game1.remainingGuesses)

window.addEventListener('keypress',function(e){
    const guess=String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    console.log(game1.getPuzzle())
    console.log(game1.remainingGuesses)
})
