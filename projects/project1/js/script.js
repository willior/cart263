/*****************

project1
Will Graham-Simpkins

******************/
let $spans;
let rockDistance;
let powerLevel;
let powerLevelDrain;
let fatigueLevel;
let fatigue;

$(document).ready(setup);

function setup() {
  rockDistance = 0;
  powerLevel = 1;
  powerLevelDrain = 1;
  fatigueLevel = 0;
  fatigued = false;
  $spans = $('span');
  $("#rockDistance").text(rockDistance);
  $("#powerLevel").text(powerLevel);
  $("#fatigueLevel").text(fatigueLevel);
  setInterval(update,100);
  setInterval(powerDrain,1000);
  setInterval(rockSlip,1000);
  setInterval(fatigueUpdate,500);
  $('span.push').on('click',pushClick);
  $('span.focus').on('click',powerClick);
}

function pushClick() {
  rockDistance += powerLevel;
}

function powerClick() {
  powerLevel++;
  fatigueLevel++;
}

function powerDrain() {
  powerLevel -= powerLevelDrain;
}

function rockSlip() {
  let r = Math.random() * (10-1)+1;
  rockDistance -= Math.floor(r);
}

function fatigueUpdate() {
  fatigueLevel--;
  fatigueLevel = Math.min(100, Math.max(0, fatigueLevel));
}

function update() {
  if (rockDistance < 0) {
    rockDistance = 0;
  }

  $("#rockDistance").text(rockDistance);
  $("#powerLevel").text(powerLevel);
  $("#fatigueLevel").text(fatigueLevel);
}
