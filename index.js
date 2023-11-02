const play = document.getElementById('playButton');
const game = document.getElementById('game');
const score = document.getElementById('score');
const howToPlayButton = document.getElementById('howToPlay');
const pigPicture = document.getElementById('pigPicture');


let diceNum = 1;
let count = 0;
let time = 0;
let turn = 1;

howToPlayButton.addEventListener("click", () => {
    if(document.getElementById('howToPlayText').style.display === "none"){
        document.getElementById('howToPlayText').style.display = "flex";
    }else{
        document.getElementById('howToPlayText').style.display = "none";
    }
})
play.addEventListener("click", () => {
    document.getElementById('menu').style.display = "none";
    document.getElementById('howToPlayText').style.display = "none";
    game.style.display = 'flex';
    score.style.display = 'flex';
    pigPicture.style.display = 'flex';
})


//
function displayMessage(){
    
}

function diceAnimation(){
    // dice animation
    count = count - 1; 	
	if(count != 0) { 

		diceNum = diceNum+1;
		if(diceNum == 7) {
			diceNum = 1;
		}
		let imgsrc = document.getElementById('diceImg')
		let str = "assets/dice-six-faces-"+diceNum+".png";
		imgsrc.src = str;
	}
    else if(count==0){
		clearInterval(time);
		let num = Math.floor(Math.random()*6)+1;
        gamePlay(num);
		let imgsrc = document.getElementById('diceImg');
		let str = "assets/dice-six-faces-"+num+".png";
		imgsrc.src = str;       
    }
}

function diceRandom(){
    count = 10;
	clearInterval(time);
	time = setInterval("diceAnimation()",60);
}

function gamePlay(diceNumber){   
    // gameplay will happen here
    // keeping track of turn score as well as total score
    // the score bar is modified throught out the game
    // switching turns when the player holds or rolls a 1
    // the winning condition is the user gets score to 100
    // prints out appropriate messages to the user

    const turnPlayer = document.getElementById('turnPlayer');
    const turnScore = document.getElementById('turnScore');

    if(diceNumber === 1){
        if(turn === 1){
            turnPlayer.innerHTML = "Player 2's Turn"
            turnScore.innerHTML ="0";
            turn = 2;
        }else{
            turnPlayer.innerHTML = "Player 1's Turn"
            turnScore.innerHTML ="0";
            turn = 1;
        }         
    }else{
        var score = parseInt(turnScore.innerHTML, 10) + diceNumber;
        turnScore.innerHTML = score;
        console.log(score);
        }
}