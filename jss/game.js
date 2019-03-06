
function createTile(){
    var createTile ='<div id="' + this.id + '" class="[ tile ]" data-tilenumber="' + this.number + '">' + '</div>';
    document.getElementById('displayTiles').innerHTML += createTile;
}

//CREATE TILES
function tileData(number, id){
    this.number = number;
    this.id = id;
    this.createTile = createTile;
}

//CREATE PLAYER TOKENS
//creating new tokens
function createTokens(){
    var token = '<img class="[ player__image player__image--token player__image--'+this.name+' ]" id="'+this.id+'" data-name="'+ this.name +'" data-number="'+ this.number +'" src="images/'+ this.name +'.jpg">';
    document.getElementById('playerToken').innerHTML += token;
}

//Player object
function player(name, number, id ){
    this.name = name;
    this.number = number;
    this.id = id;
    this.createTokens = createTokens;
};

var playerOne = new player(localStorage.key(0), 0, "playerOne");
var playerTwo = new player(localStorage.key(1), 0, "playerTwo");

//Create player
playerOne.createTokens();
playerTwo.createTokens();
console.log(playerOne);
console.log(playerTwo);

//CREATE CANVAS FOR DICE
function createDiceCanvas(){
  var createCanvas ='<canvas class="[ dice__canvas ][ animated tada ]" id="canvas" width="140" height="140">Your browser does not support Canvas</canvas>'
  document.getElementById('dice').innerHTML += createCanvas;
}

function delayElement(element, displayType, delayTime) {
    element.style.display = 'none';
    setTimeout(function(){
        element.style.display = displayType;
    }, delayTime)
}

//CHECK IF NUMBER IS EVEN
function evenNumber(n) {
   return n % 2 == 0;
}

var countClicks = 0;
var playerOneSelect = document.getElementById("playerOne");
var playerTwoSelect = document.getElementById("playerTwo");

function playGame(){
    const max = 6;
    var roll = Math.ceil(Math.random()* max);
    console.log("your rolled " + roll);

    function activePlayer(playerNr, playerId){
        playerNr.number = playerNr.number + roll;
        console.log(playerNr.name + " new number = " + playerNr.number);
        playerId.dataset.number = playerNr.number;
        console.log("datasetnr" + playerId.dataset.number);


      if(roll === 6){
          countClicks += 0;
          console.log("Clicks on button = " + countClicks);
          //add message to trow again
          document.getElementById('diceRoll').innerHTML = 'Roll again';

          if(playerId.dataset.number >= 31){
              var winner = document.getElementById('diceRoll');
              winner.classList.add("btn--default");
              document.getElementById('canvas').style.display = "none";
          }
        } else{
            //count number of clicks on button to decide wich turn it is
            countClicks += 1;
            console.log("Clicks on button =  " + countClicks);
        }
            console.log(playerNr.number);

            var rollDiceBtn = document.getElementById("diceRoll");
            switch (playerNr.number) {
            case 1:
                delayElement(rollDiceBtn, 'block', 3000);
            break;
            case 2:
                delayElement(rollDiceBtn, 'block', 3000);
            break;
            case 3:
                delayElement(rollDiceBtn, 'block', 3000);
            break;
            case 4:
                delayElement(rollDiceBtn, 'block', 3000);
            break;
            case 5:
                delayElement(rollDiceBtn, 'block', 3000);
            break;
            case 6:
                delayElement(rollDiceBtn, 'block', 3000);
            break;
            case 8:
                delayElement(rollDiceBtn, 'block', 3000);
            break;
            case 8:
                delayElement(rollDiceBtn, 'block', 3000);
            break;
            case 10:
                delayElement(rollDiceBtn, 'block', 3000);
            break;
            case 11:
                delayElement(rollDiceBtn, 'block', 3000);
            break;
            case 12:
                delayElement(rollDiceBtn, 'block', 3000);
            break;
            case 13:
                delayElement(rollDiceBtn, 'block', 3000);
            break;
            case 14:
                delayElement(rollDiceBtn, 'block', 3000);
            break;
            case 15:
                delayElement(rollDiceBtn, 'block', 3000);
            break;
            case 16:
                delayElement(rollDiceBtn, 'block', 3000);
            break;
            case 17:
                delayElement(rollDiceBtn, 'block', 3000);
            break;
            case 18:
                delayElement(rollDiceBtn, 'block', 3000);
            break;
            break;
            case 19:
                delayElement(rollDiceBtn, 'block', 3000);
            break;
            break;
            case 20:
                delayElement(rollDiceBtn, 'block', 3000);
            break;
            break;
            case 21:
                delayElement(rollDiceBtn, 'block', 3000);
            break;
            break;
            case 23:
                delayElement(rollDiceBtn, 'block', 3000);
            break;
            case 24:
                delayElement(rollDiceBtn, 'block', 3000);
            break;
            case 25:
                delayElement(rollDiceBtn, 'block', 3000);
            break;
            case 26:
                delayElement(rollDiceBtn, 'block', 3000);
            break;
            case 27:
                delayElement(rollDiceBtn, 'block', 3000);
            break;
            case 28:
                delayElement(rollDiceBtn, 'block', 3000);
            break;
            case 29:
                delayElement(rollDiceBtn, 'block', 3000);
            break;
            case 30:
                delayElement(rollDiceBtn, 'block', 3000);
            break;
            default:

          }
      };

    //  var activePlayerOne = document.getElementById("activePlayerOne");
    //  var activePlayerTwo = document.getElementById("activePlayerTwo");
      if(evenNumber(countClicks)){

          activePlayer(playerOne, playerOneSelect);
          console.log('player one is active');
          if(playerOneSelect.dataset.number >= 31){
              localStorage.removeItem(localStorage.key(1));
              relocateWinner();
          }

      } else {
          activePlayer(playerTwo, playerTwoSelect);
          console.log('player two is active');

          if(playerTwoSelect.dataset.number >= 31){
              playerTwoSelect.removeItem(localStorage.key(0));
              relocateWinner();
          }
      }


    function rondRect(x, y, w, h, radius){ // refrence: https://www.scriptol.com/html5/canvas/rounded-rectangle.php
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    var r = x + w;
    var b = y + h;
    //clear out previous dice
    ctx.clearRect(0,0,140,140);

      //create dice square
      ctx.beginPath();
      ctx.fillStyle="#F3F3F3";
      ctx.strokeStyle="#B5B5B5";
      ctx.lineWidth="4";
      ctx.moveTo(x+radius, y);
      ctx.lineTo(r-radius, y);
      ctx.quadraticCurveTo(r, y, r, y+radius);
      ctx.lineTo(r, y+h-radius);
      ctx.quadraticCurveTo(r, b, r-radius, b);
      ctx.lineTo(x+radius, b);
      ctx.quadraticCurveTo(x, b, x, b-radius);
      ctx.lineTo(x, y+radius);
      ctx.quadraticCurveTo(x, y, x+radius, y);
      ctx.stroke();
      ctx.fill();
      }

  switch (roll) {
      case 1:
          createDiceCanvas();
          var canvas = document.getElementById('canvas');
          var ctx = canvas.getContext('2d');
            rondRect(20, 20, 100, 100, 20);

          //draw number on the dice
          ctx.beginPath();
          ctx.fillStyle = "black";
          ctx.arc(70, 70, 7, 0, Math.PI * 2, true);
          ctx.fill();
      break;
      case 2:
          createDiceCanvas();
          rondRect(20, 20, 100, 100, 20);
          var canvas = document.getElementById('canvas');
          var ctx = canvas.getContext('2d');

          //draw number on the dice
          ctx.beginPath();
          ctx.fillStyle = "black";
          ctx.arc(50, 50, 7, 0, Math.PI * 2, true);
          ctx.moveTo(95, 90);
          ctx.arc(90, 90, 7, 0, Math.PI * 2, true);
          ctx.fill();
      break;
      case 3:
          createDiceCanvas();
          rondRect(20, 20, 100, 100, 20);
          var canvas = document.getElementById('canvas');
          var ctx = canvas.getContext('2d');

          //draw number on the dice
          ctx.beginPath();
          ctx.fillStyle = "black";
          ctx.arc(50, 50, 7, 0, Math.PI * 2, true);
          ctx.moveTo(75, 70);
          ctx.arc(70, 70, 7, 0, Math.PI * 2, true);
          ctx.moveTo(95, 90);
          ctx.arc(90, 90, 7, 0, Math.PI * 2, true);
          ctx.fill();
      break;
      case 4:
          createDiceCanvas();
          rondRect(20, 20, 100, 100, 20);
          var canvas = document.getElementById('canvas');
          var ctx = canvas.getContext('2d');

          //draw number on the dice
          ctx.beginPath();
          ctx.fillStyle = "black";
          ctx.arc(50, 50, 7, 0, Math.PI * 2, true);
          ctx.moveTo(95, 50);
          ctx.arc(90, 50, 7, 0, Math.PI * 2, true);
          ctx.moveTo(55, 90);
          ctx.arc(50, 90, 7, 0, Math.PI * 2, true);
          ctx.moveTo(95, 90);
          ctx.arc(90, 90, 7, 0, Math.PI * 2, true);
          ctx.fill();
      break;
      case 5:
          createDiceCanvas();
          rondRect(20, 20, 100, 100, 20);
          var canvas = document.getElementById('canvas');
          var ctx = canvas.getContext('2d');

          //draw number on the dice
          ctx.beginPath();
          ctx.fillStyle = "black";
          ctx.arc(50, 50, 7, 0, Math.PI * 2, true);
          ctx.moveTo(95, 50);
          ctx.arc(90, 50, 7, 0, Math.PI * 2, true);
          ctx.moveTo(75, 70);
          ctx.arc(70, 70, 7, 0, Math.PI * 2, true);
          ctx.moveTo(55, 90);
          ctx.arc(50, 90, 7, 0, Math.PI * 2, true);
          ctx.moveTo(95, 90);
          ctx.arc(90, 90, 7, 0, Math.PI * 2, true);
          ctx.fill();
      break;
      case 6:
          createDiceCanvas();
          rondRect(20, 20, 100, 100, 20);
          var canvas = document.getElementById('canvas');
          var ctx = canvas.getContext('2d');

          //draw number on the dice
          ctx.beginPath();
          ctx.fillStyle = "black";
          ctx.arc(50, 50, 7, 0, Math.PI * 2, true);  // 1
          ctx.moveTo(95, 50);
          ctx.arc(90, 50, 7, 0, Math.PI * 2, true);  // 2
          ctx.moveTo(55, 70);
          ctx.arc(50, 70, 7, 0, Math.PI * 2, true);  // 3
          ctx.moveTo(55, 90);
          ctx.arc(50, 90, 7, 0, Math.PI * 2, true);  // 4
          ctx.moveTo(95, 70);
          ctx.arc(90, 70, 7, 0, Math.PI * 2, true);  // 5
          ctx.moveTo(95, 90);
          ctx.arc(90, 90, 7, 0, Math.PI * 2, true);  // 6
          ctx.fill();
      break;
      default:
          //clear out previous dice
          ctx.clearRect(0,0,140,140);
          console.log('There seem to be a problem, please try again later');
      }
}

//TILE INFORMATION
var tile1 = new tileData(1, 'tile1');
var tile2 = new tileData(2, 'tile2');
var tile3 = new tileData(3, 'tile3');
var tile4 = new tileData(4, 'tile6');
var tile5 = new tileData(5, 'tile5');
var tile6 = new tileData(6, 'tile6');
var tile7 = new tileData(7, 'tile7');
var tile8 = new tileData(8, 'tile8');
var tile9 = new tileData(9, 'tile9');
var tile10 = new tileData(10, 'tile10');
var tile11 = new tileData(11, 'tile11');
var tile12 = new tileData(12, 'tile12');
var tile13 = new tileData(13, 'tile13');
var tile14 = new tileData(14, 'tile14');
var tile15 = new tileData(15, 'tile15' );
var tile16 = new tileData(16, 'tile16');
var tile17 = new tileData(17, 'tile17');
var tile18 = new tileData(18, 'tile18');
var tile19 = new tileData(19, 'tile19');
var tile20 = new tileData(20, 'tile20');
var tile21 = new tileData(21, 'tile21');
var tile22 = new tileData(22, 'tile22');
var tile23 = new tileData(23, 'tile23');
var tile24 = new tileData(24, 'tile24');
var tile25 = new tileData(25, 'tile25');
var tile26 = new tileData(26, 'tile26');
var tile27 = new tileData(27, 'tile27');
var tile28 = new tileData(28, 'tile28');
var tile29 = new tileData(29, 'tile29');
var tile30 = new tileData(30, 'tile30');

tile1.createTile();
tile2.createTile();
tile3.createTile();
tile4.createTile();
tile5.createTile();
tile6.createTile();
tile7.createTile();
tile8.createTile();
tile9.createTile();
tile10.createTile();
tile11.createTile();
tile12.createTile();
tile13.createTile();
tile14.createTile();
tile15.createTile();
tile16.createTile();
tile17.createTile();
tile18.createTile();
tile19.createTile();
tile20.createTile();
tile21.createTile();
tile22.createTile();
tile23.createTile();
tile24.createTile();
tile25.createTile();
tile26.createTile();
tile27.createTile();
tile28.createTile();
tile29.createTile();
tile30.createTile();
