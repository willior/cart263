/*****************
project2
Will Graham-Simpkins
******************/

// The Variables
let $spans;
let user;
let textLog = " ";
let textLog1 = " \n ";
let textLog2 = " \n ";
let textLog3 = " \n ";
let procPower, procPowerString;
let memory;
let cash, cashString;
let cashEarned, cashEarnedString;
let traceLevel, traceLevelString;
let traceFactor, traceFactorString;
// let time;
let procPrice, procPriceString;
let memoryPrice, memoryPriceString;
let bouncePrice;
let proxyPrice;
let bounceCount;
let proxyCount;
let hacking, hackingString;
let hackingProgress, hackingProgressString;
// visuals
let canvas;
let traceColorG;
let traceColorB;
// audio
let amp;
let BGMplay;
let hackCount;
let cashCount;
// variables used to draw progress bars
let procBarX, bounceBarX, proxyBarX, memoryBarX, tracedBarX, hackBarX, downloadBarX;
let procUpgrading, traceUpgrading, proxyUpgrading, memoryUpgrading, downloading;
let updateInt, userInputInt, procUpgradingInt, traceUpgradingInt, proxyUpgradingInt, memoryUpgradingInt, downloadingInt;

window.addEventListener('load', setup);
function setup() {
  $spans = $('span');
  // loads the canvas on which the progress bars are placed
  canvas = createCanvas(800,150);
  canvas.parent("progressBars");
  background(16);
  // colour values to fade the trace progress bar to red
  traceColorG = 255;
  traceColorB = 255;
  // volume for BGM/SFX
  amp = 0;
  BGMplay = false;
  SFX.muted = true;
  // setting variable defaults
  procBarX = 1;
  bounceBarX = 1;
  proxyBarX = 1;
  memoryBarX = 1;
  tracedBarX = 0;
  hackBarX = 1;
  downloadBarX = 0;
  procUpgrading = false;
  traceUpgrading = false;
  proxyUpgrading = false;
  memoryUpgrading = false;
  // initial values
  procPower = 100;
  memory = 0;
  cash = 1000;
  traceLevel = 0;
  traceFactor = 0;
  bounceCount = 0;
  proxyCount = 0;
  hacking = 0;
  hackingProgress = 0;
  time = 0;
  procPrice = 100;
  memoryPrice = 100;
  bouncePrice = 1;
  proxyPrice = 1;
  cashEarned = procPower/10;
  cashCount = 0;
  hackCount = 0;
  // update/display text
  cashEarnedString = cashEarned.toFixed(2);
  $("#cashEarned").text(cashEarnedString);
  textLogger();
  textUpdate();
  // setting up buttons
  $('span.action').on('click',cashClick);
  $('span.hack').on('click',hackClick);
  $('span.bounce').on('click',bounceClick);
  $('span.proxy').on('click',proxyClick);
  $('span.upProcPower').on('click',procPowerUpgrade);
  $('span.upMemory').on('click',memoryUpgrade);
  // hides splash screen 2 and main screen
  document.getElementById("start2").style.display = "none";
  document.getElementById("everything").style.display = "none";
  // annyang stuff
  if (annyang) {
    var commands = {
      // runs main screen on "I'm in"
      "I'm in": function() {
        console.log("I'm in.");
        main();
      },
    };
    annyang.addCommands(commands);
    annyang.start();
  }
  // setting username
  annyang.addCallback('result', function(phrases) {
    user = phrases[0];
    console.log("username: " + user);
    userInput();
  });
}
// stops listening for username, hides start screen1, shows start screen2
function userInput() {
  annyang.removeCallback('result');
  document.getElementById("start1").style.display = "none";
  document.getElementById("start2").style.display = "block";
}
// loads main screen
function main() {
  // creates text log
  textLog = "Welcome back, " + user;
  textLogger();
  // displays main screen, hides start screen2, plays background SFX
  document.getElementById("everything").style.display = "block";
  document.getElementById("start2").style.display = "none";
  playSFX();
  // setInterval(timer,1000);
  updateInt = setInterval(update,1000);
}
// function to start SFX; sometimes does not work on page load, may have to revert to using a click to start SFX
function playSFX() {
  SFX.play();
  SFX.loop = true;
  SFX.muted = false;
}
// function to start BGM
function playBGM() {
  BGM.play();
  BGM.loop = true;
}

// the next few functions have to do with the buttons and much of the code is redundant so i won't comment on everything

// function for the 'hack banking establishments' button
function cashClick() {
  // alternates between 4 sound holders so sounds aren't lost on rapid presses
  if (cashCount === 0){
    hackCash1.play();
    cashCount++;
  }
  else if (cashCount === 1){
    hackCash2.play();
    cashCount++;
  }
  else if (cashCount === 2){
    hackCash3.play();
    cashCount++;
  }
  else if (cashCount === 3){
    hackCash4.play();
    cashCount = 0;
  }
  // cashEarned is based off of procPower (processing power)
  cashEarned = procPower/10;
  cash += cashEarned;
  // traceFactor increased on each hack
  traceFactor += 0.1;
  // generates string to display the amount of cash earned and updates text/log
  cashEarnedString = cashEarned.toFixed(2);
  $("#cashEarned").text(cashEarnedString);
  textLog = "$" + cashEarnedString + " earned from hacking."
  textUpdate();
  textLogger();
}
// function for the 'HACK CENTRAL MAINFRAME' button
function hackClick() {
  if (hackCount === 0){
    hack1.play();
    hackCount++;
  }
  else if (hackCount === 1){
    hack2.play();
    hackCount++;
  }
  else if (hackCount === 2){
    hack3.play();
    hackCount++;
  }
  else if (hackCount === 3){
    hack4.play();
    hackCount = 0;
  }
  hacking = procPower/1200;
  hackingProgress += hacking;
  traceFactor += 0.5;
  hackBarX += hacking*8;
  hackingString = hacking.toFixed(2);
  hackingProgressString = hackingProgress.toFixed(2);
  $("#hack").text(hackingString);
  textLog = "Central mainframe hacked by " + hackingString + "% to " + hackingProgressString;
  textLogger();
  textUpdate();
  // starts BGM at 50% of central mainframe hack
  document.getElementById("BGM").volume = amp;
  if ((hackingProgress >= 50)&&(!BGMplay)) {
    BGMplay = true;
    playBGM();
  }
  // disables hack central mainframe button when complete
  if (hackingProgress >= 100) {
    $('span.hack').off('click',hackClick);
    hacked();
  }
  // volume control for BGM
  else if (BGMplay){
    amp = ((hackingProgress*2)-100);
    amp = amp/100;
    console.log("amp " + amp);
  }
}
// function for 'upgrade processing power' button
function procPowerUpgrade() {
  if (procUpgrading === true) {
    error1.play();
    textLog = "Unable to comply. Processor upgrade in progress.";
    textLogger();
    textUpdate();
    return;
  }
  else if (cash < procPrice) {
    error1.play();
    textLog = "Not enough cash to upgrade processor.";
    textLogger();
    textUpdate();
    return;
  }
  else {
    textLog = "Uprading processing power.";
    upgrade1.play();
    cash -= procPrice;
    textLogger();
    textUpdate();
    procUpgrading = true;
    procUpgradingInt = setInterval(procPowerUpgradeProgress,50);
  }
}
// function for processor upgrade process
function procPowerUpgradeProgress() {
  if (procBarX < 798) {procBarX+=10;} // fills bar
  else if ((procBarX >= 798)&&(procUpgrading = true)) {
    complete1.play();
    clearInterval(procUpgradingInt);
    procBarX = 1;
    procUpgrading = false;
    procPower *= 1.4;
    procPrice = procPrice * 1.5;
    textLog = "Processing power upgraded.";
    cashEarned = procPower/10;
    cashEarnedString = cashEarned.toFixed(2);
    $("#cashEarned").text(cashEarnedString);
    textLogger();
    textUpdate();
    return;
  }
}
// function for 'bounce signal' button
function bounceClick() {
  if (traceUpgrading === true ){
    error2.play();
    textLog = "Unable to comply. Signal bouncing in progress.";
    textLogger();
    return;
  }
  else if (memory <= 0) {
    error2.play();
    textLog = "Not enough memory to bounce signal.";
    textLogger();
    return;
  }
  else {
    upgrade2.play();
    textLog = "Bouncing signal.";
    memory -= bouncePrice;
    textLogger();
    textUpdate();
    traceUpgrading = true;
    traceUpgradingInt = setInterval(bounceProgress,50);
  }
}
// function for bounce signal progress
function bounceProgress() {
  if (bounceBarX < 798) {
    bounceBarX+=30;
  }
  else if (bounceBarX >= 798) {
    complete2.play();
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
// function for 'install proxy' button
function proxyClick() {
  if (proxyUpgrading === true){
    error3.play();
    textLog = "Unable to comply. Proxy installation in progress.";
    textLogger();
    return;
  }
  if (memory <= 0) {
    error3.play();
    textLog = "Not enough memory to install proxy.";
    textLogger();
    return;
  }
  else {
    upgrade3.play();
    memory -= proxyPrice;
    textLog = "Installing proxy.";
    textLogger();
    textUpdate();
    proxyUpgrading = true;
    proxyUpgradingInt = setInterval(proxyProgress,50);
  }
}
// function for proxy install process
function proxyProgress() {
  if (proxyBarX < 798) {
    proxyBarX += 30;
  }
  else if(proxyBarX >= 798) {
    complete3.play();
    clearInterval(proxyUpgradingInt);
    proxyUpgrading = false;
    proxyBarX = 1;
    proxyCount++;
    traceFactor--;
  }
}
// function for 'expand memory' button
function memoryUpgrade() {
  if (memoryUpgrading === true) {
    error4.play();
    textLog = "Unable to comply. Memory expansion in progress.";
    textLogger();
    return;
  }
  if (cash < memoryPrice) {
    error4.play();
    textLog = "Not enough cash to expand memory.";
    textLogger();
    textUpdate();
    return;
  }
  else {
    upgrade4.play();
    memoryUpgrading = true;
    cash -= memoryPrice;
    textLog = "Expanding memory.";
    textLogger();
    textUpdate();
    memoryUpgradingInt = setInterval(memoryProgress,50);
  }
}
// function for memory expansion process
function memoryProgress() {
  if (memoryBarX < 798) {
    memoryBarX += 30;
  }
  else if(memoryBarX >= 798) {
    complete4.play();
    clearInterval(memoryUpgradingInt);
    memoryUpgrading = false;
    memoryPrice = memoryPrice * 1.2;
    memoryBarX = 1;
    memory += 4;
    textLog = "Memory expanded."
    textLogger();
    textUpdate();
  }
}
// function for updating main screen text: information and button text
// decimal values are truncated to 2 digits and converted into strings
function textUpdate() {
  cashString = cash.toFixed(2);
  $("#cash").text(cashString);

  procPowerString = procPower.toFixed(0);
  $("#procPower").text(procPowerString);
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
// function for updating the text log
function textLogger()
{
  textLog3 = textLog2;
  $("#textLog3").text(textLog3);
  textLog2 = textLog1;
  $("#textLog2").text(textLog2);
  textLog1 = textLog;
  $("#textLog1").text(textLog1);
}
// function primarily for updating the trace factor and trace progress
function update() {
  // the traceLevel is increased by the amount in TraceFactor
  traceLevel = (traceLevel + traceFactor);
  // if traceLevel hits 100, the game is lost
  if (traceLevel > 100) {
    traceLevel = 100;
    traced();
    return;
  }
  // plays a warning sound effect when the player is close to losing
  if (traceLevel > 80) {
    warning.play();
  }
  // gradually reduces the traceLevel over time
  traceLevel -= 0.1;
  // keeps the traceLevel a positive value
  if (traceLevel < 0) {
    traceLevel = 0;
  }
  // gradually reduces the traceFactor over time if positive
  if (traceFactor >= 0.1){
    traceFactor -= 0.1;
  }
  // lowers the amount traceFactor is reduced if between 0 and 0.1
  else if ((traceFactor < 0.1)&&(traceFactor > 0)){
    traceFactor -= 0.01;
  }
  // gradually increases the traceFactor over time if less than 0.1
  if (traceFactor <= -0.1){
    traceFactor += 0.1;
  }
  // lowers the amount traceFactor is increased if between -0.1 and 0
  else if ((traceFactor > -0.1)&&(traceFactor <= 0)){
    traceFactor += 0.01;
  }
  // draws the trace bar
  tracedBarX = traceLevel*8;
  // gradually turns the trace bar red over 50%
  traceColorB = 500 - (traceLevel*5);
  traceColorG = 500 - (traceLevel*5);
  // updates text
  textUpdate();
}
// function for drawing the progress bars
function draw() {
  clear();
  strokeWeight(0);
  // procBar
  fill(255);
  rect(0,0,800,10);
  fill(0);
  rect(procBarX,1,(798-procBarX),8);
  // bounceBar
  fill(255);
  rect(0,20,800,10);
  fill(0);
  rect(bounceBarX,21,(798-bounceBarX),8);
  // proxyBar
  fill(255);
  rect(0,40,800,10);
  fill(0);
  rect(proxyBarX,41,(798-proxyBarX),8);
  // memoryBar
  fill(255);
  rect(0,60,800,10);
  fill(0);
  rect(memoryBarX,61,(798-memoryBarX),8);
  //tracedBar
  fill(255,traceColorG,traceColorB);
  rect(0,80,800,20);
  fill(0);
  rect(tracedBarX+1,81,(797-tracedBarX),18);
  //hackBar
  fill(255);
  rect(0,110,800,30);
  fill(0);
  rect(hackBarX,111,(798-hackBarX),28);
  //downloadBar
  fill(2,13,123);
  rect(1,111,downloadBarX,28);
}
// function that runs when the central mainframe hack is at 100%
function hacked() {
  console.log("central mainframe hacked!");
  textLog = "Central mainframe hacked.";
  textLogger();
  textLog = "Downloading files...";
  textLogger();
  // begins the download
  downloadingInt = setInterval(download,64);
}
// function that determines the download progress after central mainframe hack; also increases trace factor every tick
function download() {
  downloadBarX++;
  console.log(downloadBarX);
  traceFactor += 0.03;
  // win state detector
  if (downloadBarX >= 796) {
    win();
    return;
  }
}
// function for the win state; disables button and clears function intervals
function win() {
  SFX.pause();
  BGM.pause();
  console.log("you're winner!");
  clearInterval(updateInt);
  clearInterval(downloadingInt);
  clearInterval(procUpgradingInt);
  clearInterval(traceUpgradingInt);
  clearInterval(proxyUpgradingInt);
  clearInterval(memoryUpgradingInt);
  $('span.action').off('click',cashClick);
  $('span.bounce').off('click',bounceClick);
  $('span.proxy').off('click',proxyClick);
  $('span.upProcPower').off('click',procPowerUpgrade);
  $('span.upMemory').off('click',memoryUpgrade);
  textLog = "You have successfully downloaded the files.";
  textLogger();
}
// function for the lose state
function traced() {
  SFX.pause();
  BGM.pause();
  lose.play();
  console.log("traced!");
  clearInterval(updateInt);
  clearInterval(procUpgradingInt);
  clearInterval(traceUpgradingInt);
  clearInterval(proxyUpgradingInt);
  clearInterval(memoryUpgradingInt);
  clearInterval(downloadingInt);
  $('span.action').off('click',cashClick);
  $('span.hack').off('click',hackClick);
  $('span.bounce').off('click',bounceClick);
  $('span.proxy').off('click',proxyClick);
  $('span.upProcPower').off('click',procPowerUpgrade);
  $('span.upMemory').off('click',memoryUpgrade);
  textLog = "You have been traced.";
  textLogger();
}

// function timer() {
//   time++;
//   $("#time").text(time);
// }
//
//
//
// // decimal truncator
// function decimal(num) {
//   var n = num.toFixed(2);
//   return n;
// }
//
// // constrain function
// function constrain(value, min, max) {
//     return Math.min(Math.max(value, min), max);
// }
