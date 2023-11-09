const play = document.getElementById('playButton');
const game = document.getElementById('game');
const score = document.getElementById('score');
const howToPlayButton = document.getElementById('howToPlay');
const pigPicture = document.getElementById('pigPicture');
const holdButton = document.getElementById('holdRollButton');
const turnScoreText = document.getElementById('turnScore');
const p1ScoreBar = document.getElementById('p1Score');
const p2ScoreBar = document.getElementById('p2Score');

let diceNum = 1;
let count = 0;
let time = 0;
let turn = 1;
let p1TotalScore = 0;
let p2TotalScore = 0;
let tScore = 0;
let hold = Boolean(false);

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
		let imgsrc = document.getElementById('diceImg');
		let str = "assets/dice-six-faces-"+num+".png";
		imgsrc.src = str; 
        
        if(num === 1){
            switchPlayer();
        }else{
            gamePlay(num);
        }
    }
}

function diceRandom(){
    rollOne.style.display = 'none';
    count = 10;
	clearInterval(time);
	time = setInterval("diceAnimation()",60);
}

function holdRoll(){
    hold = true;
    switchPlayer();
}

    // gameplay will happen here
    // keeping track of turn score as well as total score
    // the score bar is modified throught out the game
    // switching turns when the player holds or rolls a 1
    // the winning condition is the user gets score to 100
    // prints out appropriate messages to the user
function gamePlay(num){
    tScore += num;
    turnScoreText.innerHTML = tScore;
    if(turn === 1){
        p1ScoreBar.style.background = 
        'linear-gradient(to right, red 0% ' + p1TotalScore + '% , rgb(244, 134, 134)' + p1TotalScore + '% ' + (p1TotalScore + tScore) + '%, rgb(163, 163, 163) ' + (p1TotalScore + tScore) + '% 100%'; 
    }else{
        p2ScoreBar.style.background = 
        'linear-gradient(to right, blue 0% ' + p2TotalScore + '% , rgb(140, 140, 251)' + p2TotalScore + '% ' + (p2TotalScore + tScore) + '%, rgb(163, 163, 163) ' + (p2TotalScore + tScore) + '% 100%'; 
    }
}
function switchPlayer(){
    const turnPlayerText = document.getElementById('turnPlayer');
    const rollOne = document.getElementById('rollOne');
    const rollOneText = document.getElementById('rollOneText');
    const p1ScoreNum = document.getElementById('p1ScoreNum');
    const p2ScoreNum = document.getElementById('p2ScoreNum');

    if(turn === 1){
        turn = 2;
        turnPlayerText.innerHTML = "Player 2's Turn";
        if(hold){
            rollOneText.innerHTML ="Player 1 decided to hold!";
            rollOne.style.display = 'flex';
            p1TotalScore += tScore;
            p1ScoreNum.innerHTML = p1TotalScore;
            p1ScoreBar.style.background = 
            'linear-gradient(to right, red 0% ' + p1TotalScore + '% , rgb(244, 134, 134)' + p1TotalScore + '% ' + p1TotalScore + '%, rgb(163, 163, 163) ' + p1TotalScore + '% 100%'; 
            hold = false;
        }else{
            rollOneText.innerHTML ="Uh oh! Player 1 rolled a one!";
            rollOne.style.display = 'flex';
            p1ScoreBar.style.background = 
            'linear-gradient(to right, red 0% ' + p1TotalScore + '% , rgb(244, 134, 134)' + p1TotalScore + '% ' + p1TotalScore + '%, rgb(163, 163, 163) ' + p1TotalScore + '% 100%'; 
        }
    }else{
        turn = 1;
        turnPlayerText.innerHTML = "Player 1's Turn";
        if(hold){
            rollOneText.innerHTML ="Player 2 decided to hold!";
            rollOne.style.display = 'flex';
            p2TotalScore += tScore;
            p2ScoreNum.innerHTML = p2TotalScore;
            p2ScoreBar.style.background = 
            'linear-gradient(to right, blue 0% ' + p2TotalScore + '% , rgb(140, 140, 251)' + p2TotalScore + '% ' + p2TotalScore + '%, rgb(163, 163, 163) ' + p2TotalScore + '% 100%';
            hold = false;
        }else{
            rollOneText.innerHTML ="Uh oh! Player 2 rolled a one!";
            rollOne.style.display = 'flex';
            p2ScoreBar.style.background = 
            'linear-gradient(to right, blue 0% ' + p2TotalScore + '% , rgb(140, 140, 251)' + p2TotalScore + '% ' + p2TotalScore + '%, rgb(163, 163, 163) ' + p2TotalScore + '% 100%';
        }
    }
    tScore = 0;
    turnScoreText.innerHTML = tScore;

}


