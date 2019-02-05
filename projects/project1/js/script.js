/*****************

project1
Will Graham-Simpkins

******************/
let $spans;
let rockDistance;
let powerLevel;

$(document).ready(setup);

function setup() {
  powerLevel = 1;
  rockDistance = 0;
  $spans = $('span');
  $("#rockDistance").text(rockDistance);
  $("#powerLevel").text(powerLevel);
  setInterval(update,100);
  setInterval(powerDrain,500);
  $('span.push').on('click',pushClick);
  $('span.focus').on('click',powerClick);

}

function pushClick() {
  rockDistance += powerLevel;
}

function powerClick() {
  powerLevel++;
}

function powerDrain() {
  powerLevel--;
}

function update() {
  if (rockDistance < 0) {
    rockDistance = 0;
  }
  $("#rockDistance").text(rockDistance);
  $("#powerLevel").text(powerLevel);
}
