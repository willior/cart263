/*****************

project1
Will Graham-Simpkins

******************/
let $spans;
let rockDistance;
let powerLevel;
let powerLevelDrain;
let fatigueLevel;
let fatigued;
let slipDistance;
let log;
let slip;

$(document).ready(setup);

function setup() {
  rockDistance = 0;
  powerLevel = 1;
  powerLevelDrain = 1;
  fatigueLevel = 0;
  fatigued = false;
  slipDistance = 0;
  log = " ";
  slip = " ";
  $spans = $('span');
  $("#rockDistance").text(rockDistance);
  $("#powerLevel").text(powerLevel);
  $("#fatigueLevel").text(fatigueLevel);
  $("#log").text(log);
  $("#slip").text(slip);
  setInterval(update,100);
  setInterval(powerDrain,1000);
  setInterval(rockSlip,5000);
  setInterval(fatigueUpdate,500);
  $('span.push').on('click',pushClick);
  $('span.focus').on('click',powerClick);
}

function pushClick() {
  rockDistance += powerLevel;
  fatigueLevel++;
  let p = Math.floor(Math.random() * (100-1)+1);
  if (p < fatigueLevel) {
    rockSlip();
    // $("#log").fadeIn(1);
    // $("#log").fadeOut(1000,textReset());
    log = "\n the rock slipped " + slipDistance + " centimeters due to fatigue." + log;
    console.log(slipDistance);
  }
}

function powerClick() {
  powerLevel++;
  fatigueLevel++;
  let f = Math.floor(Math.random() * (100-1)+1);
  if (f < fatigueLevel) {
    rockSlip();
    // $("#log").fadeIn(1);
    // $("#log").fadeOut(1000,textReset());
    log = "\n the rock slipped " + slipDistance + " centimeters due to fatigue." + log;
    console.log(slipDistance);
  }
}

function powerDrain() {
  powerLevel -= powerLevelDrain;
}

function rockSlip() {
  if (fatigued = true) {
    slipDistance = Math.floor(Math.random() * (40-1)+1);
  } else if (fatigued = false) {
    slipDistance = Math.floor(Math.random() * (20-1)+1);
  }
  rockDistance -= slipDistance;
}

function fatigueUpdate() {
  fatigueLevel--;
  fatigueLevel = Math.min(100, Math.max(0, fatigueLevel));
}

function textReset() {
  // don't know how to properly reset text after fadeOut
  // $("#log").fadeIn(1);
  log = " ";
}

function update() {
  if (rockDistance < 0) {
    rockDistance = 0;
  }

  if (fatigueLevel >= 50) {
    fatigued = true;
  } else {
    fatigued = false;
  }

  $("#rockDistance").text(rockDistance);
  $("#powerLevel").text(powerLevel);
  $("#fatigueLevel").text(fatigueLevel);
  $("#log").text(log);
}
