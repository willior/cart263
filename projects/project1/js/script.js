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
  powerLevel = 0;
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
  setInterval(rockSlipCheck,5000);
  setInterval(fatigueUpdate,300);
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
    log = "\n" + "the rock slipped " + slipDistance + " centimeters when you tried to push the rock. " + log;
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
    log = "\n" + "the rock slipped " + slipDistance + " centimeters when you tried to power up. " + log;
  }
}

function powerDrain() {
  powerLevel -= powerLevelDrain;
  powerLevel = Math.min(100, Math.max(0, powerLevel));
}

function rockSlip() {
  if (fatigued = true) {
    slipDistance = Math.floor(Math.random() * (40-1)+1);
  } else if (fatigued = false) {
    slipDistance = Math.floor(Math.random() * (20-1)+1);
  }
  rockDistance -= slipDistance;
}

function rockSlipCheck() {
  if (rockDistance > 0) {
    rockSlip();
    log = "\n" + "the rock slipped " + slipDistance + " centimeters." + log;
  } else {
    log = "you thought about pushing the rock. " + log;
  }
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
