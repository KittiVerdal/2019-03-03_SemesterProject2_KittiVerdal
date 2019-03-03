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

//choose opponent
function selectOpponent(){
  var oppnentSelected = document.getElementById('opponent');
  oppnentSelected.classList.add("btn--primary");
  oppnentSelected.innerHTML = '<i class="[ fa fa-check ] [ validation ]"></i>';

}
