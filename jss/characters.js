function toggle_information(
  tormundToggle, yrgitteToggle,
  johnToggle, sansaToggle,
  aryaToggle, tyrionToggle,
  cerceiToggle, jamieToggle,
  daeneyrsToggle, khalToggle) {

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


function imageLarge() {
  document.getElementById('arya').style.height = "500px";
}


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

function createPlayerInfo(result, id) {
  var playerInfo = document.getElementById(id);
  var displayPlayer = '<h2 class="[ characterName--small ]">Title: ' + result.titles[0] + '</h2>' +
    '<p class="[ characterText ]"><span class="[ characterText--color ]">Culture: </span>' + result.culture + '</p>' +
    '<p class="[ characterText ]"><span class="[ characterText--color ]">Gender: </span> ' + result.gender + '</p>' +
    '<p class="[ characterText ]"><span class="[ characterText--color ]">Aliases: </span>' + result.aliases + '</p>';
  playerInfo.innerHTML += displayPlayer;
};

getCharacterData('https://www.anapioficeandfire.com/api/characters/2024', "tormundToggle");
getCharacterData('https://www.anapioficeandfire.com/api/characters/2026', "yrgitteToggle");
getCharacterData('https://www.anapioficeandfire.com/api/characters/583', "johnToggle");
getCharacterData('https://www.anapioficeandfire.com/api/characters/957', "sansaToggle");
getCharacterData('https://www.anapioficeandfire.com/api/characters/148', "aryaToggle");
getCharacterData('https://www.anapioficeandfire.com/api/characters/1052', "tyrionToggle");
getCharacterData('https://www.anapioficeandfire.com/api/characters/238', "cerceiToggle");
getCharacterData('https://www.anapioficeandfire.com/api/characters/529', "jamieToggle");
getCharacterData('https://www.anapioficeandfire.com/api/characters/271', "daeneyrsToggle");
getCharacterData('https://www.anapioficeandfire.com/api/characters/1278', "khalToggle");
