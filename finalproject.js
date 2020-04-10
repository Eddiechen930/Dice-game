
var scores, finalscore, player, diceroll, Playing;
init();
document.querySelector('.roll').addEventListener('click', function () {

  if (Playing) {

    var dice1 = Math.floor(Math.random() * 6) + 1;
    var dice2 = Math.floor(Math.random() * 6) + 1;

    document.getElementById('dice1').style.display = 'block';
    document.getElementById('dice2').style.display = 'block';
    document.getElementById('dice1').src = 'dice-' + dice1 + '.png';
    document.getElementById('dice2').src = 'dice-' + dice2 + '.png';
    
  if(dice1 === 6 && diceroll === 6) {
      scores[player] = 0;
      document.querySelector('#score-' + player).textContent = '0';
      nextPlayer();
  } else if (dice1 !== 1 && dice2 !== 1) {
      finalscore += dice1 + dice2;
      document.querySelector('#current-' + player).textContent = finalscore;
  } else {
      nextPlayer();
  }
  diceroll = dice1;

  }

});

document.querySelector('.hold').addEventListener('click', function () {  
  if (Playing) {
    scores[player] += finalscore;
    document.querySelector('#score-' + player).textContent = scores[player];
    if (scores[player] >= winningScore) {
      document.querySelector('#name' + player).textContent = 'Winner!';
      document.getElementById('dice1').style.display = 'none';
      document.getElementById('dice2').style.display = 'none';
      document.querySelector('.player-' + player + '-panel').classList.add('winner');
      document.querySelector('.player-' + player + '-panel').classList.remove('active');
      Playing = false;
    } else {
      nextPlayer();
    }
  }
});
  var input = document.getSelector('input-score').value;
  var lastscore;
  if(input) {
    lastscore = input;
  } else {
    lastscore = 100;
  }
  if (scores[player] >= lastscore) {
    document.querySelector('#name-' + player).textContent = 'Winner!';
    document.getElementById('dice1').style.display = 'none';
    document.getElementById('dice2').style.display = 'none';
    document.querySelector('.player-' + player + '-panel').classList.add('winner');
    document.querySelector('.player-' + player + '-panel').classList.remove('active');
    Playing = false;
  } else {
    nextPlayer();
  }

var input = document.querySelector('.input-score')
if(input >= 100){
  document.querySelector('#name-' + player).textContent = 'Winner!';
}

function init() {
  Playing = true;
  scores = [0, 0];
  player = 0;
  finalscore = 0;
  document.getElementById('dice1').style.display = 'none';
  document.getElementById('dice2').style.display = 'none';
  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.getElementById('name-0').textContent = 'Player 1';
  document.getElementById('name-1').textContent = 'Player 2';
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');

}

function nextPlayer() {
  player === 0 ? player = 1 : player = 0;
  finalscore = 0;
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');
  document.getElementById('dice1').style.display = 'none';
  document.getElementById('dice2').style.display = 'none';

}