
let officeCharacters =['michaelscott', 'pamandjim', 'dwight', 'toby','creed'];

let randNum = Math.floor(Math.random() * officeCharacters.length);
let rightWord =[];
let wrongWord = [];
let underScore = [];

var docUnderScore = document.getElementsByClassName('underscores');
var docRightGuess = document.getElementsByClassName('rightGuess');
var docWrongGuess = document.getElementsByClassName('wrongArray');

let chosenWord = officeCharacters[randNum];
underScore = []

let generateUnderscore = ()=> {
    for (var i =0; i < chosenWord.length; i++) {
        underScore.push('_');
    }
    return underScore;
}

document.addEventListener('keypress',(event) => {
    let keycode = event.key;
    
    if(chosenWord.indexOf(keycode) > -1) {
        rightWord.push(keycode);
 
        var pos=0;
        var i=-1;
        var num=-1;
        while(pos!=-1){
            pos=chosenWord.indexOf(keycode,i+1);
            underScore[pos]=keycode;
            num+=1;
            i=pos;
        }
        underScore[chosenWord.indexOf(keycode)]=keycode;
        docUnderScore[0].innerHTML = underScore.join(' ');
        docRightGuess[0].innerHTML = rightWord;

        if(underScore.join('')== chosenWord){
            alert('You Win');
        }
    }
        else {
            wrongWord.push(keycode);
            docWrongGuess [0].innerHTML =wrongWord;
        }
        
    });

docUnderScore[0].innerHTML = generateUnderscore().join(' ');
