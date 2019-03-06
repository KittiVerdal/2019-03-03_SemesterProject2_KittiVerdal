//VARIABLES
var countCharacters = 0;

// Local storage functions
function resetLocalStorage() {
  localStorage.clear();
};

function addValuesToLocalStorage(key, value) {
  localStorage.setItem(key, value);
};

function removeValueFromLocalStorage(key) {
  localStorage.removeItem(key);
};

//START GAME BUTTON
var twoPlayers = false;
var startGame = document.getElementById("startGame");
startGame.addEventListener(
  "click",
  function() {
    if (localStorage.length === 2) {
      twoPlayers = true;
      window.location.href = 'game.html';
    }
    if (twoPlayers == false) {
      document.getElementById('warning').style.display = "block";
    }
  }
);


//CHOOSE PLAYER TWO
function selectPlayerTwo(name) {
  function changeButton() {
    document.getElementById('warning').style.display = "none";
    var bottomButton = document.getElementById('startGame');
    var opponentSelected = document.getElementById('opponent' + name);
    opponentSelected.classList.add("btn--primary");
    bottomButton.classList.add("btn--primary");
    opponentSelected.innerHTML = '<i class="[ fa fa-check ] [ validation ]"></i>';
    addValuesToLocalStorage('Player' + name, name);
  }
  function removeValue() {
    var opponentDelete = document.getElementById('opponent' + name);
    var bottomButton = document.getElementById('startGame');
    opponentDelete.classList.remove("btn--primary");
    bottomButton.classList.remove("btn--primary");
    opponentDelete.innerHTML = 'Select';
    removeValueFromLocalStorage('Player' + name, name);
  }
  switch (name) {
    case 'ygritte':
      if (localStorage.length === 1) {
        changeButton();
      } else {
        removeValue();
      }
      break;
    case 'jon':
      if (localStorage.length === 1) {
        changeButton();
      } else {
        removeValue();
      }
      break;
    case 'sansa':
      if (localStorage.length === 1) {
        changeButton();
      } else {
        removeValue();
      }
      break;
    case 'arya':
      if (localStorage.length === 1) {
        changeButton();
      } else {
        removeValue();
      }
      break;
    case 'tormund':
      if (localStorage.length === 1) {
        changeButton();
      } else {
        removeValue();
      }
      break;
    case 'cercei':
      if (localStorage.length === 1) {
        changeButton();
      } else {
        removeValue();
      }
      break;
    case 'daenerys':
      if (localStorage.length === 1) {
        changeButton();
      } else {
        removeValue();
      }
      break;
    case 'tyrion':
      if (localStorage.length === 1) {
        changeButton();
      } else {
        removeValue();
      }
      break;
    case 'jamie':
      if (localStorage.length === 1) {
        changeButton();
      } else {
        removeValue();
      }
      break;
    case 'khal':
      if (localStorage.length === 1) {
        changeButton();
      } else {
        removeValue();
      }
      break;
    default:
      console.log('There seem to be a problem, please try again later');
  }
}
