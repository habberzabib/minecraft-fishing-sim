//MINECRAFT FISH SIM

//HTML VAR
let resultImg = document.getElementById("result-img");
let numCodSpan = document.getElementById("num-cod");
let numSalmonSpan = document.getElementById("num-salmon");
let numTropicalSpan = document.getElementById("num-tropical");
let numPufferSpan = document.getElementById("num-puffer");

//FISH COUNT VARIABLES
let numCod = 0;
let numSalmon = 0;
let numTropical = 0;
let numPuffer = 0;

// FISH BUTTON EVENT LISTENER
document.getElementById("fish-btn").addEventListener("click", fishBtnClicked);

function fishBtnClicked() {
  //CHARACTER SELECTION
  let character = document.getElementById("character-select").value;

  if (character === "steve") {
    //FISH WITH STEVE
    let randNum = Math.random();
    if (randNum < 0.7) {
      resultImg.src = "img/Raw-Cod.png";
      numCod++;
      numCodSpan.innerHTML = numCod;
    } else if (randNum < 0.9 && randNum > 0.7) {
      resultImg.src = "img/Raw-Salmon.png";
      numSalmon++;
      numSalmonSpan.innerHTML = numSalmon;
    } else if (randNum > 0.9 && randNum < 0.95) {
      resultImg.src = "img/Tropical-Fish.png";
      numTropical++;
      numTropicalSpan.innerHTML = numTropical;
    } else if (randNum > 0.95) {
      resultImg.src = "img/Pufferfish.png";
      numPuffer++;
      numPufferSpan.innerHTML = numPuffer;
    } else {
      resultImg.src = "img/Fishing-Rod.png";
    }
  } else if (character === "alex") {
    //FISH WITH ALEX
    let randNum = Math.random();
    if (randNum < 0.1) {
      resultImg.src = "img/Raw-Cod.png";
      numCod++;
      numCodSpan.innerHTML = numCod;
    } else if (randNum < 0.2 && randNum > 0.1) {
      resultImg.src = "img/Raw-Salmon.png";
      numSalmon++;
      numSalmonSpan.innerHTML = numSalmon;
    } else if (randNum > 0.2 && randNum < 0.5) {
      resultImg.src = "img/Tropical-Fish.png";
      numTropical++;
      numTropicalSpan.innerHTML = numTropical;
    } else if (randNum > 0.5) {
      resultImg.src = "img/Pufferfish.png";
      numPuffer++;
      numPufferSpan.innerHTML = numPuffer;
    } else {
      resultImg.src = "img/Fishing-Rod.png";
    }
  } else {
    //FISH WITH VILLAGER
    let randNum = Math.random();
    if (randNum < 0.25) {
      resultImg.src = "img/Raw-Cod.png";
      numCod++;
      numCodSpan.innerHTML = numCod;
    } else if (randNum < 0.5 && randNum > 0.25) {
      resultImg.src = "img/Raw-Salmon.png";
      numSalmon++;
      numSalmonSpan.innerHTML = numSalmon;
    } else if (randNum > 0.5 && randNum < 0.75) {
      resultImg.src = "img/Tropical-Fish.png";
      numTropical++;
      numTropicalSpan.innerHTML = numTropical;
    } else if (randNum > 0.75) {
      resultImg.src = "img/Pufferfish.png";
      numPuffer++;
      numPufferSpan.innerHTML = numPuffer;
    } else {
      resultImg.src = "img/Fishing-Rod.png";
    }
  }
}
