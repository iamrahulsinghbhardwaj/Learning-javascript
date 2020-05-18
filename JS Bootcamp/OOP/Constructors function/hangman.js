const Hangman=function(word,remaininGusses){
    this.word=word
    this.remaininGusses=remaininGusses
}

const game1=new Hangman('Cat',22)
    console.log(game1);
const game2=new Hangman('New Jersey',4);
console.log(game2);