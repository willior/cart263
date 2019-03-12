/*****************

project2
Will Graham-Simpkins


******************/
let $spans;
let textLog = " ";
let procPower;
let memory;
let cash;
let cashEarned;
let traceLevel;
let traceLevelString;
let traceFactor;
let traceFactorString;
let time;

let procPrice;
let memoryPrice;
let bouncePrice;
let proxyPrice;

let bounceCount;
let proxyCount;

let value;
let min;
let max;

window.addEventListener('load', setup);

function setup() {

  $spans = $('span');

  procPower = 0;
  memory = 0;
  cash = 1000;
  cashEarned = 0;
  traceLevel = 0;
  traceFactor = 0;

  time = 0;

  procPrice = 100;
  memoryPrice = 100;
  bouncePrice = 1;
  proxyPrice = 1;

  $("#cash").text(cash);
  $("#cashEarned").text(cashEarned);
  $("#procPower").text(procPower);
  $("#procPrice").text(procPrice);

  $("#memory").text(memory);
  $("#memoryPrice").text(memoryPrice);

  $("#traceLevel").text(traceLevel);
  $("#traceFactor").text(traceFactor);

  $("#bouncePrice").text(bouncePrice);
  $("#proxyPrice").text(proxyPrice);

  $("#time").text(time);
  $("#textLog").text(textLog);

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

function bounceClick() {
  console.log("signal bounced!");
  if (memory <= 0) {
    textLog = "Not enough memory to bounce signal.";
  }
  else {
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
    traceFactor--;
    memory -= proxyPrice;
  }
  textUpdate();
}

function procPowerUpgrade() {

  console.log("processor upgrade");

  if (cash < procPrice) {
    textLog = "Not enough cash to upgrade processor.";
    textUpdate();
    return;
  }
  else {
    procPower += 100;
    cash -= procPrice;
    procPrice = procPrice * 2;
    textLog = "Processing power upgraded."
    cashEarned = procPower/10;
    textUpdate();
  }
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
    memoryPrice = memoryPrice * 2;
    textLog = "Memory expanded."
    textUpdate();
  }
}

function textUpdate() {
  $("#cash").text(cash);
  $("#cashEarned").text(cashEarned);
  $("#procPower").text(procPower);
  $("#memory").text(memory);

  traceLevelString = traceLevel.toFixed(2);
  $("#traceLevel").text(traceLevelString);
  traceFactorString = traceFactor.toFixed(2);
  $("#traceFactor").text(traceFactorString);

  $("#procPrice").text(procPrice);
  $("#memoryPrice").text(memoryPrice);
  $("#bouncePrice").text(bouncePrice);
  $("#proxyPrice").text(proxyPrice);

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
  if (traceLevel < 0) {
    traceLevel = 0;
  }
  traceFactor = (traceFactor - 0.1);
  if (traceFactor < 0){
    traceFactor = 0;
  }
  textUpdate();
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
