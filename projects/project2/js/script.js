/*****************
project2
Will Graham-Simpkins
******************/
let $spans;
let textLog = "Welcome back, USERNAME";
let textLog1 = " \n ";
let textLog2 = " \n ";
let textLog3 = " \n ";
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

let procBarX, bounceBarX, proxyBarX, memoryBarX, tracedBarX, hackBarX;
let procUpgrading, traceUpgrading, proxyUpgrading, memoryUpgrading;
let procUpgradingInt, traceUpgradingInt, proxyUpgradingInt, memoryUpgradingInt;

window.addEventListener('load', setup);

function setup() {

  canvas = createCanvas(800,150);
  canvas.parent("progressBars");
  background(16);

  procBarX = 1;
  bounceBarX = 1;
  proxyBarX = 1;
  memoryBarX = 1;
  tracedBarX = 0;
  hackBarX = 1;
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

  textLogger();
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
  cashEarned = procPower/10;
  cash += cashEarned;
  traceFactor += 0.1;
  textLog = "$" + cashEarned + " earned from hacking."
  textLogger();
  textUpdate();
}

function procPowerUpgrade() {
  if (procUpgrading === true) {
    textLog = "Unable to comply. Processor upgrade in progress.";
    textLogger();
    textUpdate();
    return;
  }
  else if (cash < procPrice) {
    textLog = "Not enough cash to upgrade processor.";
    textLogger();
    textUpdate();
    return;
  }
  else {
    textLog = "Uprading processing power.";
    cash -= procPrice;
    textLogger();
    textUpdate();
    procUpgrading = true;
    procUpgradingInt = setInterval(procPowerUpgradeProgress,50);
  }
}

function procPowerUpgradeProgress() {
  if (procBarX < 798) {procBarX+=30;}
  else if ((procBarX >= 798)&&(procUpgrading = true)) {
    clearInterval(procUpgradingInt);
    procBarX = 1;
    procUpgrading = false;
    procPower += 100;
    procPrice = procPrice * 1.5;
    textLog = "Processing power upgraded.";
    textLogger();
    cashEarned = procPower/10;
    textUpdate();
    return;
  }
}

function bounceClick() {
  if (traceUpgrading === true ){
    textLog = "Unable to comply. Signal bouncing in progress.";
    textLogger();
    return;
  }
  else if (memory <= 0) {
    textLog = "Not enough memory to bounce signal.";
    textLogger();
    return;
  }
  else {
    textLog = "Bouncing signal.";
    memory -= bouncePrice;
    textLogger();
    textUpdate();
    traceUpgrading = true;
    traceUpgradingInt = setInterval(bounceProgress,50);
  }

}
function bounceProgress() {
  if (bounceBarX < 798) {
    bounceBarX+=30;
  }
  else if (bounceBarX >= 798) {
    bounceCount++;
    clearInterval(traceUpgradingInt);
    bounceBarX = 1;
    traceUpgrading = false;
    traceLevel -= 10;
    if (traceLevel < 0){
      traceLevel = 0;
      traceLevelString = traceLevel.toFixed(2);
      $("#traceLevel").text(traceLevelString);
    }
    textLog = "Signal bounced.";
    textLogger();
    textUpdate();
    return;
  }
}

function proxyClick() {
  if (proxyUpgrading === true){
    textLog = "Unable to comply. Proxy installation in progress.";
    textLogger();
    return;
  }
  if (memory <= 0) {
    textLog = "Not enough memory to install proxy.";
    textLogger();
    return;
  }
  else {
    memory -= proxyPrice;
    textLog = "Installing proxy.";
    textLogger();
    textUpdate();
    proxyUpgrading = true;
    proxyUpgradingInt = setInterval(proxyProgress,50);
  }
}

function proxyProgress() {

  if (proxyBarX < 798) {
    proxyBarX += 30;
  }

  else if(proxyBarX >= 798) {
    clearInterval(proxyUpgradingInt);
    proxyUpgrading = false;
    proxyBarX = 1;
    proxyCount++;
    traceFactor--;
  }
}

function memoryUpgrade() {
  if (cash < memoryPrice) {
  textLog = "Not enough cash to upgrade memory.";
  textLogger();
  textUpdate();
  return;
  }

  else {
    cash -= memoryPrice;
    memoryPrice = memoryPrice * 1.2;
    textLog = "Expanding memory.";
    textLogger();
    textUpdate();
    memoryUpgradingInt = setInterval (memoryProgress,50);
  }
}

function memoryProgress() {

  if (memoryBarX < 798) {
    memoryBarX += 30;
  }

  else if(memoryBarX >= 798) {
    clearInterval(memoryUpgradingInt);
    memoryUpgrading = false;
    memoryBarX = 1;
    memory += 4;
    textLog = "Memory expanded."
    textLogger();
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
}

function textLogger()
{
  textLog3 = textLog2;
  $("#textLog3").text(textLog3);
  textLog2 = textLog1;
  $("#textLog2").text(textLog2);
  textLog1 = textLog;
  $("#textLog1").text(textLog1);
}

function update() {
  // console.log("updating...");
  traceLevel = (traceLevel + traceFactor);
  if (traceLevel > 100) {
    traceLevel = 100;
    traced();
  }
  traceLevel -= 0.1;
  if (traceLevel < 0) {
    traceLevel = 0;
  }
  if (traceFactor >= 0.1){
    traceFactor -= 0.1;
  }
  else if (traceFactor <= 0.1){
    traceFactor += 0.1;
  }
  tracedBarX = traceLevel*8;

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

  // bounceBar
  fill(255);
  rect(0,20,800,10);

  fill(0);
  rect(bounceBarX,21,798,8);

  // proxyBar
  fill(255);
  rect(0,40,800,10);

  fill(0);
  rect(proxyBarX,41,798,8);


  // memoryBar
  fill(255);
  rect(0,60,800,10);

  fill(0);
  rect(memoryBarX,61,798,8);

  //tracedBar
  fill(255);
  rect(0,80,800,20);

  fill(0);
  rect(tracedBarX+1,81,798,18);

  //hackBar
  fill(255);
  rect(0,110,800,30);

  fill(0);
  rect(hackBarX,111,798,28);

}

function traced() {
  console.log("traced!");
}

function timer() {
  time++;
  $("#time").text(time);
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
