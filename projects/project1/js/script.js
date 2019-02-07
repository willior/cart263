/*****************

project1
Will Graham-Simpkins

******************/
let $spans;
let summitCount = 0;
let rockDistance;
let powerLevel;
let powerLevelDrain;
let fatigueLevel;
let fatigued;
let slipDistance;
let log = " ";
let slip = " ";
let summitReached;

// let _1 = new Audio("assets/sounds/1_E.wav");
// let _2 = new Audio("assets/sounds/2_A.wav");
// let _3 = new Audio("assets/sounds/3_D.wav");
// let _4 = new Audio("assets/sounds/4_G.wav");
// let _5 = new Audio("assets/sounds/5_C.wav");
// let _6 = new Audio("assets/sounds/6_F.wav");
// let _end = new Audio("assets/sounds/end.wav");

// let _1 = document.createElement("assets/sounds/1_E.wav");
// let _2 = document.createElement("assets/sounds/2_A.wav");
// let _3 = document.createElement("assets/sounds/3_D.wav");
// let _4 = document.createElement("assets/sounds/4_G.wav");
// let _5 = document.createElement("assets/sounds/5_C.wav");
// let _6 = document.createElement("assets/sounds/6_F.wav");
// let _end = document.createElement("assets/sounds/end.wav");

let volume1;
let volume2;
let volume3;
let volume4;
let volume5;
let volume6;

let updateInt;
let powerDrainInt;
let rockSlipCheckInt;
let fatigueUpdateInt;
let summitReachedInt;

$(document).ready(setup);

function setup() {
  rockDistance = 0;
  powerLevel = 0;
  powerLevelDrain = 1;
  fatigueLevel = 0;
  fatigued = false;
  slipDistance = 0;
  summitReached = false;
  // log = " ";
  // slip = " ";
  $spans = $('span');
  $("#summitCount").text(summitCount);
  $("#rockDistance").text(rockDistance);
  $("#powerLevel").text(powerLevel);
  $("#fatigueLevel").text(fatigueLevel);
  $("#log").text(log);
  $("#slip").text(slip);
  updateInt = setInterval(update,100);
  powerDrainInt = setInterval(powerDrain,1000);
  rockSlipCheckInt = setInterval(rockSlipCheck,5000);
  fatigueUpdateInt = setInterval(fatigueUpdate,300);
  $('span.push').on('click',pushClick);
  $('span.focus').on('click',powerClick);

  volume1 = 0;
  volume2 = 0;
  volume3 = 0;
  volume4 = 0;
  volume5 = 0;
  volume6 = 0;
  _1.play();
  _1.loop = true;
  document.getElementById("_1").volume = volume1;
  _2.play();
  _2.loop = true;
  document.getElementById("_2").volume = volume2;
  _3.play();
  _3.loop = true;
  document.getElementById("_3").volume = volume3;
  _4.play();
  _4.loop = true;
  document.getElementById("_4").volume = volume4;
  _5.play();
  _5.loop = true;
  document.getElementById("_5").volume = volume5;
  _6.play();
  _6.loop = true;
  document.getElementById("_6").volume = volume6;
}

function pushClick() {
  rockDistance += powerLevel*20;
  fatigueLevel++;
  let p = Math.floor(Math.random() * (100-1)+1);
  if (p < fatigueLevel) {
    if (slipDistance > rockDistance) {
      log = "\n" + "the rock slipped " + rockDistance + " centimeters and hit the ground when you tried to push the rock. " + log;
    } else {
      log = "\n" + "the rock slipped " + slipDistance + " centimeters when you tried to push the rock. " + log;
    }
    rockSlip();
  }
}

function powerClick() {
  powerLevel++;
  fatigueLevel++;
  let f = Math.floor(Math.random() * (100-1)+1);
  if (f < fatigueLevel) {
    if (rockDistance <= 0) {
      log = "\n" + "staring at the rock gives sisyphus strength. " + log;
      return;
    }
    if (slipDistance > rockDistance) {
      log = "\n" + "the rock slipped " + rockDistance + " centimeters and hit the ground when you tried to power up. " + log;
    } else {
      log = "\n" + "the rock slipped " + slipDistance + " centimeters when you tried to power up. " + log;
    }
    rockSlip();
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
    if (slipDistance > rockDistance) {
      log = "\n" + "the rock slipped " + rockDistance + " centimeters and hit the ground. " + log;
    } else {
      log = "\n" + "the rock slipped " + slipDistance + " centimeters." + log;
    }
    rockSlip();
  } else {
    log = "sisyphus thought about pushing the rock. " + log;
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

function summit() {

  while (summitReached){
    rockDistance--;
    $("#rockDistance").text(rockDistance);
    console.log(rockDistance);
    if (rockDistance == 0){
      summitReached = false;
    }
  }

  // for (let i = 6000; i > 0; i--) {
  //   rockDistance--;
  //   $("#rockDistance").text(i);
  //   console.log(rockDistance);
  // }

  summitCount++;
  setup();
  return;
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

  if (rockDistance >= 6000) {
    _end.play();
    _1.pause();
    _2.pause();
    _3.pause();
    _4.pause();
    _5.pause();
    _6.pause();
    $('span.push').off('click',pushClick);
    $('span.focus').off('click',powerClick);
    clearInterval(updateInt);
    clearInterval(powerDrainInt);
    clearInterval(rockSlipCheckInt);
    clearInterval(fatigueUpdateInt);
    summitReached = true;
    setTimeout(summit() ,1000);
  }

  volume1 = rockDistance/1000;
  volume1 = Math.min(1, Math.max(0, volume1));
  document.getElementById("_1").volume = volume1;

  volume2 = ((rockDistance-1000)/1000);
  volume2 = Math.min(1, Math.max(0, volume2));
  document.getElementById("_2").volume = volume2;

  volume3 = ((rockDistance-2000)/1000);
  volume3 = Math.min(1, Math.max(0, volume3));
  document.getElementById("_3").volume = volume3;

  volume4 = ((rockDistance-3000)/1000);
  volume4 = Math.min(1, Math.max(0, volume4));
  document.getElementById("_4").volume = volume4;

  volume5 = ((rockDistance-4000)/1000);
  volume5 = Math.min(1, Math.max(0, volume5));
  document.getElementById("_5").volume = volume5;

  volume6 = ((rockDistance-5000)/1000);
  volume6 = Math.min(1, Math.max(0, volume6));
  document.getElementById("_6").volume = volume6;

  $("#summitCount").text(summitCount);
  $("#rockDistance").text(rockDistance);
  $("#powerLevel").text(powerLevel);
  $("#fatigueLevel").text(fatigueLevel);
  $("#log").text(log);
}
