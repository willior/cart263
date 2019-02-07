/*****************

project1
Will Graham-Simpkins

******************/
let $spans;
let summitCount = 0;
let rockDistance;
let powerLevel = 0;
let powerLevelDrain;
let fatigueLevel = 0;
let fatigued;
let slipDistance;
let log = " ";
let slip = " ";
let summitReached;
let audioPlay;
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

window.addEventListener('load', setup);

// setup()
// sets necessary values for variables
// displays text
// calls the other functions regularly
// turns the buttons on
function setup() {
  rockDistance = 0;
  powerLevel = 0;
  powerLevelDrain = 1;
  fatigued = false;
  slipDistance = 0;
  summitReached = false;
  audioPlay = false;
  volume1 = 0;
  volume2 = 0;
  volume3 = 0;
  volume4 = 0;
  volume5 = 0;
  volume6 = 0;
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
}

// playAudio()
// called when sisyphus first attempts to push the rock
// this was necessary as a bug was encountered when audio was played from setup()
function playAudio() {
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

// pushClick ()
// a function that defines what happens when "push the rock" is pressed
// plays audio files (one time)
// pushes the rock a distance based on a factor of powerLevel
// increases fatigue each time the rock is pushed
// the more fatigue, the higher chance the rock has of slipping
function pushClick() {
  if (!audioPlay) {
    playAudio();
    audioPlay = true;
  }
  rockDistance += powerLevel*20;
  fatigueLevel++;
  let p = Math.floor(Math.random() * (100-1)+1);
  if (p < fatigueLevel) {
    if (slipDistance > rockDistance) {
      log = "\n" + "the rock slipped " + rockDistance + " centimeters and hit the ground when sisyphus tried to push the rock. " + log;
    } else {
      log = "\n" + "the rock slipped " + slipDistance + " centimeters when sisyphus tried to push the rock. " + log;
    }
    rockSlip();
  }
}

// powerClick()
// a function that defines what happens when "focus power" is pressed
// increases both powerLevel and fatigue each time sisyphus focuses powerLevel
// as with pushClick(), the more fatigue, the higher chance the rock has of slipping
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

// powerDrain()
// a function that defines the loss of sisyphus's strength over time
// constrains the value to remain within 0 to 100
function powerDrain() {
  powerLevel -= powerLevelDrain;
  powerLevel = Math.min(100, Math.max(0, powerLevel));
}

// rockSlip()
// a function that defines how far the rock slipDistance
// the rock can slip every time one of the buttons is pressed
// the rock also slips on its own at regular intervals
// if sisyphus's fatigue goes beyond 50%, he becomes "fatigued"
// being fatigued doubles the range at which the rock randomly slips from 20 to 40
function rockSlip() {
  if (fatigued = true) {
    slipDistance = Math.floor(Math.random() * (40-1)+1);
  } else if (fatigued = false) {
    slipDistance = Math.floor(Math.random() * (20-1)+1);
  }
  rockDistance -= slipDistance;
}

// rockSlipCheck()
// a function that defines regular slipping of the rockSlip
// if the rock hasn't moved, reflects that accurately
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

// fatigueUpdate()
// a function that defines the regular loss of fatigued
// constrains the value to remain within 0 to 100
function fatigueUpdate() {
  fatigueLevel--;
  fatigueLevel = Math.min(100, Math.max(0, fatigueLevel));
}

// summit()
// a function that defines what happens when sisyphus reaches the summitCount
// rolls the rock back down to 0, updates text accurately, and returns
// resets the intervals at which the primary functions are regularly called and runs setup()
function summit() {
  if (rockDistance > 0) {
    rockDistance--;
    rockDistance--;
    rockDistance--;
    $("#rockDistance").text(rockDistance);
    $("#powerLevel").text(powerLevel);
    $("#fatigueLevel").text(fatigueLevel);
    return;
  }
  else {
    clearInterval(summitReachedInt);
    clearInterval(powerDrainInt);
    clearInterval(fatigueUpdateInt);
    setup();
    return;
  }
}

// update()
// a function that is reguarly called to check if certain events have occured
// also handles volume changes and displays text
function update() {
  // prevents the rock from rolling through the ground
  // applies the "fatigued" status if fatigue exceeds 50%
  if (rockDistance < 0) {
    rockDistance = 0;
  }

  if (fatigueLevel >= 50) {
    fatigued = true;
  } else {
    fatigued = false;
  }

  // when sisyphus reaches the top of the hill (6000cm)...
  // plays the ending audio
  // pauses all other audio
  // turns off the buttons
  // stops calling the update() and rockSlipCheck() functions
  // displays an alert with an honest message
  // keeps track of how many times sisyphus has reached the summitCount
  // runs the summit() function
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
    clearInterval(rockSlipCheckInt);
    alert("the rock rolled down the hill and there was nothing sisyphus could do about it");
    summitCount++;
    summitReached = true;
    summitReachedInt = setInterval(summit,1);
  }

  // fades in the individual notes of a chord as sisyphus climbs the hill
  // the first note's volume increases from 0.0 to 1.0 as sisyphus climbs from 0 to 1000 centimeters
  volume1 = rockDistance/1000;
  volume1 = Math.min(1, Math.max(0, volume1));
  document.getElementById("_1").volume = volume1;
  // the second note's volume increases from 0.0 to 1.0 as sisyphus climbs from 1000 to 2000 centimeters, etc.
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

  // updates text
  $("#summitCount").text(summitCount);
  $("#rockDistance").text(rockDistance);
  $("#powerLevel").text(powerLevel);
  $("#fatigueLevel").text(fatigueLevel);
  $("#log").text(log);
}
