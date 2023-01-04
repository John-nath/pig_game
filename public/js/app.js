/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

let scores, activePlayer, lastScore, roundScore, globalScore,gamePlaying;

const hideDice =  ()=> {
    
     // Set dice as invisible
     document.querySelector('.dice1').style.display = 'none'
     document.querySelector('.dice2').style.display = 'none';
     roundScore = 0;
     lastScore = 0;
}

const nextPlayer = () =>{
    
    hideDice();

    for(let i = 0; i < 2; i++)
    {
        document.querySelector('.scorebox' + i).classList.toggle('active');
        document.querySelector('.rounds' + i).textContent = '0';
    }
    
    activePlayer === 1 ? activePlayer = 0 : activePlayer = 1;
    
}
const init =  ()=>{
    scores = [0, 0];
    activePlayer = 0;
    gamePlaying = true;
    hideDice();
     //Initialize roundscore
    document.querySelector('.rounds0').textContent = '0';
    document.querySelector('.rounds1').textContent = '0';
    //Initialize Global Score
    document.querySelector('.glb-0').textContent = '0';
    document.querySelector('.glb-1').textContent = '0';
    document.querySelector('.scorebox0').classList.remove('winner');
    document.querySelector('.scorebox1').classList.remove('winner');
    document.querySelector('.scorebox0').classList.remove('active');
    document.querySelector('.scorebox1').classList.remove('active');
    document.querySelector('.scorebox0').classList.add('active');
    
    for(let i = 0; i < 2; i++) {
        document.querySelector(`.player${i}`).textContent = `Player ${i +1}`;
        document.querySelector(`.player${i}`).style.fontSize = '25px';
    }
}
init();


document.querySelector('.button-roll').addEventListener('click', () =>{
   if(gamePlaying) {
    //Generate random dice values as roundscores
    let dice0 = Math.floor (Math.random()*6) +1;
    let dice1 = Math.floor (Math.random()*6) +1;

    if(dice0 === 1 || dice1 ===1){
        nextPlayer();
        
    } else {
        //Display the dice 
        
        document.querySelector('.dice1').style.display = 'inline-block'; 
        document.querySelector('.dice2').style.display = 'inline-block'; 
        document.querySelector('.dice1').src ='./img/dice-' + dice0 + '.png';
        document.querySelector('.dice2').src ='./img/dice-' + dice1 + '.png';

        //Update Roundscore on the UI
        if(lastScore === undefined) {
            roundScore = dice0+ dice1
        } else {
            roundScore = dice0+ dice1 + lastScore;
        }
         
        document.querySelector('.rounds' + activePlayer).textContent = roundScore;
        lastScore = roundScore;
    }
   }
   
});

document.querySelector('.button-hold').addEventListener('click', () => {
    if(gamePlaying) {
        let winner = 'Winner!';
        //Update the global Score
        scores[activePlayer]+= roundScore;
        globalScore = scores[activePlayer];
        if(globalScore >= 100) {
            document.querySelector('.glb-' + activePlayer).textContent = globalScore;
            document.querySelector('.scorebox' + activePlayer).classList.add('winner');
            document.querySelector('.player' + activePlayer).textContent = winner;
            document.querySelector('.player' + activePlayer).style.fontSize = '45px';

            gamePlaying = false;
        } else {
            
            //Display the global Score
            document.querySelector('.glb-' + activePlayer).textContent = globalScore;
            nextPlayer();

        }

    }
    

 });

document.querySelector('.button-reset').addEventListener('click', init);

//   //Get random dice numbers
//     let dice1 =Math.floor (Math.random()*6) +1;
//     let dice2 =Math.floor (Math.random()*6) +1;

    
//     Display the dice
//         document.querySelector('.dice1').src ='./dice-' + dice1 + '.png';
//         document.querySelector('.dice2').src ='./dice-' + dice2 + '.png';

//     Update Score of Player

//     Change player
  





