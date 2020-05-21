const Hangman = function (word, remainingGuesses) {
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = []
    this.status='playing'
}

Hangman.prototype.calculateStatus=function(){

    const finished=this.word.every((letter)=>this.guessedLetters.includes(letter))
    /** 
    const lettersUnguessed=this.word.filter((letter)=>{
       return  !this.guessedLetters.includes(letter)
   })
 const finished=lettersUnguessed.length===0
   
 let finished=true
    
    this.word.forEach((letter)=>{
        if(this.guessedLetters.includes(letter)){

        }else{
            finished=false
        }
    })
    **/
    if(this.remainingGuesses===0){
        this.status='failed'
    }else if(finished){
        this.status='finished'
    }else{
        this.status='playing'
    }
}

Hangman.prototype.getStatusMessage = function () {
    if (this.status === 'playing') {
        return `Guesses left: ${this.remainingGuesses}`
    } else if (this.status === 'failed') {
        return `Nice try! The word was "${this.word.join('')}".`
    } else {
        return 'Great work! You guessed the work.'
    }
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

    if(this.status!='playong'){
        return 
    }
    if(isunique){
        this.guessedLetters.push(guess)
    }
    if(isunique && isbadGuess){
        this.remainingGuesses--;
    }
}

