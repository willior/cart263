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

let procPrice;
let memoryPrice;

window.addEventListener('load', setup);

function setup() {

  $spans = $('span');

  procPower = 0;
  memory = 0;
  cash = 1000;
  traceLevel = 0;
  procPrice = 100;
  memoryPrice = 100;

  $("#procPower").text(procPower);
  $("#memory").text(memory);
  $("#cash").text(cash);
  $("#traceLevel").text(traceLevel);
  $("#textLog").text(textLog);
  $("#procPrice").text(procPrice);
  $("#memoryPrice").text(memoryPrice);

  $('span.action').on('click',actionClick);
  $('span.upProcPower').on('click',procPowerUpgrade);
  $('span.upMemory').on('click',memoryUpgrade);
}

function actionClick() {
  console.log("action!");

}

function procPowerUpgrade() {

  console.log("processor upgrade");

  if (cash < procPrice) {
    textLog = "Not enough cash to upgrade processor.";
    update();
    return;
  }
  else {
    procPower += 100;
    cash -= procPrice;
    procPrice = procPrice * 2;
    textLog = "Processing power upgraded."
    update();
  }
}

function memoryUpgrade() {

  console.log("memory upgrade");

  if (cash < memoryPrice) {
  textLog = "Not enough cash to upgrade memory.";
  update();
  return;
  }

  else {
    memory += 4;
    cash -= memoryPrice;
    memoryPrice = memoryPrice * 2;
    textLog = "Memory expanded."
    update();
  }
}

function update() {
  $("#procPower").text(procPower);
  $("#memory").text(memory);
  $("#cash").text(cash);
  $("#traceLevel").text(traceLevel);
  $("#textLog").text(textLog);
  $("#procPrice").text(procPrice);
  $("#memoryPrice").text(memoryPrice);
}
