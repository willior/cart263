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

window.addEventListener('load', setup);

function setup() {
  canvas = createCanvas(600, 200);
  canvas.parent("mountain");
  background(153);
  $spans = $('span');
  $("#procPower").text(procPower);
  $("#memory").text(memory);
  $("#cash").text(cash);
  $("#traceLevel").text(traceLevel);
  $("#textLog").text(textLog);
  $('span.action').on('click',actionClick);
  $('span.upProcPower').on('click',procPowerUpgrade);
  $('span.upMemory').on('click',memoryUpgrade);
}

function actionClick() {

}

function procPowerUpgrade() {

}

function memoryUpgrade() {

}

function update() {
  $("#procPower").text(procPower);
  $("#memory").text(memory);
  $("#cash").text(cash);
  $("#traceLevel").text(traceLevel);
  $("#textLog").text(textLog);
}
