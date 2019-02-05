/*****************

project1
Will Graham-Simpkins

******************/
let $spans;
let rockDistance;
let powerLevel;

$(document).ready(setup);

function setup() {
  powerLevel = 0;
  rockDistance = 0;
  $("#rockDistance").text(rockDistance);
  $("#powerLevel").text(powerLevel);
  $('span.push').on('click',pushClick);
  $('span.focus').on('click',powerClick);

}

function pushClick() {
  rockDistance += powerLevel;
}

function powerClick() {
  powerLevel++;
}

function update() {
  $("#rockDistance").text(rockDistance);
  $("#powerLevel").text(powerLevel);
}
