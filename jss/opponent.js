//VARIABLES
var countCharacters = 1;

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

//FETCH functions
function getPlayerTwo(Url, id) {
  fetch(Url)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      console.log(result);
      createPlayerTwo(result, id);
    });
}

//FUNCTIONS
function activeButton(){
  var oppnentSelected = document.getElementById('opponent');
  oppnentSelected.classList.add("btn--primary");
  oppnentSelected.innerHTML = '<i class="[ fa fa-check ] [ validation ]"></i>';
}

//Create players
function createPlayerTwo(result, id){
  var playerTwoInfo = document.getElementById(id);
  var displayPlayerTwo =
  '<div class="row"> <div class="[ player ]"> <div class="[ col-xs-1 ]">'+
  '<img class="[ player__image ] [ animated fadeInUp ]" src="images/' + result.name + '-avatar.jpg" alt="'+ result.name +'"></div>'+
  '<div class="[ col-xs-11 ][ player--border ]">'+
  '<h4 class=" [ animated fadeInUp ]"><span class="[ player__character player__character--wildlings ]">'+ result.name + '</span> </h4>'+
  '<h3 class="[ player__name ]">Player Two</h3>'+
  '<a class="[ btn btn--small btn--second ][ animated fadeInUp ]" id="'+ result.name +'" onclick="selectPlayerTwo("'+ result.name +'")">Select</a>'+
  '</div>'+ '</div>'+ '</div>'+ '</div>'+ '<div class="[ row ]">'+ '<div class="[ col-sm-12 ][ border ]"></div>'+
  '</div>';
  playerTwoInfo.innerHTML += displayPlayerTwo;
};

getPlayerTwo('https://www.anapioficeandfire.com/api/characters/2024', "playerTwo");
getPlayerTwo('https://www.anapioficeandfire.com/api/characters/2126', "playerTwo");
getPlayerTwo('https://www.anapioficeandfire.com/api/characters/583', "playerTwo");
getPlayerTwo('https://www.anapioficeandfire.com/api/characters/957', "playerTwo");
getPlayerTwo('https://www.anapioficeandfire.com/api/characters/148', "playerTwo");
getPlayerTwo('https://www.anapioficeandfire.com/api/characters/1052', "playerTwo");
getPlayerTwo('https://www.anapioficeandfire.com/api/characters/238', "playerTwo");
getPlayerTwo('https://www.anapioficeandfire.com/api/characters/529', "playerTwo");
getPlayerTwo('https://www.anapioficeandfire.com/api/characters/271', "playerTwo");
getPlayerTwo('https://www.anapioficeandfire.com/api/characters/1278', "playerTwo");
