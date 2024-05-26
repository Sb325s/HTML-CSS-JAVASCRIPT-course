const COLORS_ARRAY = ['blue','cyan','gold','gray','green','mangenta','orange','red','white','yellow'];
function runGame(){
    let guessString = '';
    let correct = false;

    const targetIndex = math.floor(math.random() *10);
    const target = COLORS_ARRAY[targetIndex];
    console.log(target);
   
    do {
        guessString = prompt('I am thinking of one of these colors:\n\n' + COLORS_ARRAY + '\n\nWhat color am I Thinking of?\n');
        if ()
    }

}
function checkGuess(guessColor, target){

}