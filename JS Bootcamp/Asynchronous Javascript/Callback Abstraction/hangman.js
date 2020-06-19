class Hangman{
    constructor(word, remainingGuesses){
        this.word = word.toLowerCase().split('')
        this.remainingGuesses = remainingGuesses
        this.guessedLetters = []
        this.status='playing'
    }
    calculateStatus(){
        
    const finished=this.word.every((letter)=>this.guessedLetters.includes(letter) || letter===' ')
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

    get statusMessage(){
        if (this.status === 'playing') {
            return `Guesses left: ${this.remainingGuesses}`
        } else if (this.status === 'failed') {
            return `Nice try! The word was "${this.word.join('')}".`
        } else {
            return 'Great work! You guessed the work.'
        }
    }
    get puzzle(){
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
    makeGuess(guess){
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
}

