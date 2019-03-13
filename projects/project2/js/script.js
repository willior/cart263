/*****************
project2
Will Graham-Simpkins
******************/
let $spans;
let textLog = " ";
let procPower;
let memory;
let cash;
let cashString;
let cashEarned;
let cashEarnedString;
let traceLevel;
let traceLevelString;
let traceFactor;
let traceFactorString;
let time;

let procPrice;
let procPriceString;
let memoryPrice;
let memoryPriceString;
let bouncePrice;
let proxyPrice;

let bounceCount;
let proxyCount;

let value;
let min;
let max;

let canvas;

let procBarX, traceBarX, proxyBarX, memoryBarX;
let procUpgrading, traceUpgrading, proxyUpgrading, memoryUpgrading;

window.addEventListener('load', setup);

function setup() {

  canvas = createCanvas(800,84);
  canvas.parent("progressBars");
  background(16);

  procBarX = 1;
  traceBarX = 1;
  proxyBarX = 1;
  memoryBarX = 1;
  procUpgrading = false;
  traceUpgrading = false;
  proxyUpgrading = false;
  memoryUpgrading = false;

  $spans = $('span');

  procPower = 0;
  memory = 0;
  cash = 1000;
  cashEarned = 0;
  traceLevel = 0;
  traceFactor = 0;
  bounceCount = 0;
  proxyCount = 0;

  time = 0;

  procPrice = 100;
  memoryPrice = 100;
  bouncePrice = 1;
  proxyPrice = 1;

  textUpdate();

  $('span.action').on('click',actionClick);
  $('span.bounce').on('click',bounceClick);
  $('span.proxy').on('click',proxyClick);
  $('span.upProcPower').on('click',procPowerUpgrade);
  $('span.upMemory').on('click',memoryUpgrade);

  setInterval(timer,1000);
  setInterval(update,1000);

}

function actionClick() {
  console.log("action!");
  cashEarned = procPower/10;
  cash += cashEarned;
  traceFactor += 0.1;
  textUpdate();
}

function procPowerUpgrade() {
  console.log("upgrading!");
  if (procUpgrading === true) {
    textLog = "Unable to comply. Processor upgrade in progress.";
    textUpdate();
    return;
  }
  else if (cash < procPrice) {
    textLog = "Not enough cash to upgrade processor.";
    textUpdate();
    return;
  }
  else if (procUpgrading === false){
    textLog = "Uprading processing power.";
    cash -= procPrice;
    procUpgrading = true;
    setInterval(procPowerUpgradeProgress,50);
  }
}

function procPowerUpgradeProgress() {

  if (procBarX < 798) {
    procBarX+=10;
  }
  if ((procBarX >= 798)&&(procUpgrading = true)) {
    console.log("procPowerUpgrade complete")
    procPowerUpgradeComplete();
    return;
  }
}
function procPowerUpgradeComplete() {
  clearInterval(procPowerUpgradeProgress);
  procBarX = 1;
  procUpgrading = false;
  procPower += 100;
  procPrice = procPrice * 1.5;
  textLog = "Processing power upgraded."
  cashEarned = procPower/10;
  textUpdate();
}

function bounceClick() {
  if (memory <= 0) {
    textLog = "Not enough memory to bounce signal.";
  }
  else {
    bounceCount++;
    traceLevel -= 10;
    memory -= bouncePrice;
  }
  textUpdate();
}

function proxyClick() {
  console.log("proxy installed!");
  if (memory <= 0) {
    textLog = "Not enough memory to install proxy.";
  }
  else {
    proxyCount++;
    traceFactor--;
    memory -= proxyPrice;
  }
  textUpdate();
}

function memoryUpgrade() {

  console.log("memory upgrade");

  if (cash < memoryPrice) {
  textLog = "Not enough cash to upgrade memory.";
  textUpdate();
  return;
  }

  else {
    memory += 4;
    cash -= memoryPrice;
    memoryPrice = memoryPrice * 1.2;
    textLog = "Memory expanded."
    textUpdate();
  }
}

function textUpdate() {

  cashString = cash.toFixed(2);
  $("#cash").text(cashString);
  cashEarnedString = cashEarned.toFixed(2);
  $("#cashEarned").text(cashEarnedString);

  $("#procPower").text(procPower);
  procPriceString = procPrice.toFixed(2);
  $("#procPrice").text(procPriceString);

  $("#memory").text(memory);
  memoryPriceString = memoryPrice.toFixed(2);
  $("#memoryPrice").text(memoryPriceString);

  traceLevelString = traceLevel.toFixed(2);
  $("#traceLevel").text(traceLevelString);
  traceFactorString = traceFactor.toFixed(2);
  $("#traceFactor").text(traceFactorString);

  $("#bouncePrice").text(bouncePrice);
  $("#proxyPrice").text(proxyPrice);

  $("#bounceCount").text(bounceCount);
  $("#proxyCount").text(proxyCount);

  $("#time").text(time);
  $("#textLog").text(textLog);
}

function update() {
  console.log("updating...");
  traceLevel = (traceLevel + traceFactor);
  if (traceLevel > 100) {
    traceLevel = 100;
    traced();
  }
  traceLevel -= 0.1;
  if (traceLevel < 0) {
    traceLevel = 0;
  }
  traceFactor = (traceFactor - 0.1);
  if (traceFactor < 0){
    traceFactor = 0;
  }
  textUpdate();
}

function draw() {
  clear();
  strokeWeight(0);
  // procBar
  fill(255);
  rect(0,0,800,10);

  fill(0);
  rect(procBarX,1,798,8);

  // tracedBar
  fill(255);
  rect(0,20,800,10);

  fill(0);
  rect(1,21,798,8);

  // proxyBar
  fill(255);
  rect(0,40,800,10);

  fill(0);
  rect(1,41,798,8);


  // memoryBar
  fill(255);
  rect(0,60,800,10);

  fill(0);
  rect(1,61,798,8);


}

function traced() {
  console.log("traced!");
}

function timer() {
  time++;
}



// decimal truncator
function decimal(num) {
  var n = num.toFixed(2);
  return n;
}



// constrain function
function constrain(value, min, max) {
    return Math.min(Math.max(value, min), max);
}
