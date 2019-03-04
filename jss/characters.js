//Variables hide characters

var selecttormund = ['yrgittePlayer', 'johnPlayer', 'sansaPlayer', 'aryaPlayer', 'tyrionPlayer', 'cerceiPlayer', 'jamiePlayer', 'daeneyrsPlayer', 'khalPlayer'];
var selectyrgitte = ['tormundPlayer', 'johnPlayer', 'sansaPlayer', 'aryaPlayer', 'tyrionPlayer', 'cerceiPlayer', 'jamiePlayer', 'daeneyrsPlayer', 'khalPlayer'];
var selectjohn = ['tormundPlayer', 'yrgittePlayer', 'sansaPlayer', 'aryaPlayer', 'tyrionPlayer', 'cerceiPlayer', 'jamiePlayer', 'daeneyrsPlayer', 'khalPlayer'];
var selectsansa = ['tormundPlayer', 'yrgittePlayer', 'johnPlayer', 'aryaPlayer', 'tyrionPlayer', 'cerceiPlayer', 'jamiePlayer', 'daeneyrsPlayer', 'khalPlayer'];
var selectarya = ['tormundPlayer', 'yrgittePlayer', 'johnPlayer', 'sansaPlayer', 'tyrionPlayer', 'cerceiPlayer', 'jamiePlayer', 'daeneyrsPlayer', 'khalPlayer'];
var selecttyrion = ['tormundPlayer', 'yrgittePlayer', 'johnPlayer', 'sansaPlayer', 'aryaPlayer', 'cerceiPlayer', 'jamiePlayer', 'daeneyrsPlayer', 'khalPlayer'];
var selectcercei = ['tormundPlayer', 'yrgittePlayer', 'johnPlayer', 'sansaPlayer', 'aryaPlayer', 'tyrionPlayer', 'jamiePlayer', 'daeneyrsPlayer', 'khalPlayer'];
var selectjamie = ['tormundPlayer', 'yrgittePlayer', 'johnPlayer', 'sansaPlayer', 'aryaPlayer', 'tyrionPlayer', 'cerceiPlayer', 'daeneyrsPlayer', 'khalPlayer'];
var selectdaeneyrs = ['tormundPlayer', 'yrgittePlayer', 'johnPlayer', 'sansaPlayer', 'aryaPlayer', 'tyrionPlayer', 'cerceiPlayer', 'jamiePlayer', 'khalPlayer'];
var selectkhal = ['tormundPlayer', 'yrgittePlayer', 'johnPlayer', 'sansaPlayer', 'aryaPlayer', 'tyrionPlayer', 'cerceiPlayer', 'jamiePlayer', 'daeneyrsPlayer'];

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

//Toggle information
function toggle_information(characterInfo) {
  document.getElementById('tormundToggle').style.display = 'none';
  document.getElementById('yrgitteToggle').style.display = 'none';
  document.getElementById('johnToggle').style.display = 'none';
  document.getElementById('sansaToggle').style.display = 'none';
  document.getElementById('aryaToggle').style.display = 'none';
  document.getElementById('tyrionToggle').style.display = 'none';
  document.getElementById('cerceiToggle').style.display = 'none';
  document.getElementById('jamieToggle').style.display = 'none';
  document.getElementById('daeneyrsToggle').style.display = 'none';
  document.getElementById('khalToggle').style.display = 'none';
  var selectedCharacter = document.getElementById(characterInfo);

  if (selectedCharacter.style.display === "none") {
    selectedCharacter.style.display = "block";
  } else {
    selectedCharacter.style.display = "none";
  }
}
//API fetch and creating the cards

function getCharacterData(Url, id) {
  fetch(Url)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      console.log(result);
      createPlayerInfo(result, id);
    });
}

function getCharacterName(Url, id) {
  fetch(Url)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      console.log(result);
      createHeader(result, id);
    });
}

function createPlayerInfo(result, id) {
  var playerInfo = document.getElementById(id);
  var displayPlayer =
    '<i class="[ fa fa-times ] [ close ]" onclick="toggle_information()"></i><h2 class="[ characterName--small ]">Title: ' +
    result.titles[0] + '</h2>' +
    '<p class="[ characterText ]"><span class="[ characterText--color ]">Culture: </span>' + result.culture + '</p>' +
    '<p class="[ characterText ]"><span class="[ characterText--color ]">Gender: </span> ' + result.gender + '</p>' +
    '<p class="[ characterText ]"><span class="[ characterText--color ]">Aliases: </span>' + result.aliases + '</p></div>';
  playerInfo.innerHTML += displayPlayer;
};

function createHeader(result, id) {
  var replaceTitle = document.getElementById(id);
  replaceTitle.innerHTML = "You chose<br> " + result.name;
}

function changeHeader() {
  var reduzeTitle = document.querySelector('.headers');
  reduzeTitle.classList.add("headers__character");
}

getCharacterData('https://www.anapioficeandfire.com/api/characters/2024', "tormundToggle");
getCharacterData('https://www.anapioficeandfire.com/api/characters/2126', "yrgitteToggle");
getCharacterData('https://www.anapioficeandfire.com/api/characters/583', "johnToggle");
getCharacterData('https://www.anapioficeandfire.com/api/characters/957', "sansaToggle");
getCharacterData('https://www.anapioficeandfire.com/api/characters/148', "aryaToggle");
getCharacterData('https://www.anapioficeandfire.com/api/characters/1052', "tyrionToggle");
getCharacterData('https://www.anapioficeandfire.com/api/characters/238', "cerceiToggle");
getCharacterData('https://www.anapioficeandfire.com/api/characters/529', "jamieToggle");
getCharacterData('https://www.anapioficeandfire.com/api/characters/271', "daeneyrsToggle");
getCharacterData('https://www.anapioficeandfire.com/api/characters/1278', "khalToggle");

function removeTitle() {
  var removeName = document.querySelectorAll('.characterName');
  for (var i = 0; i < removeName.length; i++) {
    removeName[i].style.display = "none";
  }

  var removeHouse = document.querySelectorAll('.characterHouse');
  for (var i = 0; i < removeHouse.length; i++) {
    removeHouse[i].style.display = "none";
  }

  var symbolSize = document.querySelectorAll('.characters__symbol');
  for (var i = 0; i < symbolSize.length; i++) {
    symbolSize[i].style.width = "30%";
    symbolSize[i].style.position = "absolute";
    symbolSize[i].style.right = "20px";
  }
}

//Hide Buttons
function showButtons() {
  var buttons = document.getElementById('bottomHidden');
  buttons.style.display = "block";
}

//Select player
function displayPlayer(name) {
  document.getElementById(name).style.height = "45vh";
  document.getElementById(name).classList.add("animated");
  document.getElementById(name).classList.add("fadeInUp");
  document.getElementById(name).classList.add("slow");

  removeTitle();
  showButtons();
  changeHeader();
  switch (name) {
    case 'tormund':
      getCharacterName('https://www.anapioficeandfire.com/api/characters/2024', "header");
      addValuesToLocalStorage("playerTormund", name);
      for (var i = 0; i < selecttormund.length; i++) {
        document.getElementById(selecttormund[i]).style.display = "none";
      }
      break;
    case 'yrgitte':
      getCharacterName('https://www.anapioficeandfire.com/api/characters/2126', "header");
      addValuesToLocalStorage("playerYrgitte", name);
      for (var i = 0; i < selectyrgitte.length; i++) {
        document.getElementById(selectyrgitte[i]).style.display = "none";
      }
      break;
    case 'john':
      getCharacterName('https://www.anapioficeandfire.com/api/characters/583', "header");
      addValuesToLocalStorage("playerJohn", name);
      for (var i = 0; i < selectjohn.length; i++) {
        document.getElementById(selectjohn[i]).style.display = "none";
      }
      break;
    case 'sansa':
      getCharacterName('https://www.anapioficeandfire.com/api/characters/957', "header");
      addValuesToLocalStorage("playerSansa", name);
      for (var i = 0; i < selectsansa.length; i++) {
        document.getElementById(selectsansa[i]).style.display = "none";
      }
      break;
    case 'arya':
      getCharacterName('https://www.anapioficeandfire.com/api/characters/148', "header");
      addValuesToLocalStorage("playerArya", name);
      for (var i = 0; i < selectarya.length; i++) {
        document.getElementById(selectarya[i]).style.display = "none";
      }
      break;
    case 'tyrion':
      getCharacterName('https://www.anapioficeandfire.com/api/characters/1052', "header");
      addValuesToLocalStorage("playerTyrion", name);
      for (var i = 0; i < selecttyrion.length; i++) {
        document.getElementById(selecttyrion[i]).style.display = "none";
      }
      break;
    case 'cercei':
      getCharacterName('https://www.anapioficeandfire.com/api/characters/238', "header");
      addValuesToLocalStorage("playerCercei", name);
      for (var i = 0; i < selectcercei.length; i++) {
        document.getElementById(selectcercei[i]).style.display = "none";
      }
      break;
    case 'jamie':
      getCharacterName('https://www.anapioficeandfire.com/api/characters/529', "header");
      addValuesToLocalStorage("playerJamie", name);
      for (var i = 0; i < selectjamie.length; i++) {
        document.getElementById(selectjamie[i]).style.display = "none";
      }
      break;
    case 'daeneyrs':
      getCharacterName('https://www.anapioficeandfire.com/api/characters/271', "header");
      addValuesToLocalStorage("playerDaeneyrs", name);
      for (var i = 0; i < selectdaeneyrs.length; i++) {
        document.getElementById(selectdaeneyrs[i]).style.display = "none";
      }
      break;
    case 'khal':
      getCharacterName('https://www.anapioficeandfire.com/api/characters/1278', "header");
      addValuesToLocalStorage("playerKhal", name);
      for (var i = 0; i < selectkhal.length; i++) {
        document.getElementById(selectkhal[i]).style.display = "none";
      }
      break;
    default:
      console.log('There seem to be a problem, please try again later');
  }
}
