//Variables hide characters
var selectTormund = ['yrgitte', 'john', 'sansa', 'arya', 'tyrion', 'cercei', 'jamie', 'daeneyrs', 'khal']
var selectYrgitte = ['tormund', 'john', 'sansa', 'arya', 'tyrion', 'cercei', 'jamie', 'daeneyrs', 'khal']
var selectJohn = ['tormund', 'yrgitte', 'sansa', 'arya', 'tyrion', 'cercei', 'jamie', 'daeneyrs', 'khal']
var selectSansa = ['tormund', 'yrgitte', 'john', 'arya', 'tyrion', 'cercei', 'jamie', 'daeneyrs', 'khal']
var selectArya = ['tormund', 'yrgitte', 'john', 'sansa', 'tyrion', 'cercei', 'jamie', 'daeneyrs', 'khal']
var selectTyrion = ['tormund', 'yrgitte', 'john', 'sansa', 'arya', 'cercei', 'jamie', 'daeneyrs', 'khal']
var selectCercei = ['tormund', 'yrgitte', 'john', 'sansa', 'arya', 'tyrion', 'jamie', 'daeneyrs', 'khal']
var selectJamie = ['tormund', 'yrgitte', 'john', 'sansa', 'arya', 'tyrion', 'cercei', 'daeneyrs', 'khal']
var selectDaeneyrs = ['tormund', 'yrgitte', 'john', 'sansa', 'arya', 'tyrion', 'cercei', 'jamie', 'khal']
var selectKhal = ['tormund', 'yrgitte', 'john', 'sansa', 'arya', 'tyrion', 'cercei', 'jamie', 'daeneyrs']

//Charactercount
var countCharacters = 0;


// Local storage functions
function resetLocalStorage(){
    localStorage.clear();
};

function addValuesToLocalStorage(key, value){
    localStorage.setItem(key, value);
};

function removeValueFromLocalStorage(key){
    localStorage.removeItem(key);
};


// Toggeling API information
function toggle_information(tormundToggle, yrgitteToggle, johnToggle, sansaToggle, aryaToggle, tyrionToggle, cerceiToggle, jamieToggle, daeneyrsToggle, khalToggle) {

  var tormund = document.getElementById(tormundToggle);
  var yrgitte = document.getElementById(yrgitteToggle);
  var john = document.getElementById(johnToggle);
  var sansa = document.getElementById(sansaToggle);
  var arya = document.getElementById(aryaToggle);
  var tyrion = document.getElementById(tyrionToggle);
  var cercei = document.getElementById(cerceiToggle);
  var jamie = document.getElementById(jamieToggle);
  var daenerys = document.getElementById(daeneyrsToggle);
  var khal = document.getElementById(khalToggle);


  if (tormund.style.display === "none")
    tormund.style.display = "block";
  else
    tormund.style.display = "none";

  if (yrgitte.style.display === "none")
    yrgitte.style.display = "block";
  else
    yrgitte.style.display = "none";

  if (john.style.display === "none")
    john.style.display = "block";
  else
    john.style.display = "none";

  if (sansa.style.display === "none")
    sansa.style.display = "block";
  else
    sansa.style.display = "none";

  if (arya.style.display === "none")
    arya.style.display = "block";
  else
    arya.style.display = "none";

  if (tyrion.style.display === "none")
    tyrion.style.display = "block";
  else
    tyrion.style.display = "none";

  if (cercei.style.display === "none")
    cercei.style.display = "block";
  else
    cercei.style.display = "none";

  if (jamie.style.display === "none")
    jamie.style.display = "block";
  else
    jamie.style.display = "none";

  if (daenerys.style.display === "none")
    daenerys.style.display = "block";
  else
    daenerys.style.display = "none";

  if (khal.style.display === "none")
    khal.style.display = "block";
  else
    khal.style.display = "none";
}

//API fetch and creating the cards

function getCharacterData(Url, id) {
  fetch(Url, {
      mode: 'cors'
    })
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      console.log(result);
      createPlayerInfo(result, id);
    });
}

function getCharacterName(Url, id) {
  fetch(Url, {
      mode: 'cors'
    })
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
  var displayPlayer = '<h2 class="[ characterName--small ]">Title: ' + result.titles[0] + '</h2>' +
    '<p class="[ characterText ]"><span class="[ characterText--color ]">Culture: </span>' + result.culture + '</p>' +
    '<p class="[ characterText ]"><span class="[ characterText--color ]">Gender: </span> ' + result.gender + '</p>' +
    '<p class="[ characterText ]"><span class="[ characterText--color ]">Aliases: </span>' + result.aliases + '</p></div>';
  playerInfo.innerHTML += displayPlayer;
};

function createHeader(result, id) {
  var replaceTitle = document.getElementById(id);
  replaceTitle.innerHTML = "You chose<br> " + result.name;
}

function changeHeader(){
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
    symbolSize[i].style.width = "35%";
    symbolSize[i].style.float = "none";
    symbolSize[i].style.display = "block";
    symbolSize[i].style.margin = "0 auto";
    symbolSize[i].style.paddingTop = "160px";
  }
}

//Hide Buttons
function showButtons() {
  var buttons = document.getElementById('bottomHidden');
  buttons.style.display = "block";
}


//Select player

function playerTormund(tormund, character) {
  var t = document.querySelector('.characters__tormund');
  t.style.height = "45vh";
  t.classList.add("animated");
  t.classList.add("fadeInUp");
  t.classList.add("slow");
  getCharacterName('https://www.anapioficeandfire.com/api/characters/2024', "header");
  removeTitle();
  showButtons();
  changeHeader();
  addValuesToLocalStorage("playerTormund", character);
  countCharacters = countCharacters + 1;
  console.log(countCharacters);

  for (var i = 0; i < selectTormund.length; i++) {
    document.getElementById(selectTormund[i]).style.display = "none";
  }
}

function playerYrgitte(yrgitte, character) {
  var y = document.querySelector('.characters__yrgitte');
  y.style.height = "45vh";
  y.classList.add("animated");
  y.classList.add("fadeInUp");
  y.classList.add("slow");
  getCharacterName('https://www.anapioficeandfire.com/api/characters/2126', "header");
  removeTitle();
  showButtons();
  changeHeader();
  addValuesToLocalStorage("playerYrgitte", character);
  countCharacters = countCharacters + 1;
  console.log(countCharacters);

  for (var i = 0; i < selectYrgitte.length; i++) {
    document.getElementById(selectYrgitte[i]).style.display = "none";
  }
}

function playerJohn(john, character) {
  var j = document.querySelector('.characters__john');
  j.style.height = "45vh";
  j.classList.add("animated");
  j.classList.add("fadeInUp");
  j.classList.add("slow");
  getCharacterName('https://www.anapioficeandfire.com/api/characters/583', "header");
  removeTitle();
  showButtons();
  changeHeader();
  addValuesToLocalStorage("playerJohn", character);
  countCharacters = countCharacters + 1;
  console.log(countCharacters);

  for (var i = 0; i < selectJohn.length; i++) {
    document.getElementById(selectJohn[i]).style.display = "none";
  }
}

function playerSansa(sansa, character) {
  var s = document.querySelector('.characters__sansa');
  s.style.height = "45vh";
  s.classList.add("animated");
  s.classList.add("fadeInUp");
  s.classList.add("slow");
  getCharacterName('https://www.anapioficeandfire.com/api/characters/957', "header");
  removeTitle();
  showButtons();
  changeHeader();
  addValuesToLocalStorage("playerSansa", character);
  countCharacters = countCharacters + 1;
  console.log(countCharacters);

  for (var i = 0; i < selectSansa.length; i++) {
    document.getElementById(selectSansa[i]).style.display = "none";
  }
}

function playerArya(arya, character) {
  var a = document.querySelector('.characters__arya');
  a.style.height = "45vh";
  a.classList.add("animated");
  a.classList.add("fadeInUp");
  a.classList.add("slow");
  getCharacterName('https://www.anapioficeandfire.com/api/characters/148', "header");
  removeTitle();
  showButtons();
  changeHeader();
  addValuesToLocalStorage("playerArya", character);
  countCharacters = countCharacters + 1;
  console.log(countCharacters);

  for (var i = 0; i < selectArya.length; i++) {
    document.getElementById(selectArya[i]).style.display = "none";
  }
}

function playerTyrion(tyrion, character) {
  var ty = document.querySelector('.characters__tyrion');
  ty.style.height = "45vh";
  ty.classList.add("animated");
  ty.classList.add("fadeInUp");
  ty.classList.add("slow");
  getCharacterName('https://www.anapioficeandfire.com/api/characters/1052', "header");
  removeTitle();
  showButtons();
  changeHeader();
  addValuesToLocalStorage("playerTyrion", character);
  countCharacters = countCharacters + 1;
  console.log(countCharacters);

  for (var i = 0; i < selectTyrion.length; i++) {
    document.getElementById(selectTyrion[i]).style.display = "none";
  }
}

function playerCercei(cercei, character) {
  var c = document.querySelector('.characters__cercei');
  c.style.height = "45vh";
  c.classList.add("animated");
  c.classList.add("fadeInUp");
  c.classList.add("slow");
  getCharacterName('https://www.anapioficeandfire.com/api/characters/238', "header");
  removeTitle();
  showButtons();
  changeHeader();
  addValuesToLocalStorage("playerCercei", character);
  countCharacters = countCharacters + 1;
  console.log(countCharacters);

  for (var i = 0; i < selectCercei.length; i++) {
    document.getElementById(selectCercei[i]).style.display = "none";
  }
}

function playerJamie(jamie, character) {
  var ja = document.querySelector('.characters__jamie');
  ja.style.height = "45vh";
  ja.classList.add("animated");
  ja.classList.add("fadeInUp");
  ja.classList.add("slow");
  getCharacterName('https://www.anapioficeandfire.com/api/characters/529', "header");
  removeTitle();
  showButtons();
  changeHeader();
  addValuesToLocalStorage("playerJamie", character);
  countCharacters = countCharacters + 1;
  console.log(countCharacters);

  for (var i = 0; i < selectJamie.length; i++) {
    document.getElementById(selectJamie[i]).style.display = "none";
  }
}

function playerDaeneyrs(daeneyrs, character) {
  var d = document.querySelector('.characters__daeneyrs');
  d.style.height = "45vh";
  d.classList.add("animated");
  d.classList.add("fadeInUp");
  d.classList.add("slow");
  getCharacterName('https://www.anapioficeandfire.com/api/characters/271', "header");
  removeTitle();
  showButtons();
  changeHeader();
  addValuesToLocalStorage("playerDaeneyrs", character);
  countCharacters = countCharacters + 1;
  console.log(countCharacters);

  for (var i = 0; i < selectDaeneyrs.length; i++) {
    document.getElementById(selectDaeneyrs[i]).style.display = "none";
  }
}

function playerKhal(khal, character) {
  var k = document.querySelector('.characters__khal');
  k.style.height = "45vh";
  k.classList.add("animated");
  k.classList.add("fadeInUp");
  k.classList.add("slow");
  getCharacterName('https://www.anapioficeandfire.com/api/characters/1278', "header");
  removeTitle();
  showButtons();
  changeHeader();
  addValuesToLocalStorage("playerKhal", character);
  countCharacters = countCharacters + 1;
  console.log(countCharacters);

  for (var i = 0; i < selectKhal.length; i++) {
    document.getElementById(selectKhal[i]).style.display = "none";
  }
}

/*function deleteButton(removeBtn){
  var removeBtn = document.querySelectorAll('.btn__moreinfo');
  var i;
  for (i = 0; i < removeBtn.length; i++) {
  removeBtn[i].style.display = "none";
}*/
