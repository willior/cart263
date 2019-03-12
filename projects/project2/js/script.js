/*****************

project2
Will Graham-Simpkins


******************/
let $spans;
let textLog = " ";
let procPower;
let memory;
let cash;
let traceLevel;
let traceLevelString;
let traceFactor;
let time;

let procPrice;
let memoryPrice;

let value;
let min;
let max;

window.addEventListener('load', setup);

function setup() {

  $spans = $('span');

  procPower = 0;
  memory = 0;
  cash = 1000;
  traceLevel = 0;
  traceFactor = 0;

  time = 0;

  procPrice = 100;
  memoryPrice = 100;

  $("#procPower").text(procPower);
  $("#memory").text(memory);
  $("#cash").text(cash);
  $("#traceLevel").text(traceLevel);
  $("#traceFactor").text(traceFactor);
  $("#time").text(time);
  $("#textLog").text(textLog);
  $("#procPrice").text(procPrice);
  $("#memoryPrice").text(memoryPrice);
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
  cash = cash + (procPower/10);
  traceFactor += 0.1;
  textUpdate();
}

function bounceClick() {
  console.log("signal bounced!");

}

function proxyClick() {
  console.log("proxy installed!");
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
  $("#procPower").text(procPower);
  $("#memory").text(memory);
  $("#cash").text(cash);

  traceLevelString = traceLevel.toFixed(2);
  $("#traceLevel").text(traceLevelString);

  $("#traceFactor").text(traceFactor);

  $("#textLog").text(textLog);
  $("#procPrice").text(procPrice);
  $("#memoryPrice").text(memoryPrice);
  $("#time").text(time);
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
