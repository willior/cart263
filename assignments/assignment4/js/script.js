"use strict";

/*****************

Eat Up: God Hand edition
Will Graham-Simpkins

Music, sound effects, and the character Gene taken from the video game God Hand.
A beat em up game directed by Shinji Mikami, God Hand was developed by Clover Studio and released on the PS2 in 2006.

******************/

// Sound effects for the experience
let bgm1 = new Audio("assets/sounds/rock_a_bay.mp3");
let bgm2 = new Audio("assets/sounds/broncobuster.mp3");
let bgm3 = new Audio("assets/sounds/smoking_rolliste.mp3")
let bgm4 = new Audio("assets/sounds/god_hand.mp3")
let whistleSFX = new Audio("assets/sounds/Whistle.wav");
let eat1SFX = new Audio("assets/sounds/Awesome!.wav");
let eat2SFX = new Audio("assets/sounds/Great!.wav");
let eat3SFX = new Audio("assets/sounds/I love it!.wav");
let eat4SFX = new Audio("assets/sounds/Wow!.wav");
let pain1SFX = new Audio("assets/sounds/Pain.wav");
let pain2SFX = new Audio("assets/sounds/Pain 2.wav");
let niceSFX = new Audio("assets/sounds/Nice!.wav");
let gahSFX = new Audio("assets/sounds/gah.wav");
let hahahSFX = new Audio("assets/sounds/Hahah!.wav")
let buzzSFX = new Audio("assets/sounds/buzz.mp3");
let boringSFX = new Audio("assets/sounds/boring.wav");
let coinSFX = new Audio("assets/sounds/coin.mp3");
let tapSFX = new Audio("assets/sounds/tap.mp3");

// element variables
let $gene;
let $jukebox;
let $fly;
let $strawberry;
let $banana;
let $orange;
let $cherry;
let $dollar;

// counter for number of fruits consumed
let eatCount;
// variable used to randomly select an eat sound
let random;
// counter for music track played by the Jukebox
let trackCount;
// boolean to keep track of whether Gene is satisfied or not
let satisfied;

$(document).ready(setup);
function setup() {

  eatCount = 0;
  satisfied = false;
  trackCount = 0;
  // Get the Gene element from the page and make it droppable for the appropriate items
  $gene = $('#gene');
  $gene.droppable({
    accept: "#strawberry, #banana, #orange, #cherry, #fly, #dollar",
    drop: dropGene
  });
  // same for the jukebox
  $jukebox = $('#jukebox');
  $jukebox.droppable({
    accept: "#strawberry, #banana, #orange, #cherry, #fly, #dollar",
    drop: dropJukebox
  });

  document.getElementById('gene').addEventListener("click", clickGene);
  document.getElementById('jukebox').addEventListener("click", clickJukebox);


  // page elements:
  //
  // reverts fly's position when trying to feed to Gene
  // has Gene utter disgustingly when fly is picked up
  $fly = $('#fly').draggable({revert: "valid"}).on("mousedown", function() {pain1SFX.play();});
  // Gene whistles in anticipation of delicious fruit
  $strawberry = $('#strawberry').draggable({revert: "valid"}).on("mousedown", function() {whistleSFX.play()});
  $banana = $('#banana').draggable({revert: "valid"}).on("mousedown", function() {whistleSFX.play()});
  $orange = $('#orange').draggable({revert: "valid"}).on("mousedown", function() {whistleSFX.play()});
  $cherry = $('#cherry').draggable({revert: "valid"}).on("mousedown", function() {whistleSFX.play()});
  $dollar = $('#dollar').draggable({revert: "valid"}).on("mousedown", function() {niceSFX.play()});
}

// the function for when an element is dropped onto Gene
function dropGene (event,ui) {

  // if the fly is dropped on Gene, he utters more disgustingly
  // then breaks out of the function so that the rest does not run
  if(event.toElement === document.getElementById('fly')){
    pain2SFX.play();
    return;
  }
  if(event.toElement === document.getElementById('dollar')){
    gahSFX.play();
    return;
  }
  // if something other than the fly is dropped onto Gene...
  // removes the element
  ui.draggable.remove();
  // visually showcases Gene's opinion on fruit
  $(this).attr('src','assets/images/Gene2.png');
  // picks a sound to play when Gene eats a fruit
  random = Math.floor(Math.random() * (5 - 1)) + 1;
  console.log(random);
  if (random === 1) {eat1SFX.play()}
  if (random === 2) {eat2SFX.play()}
  if (random === 3) {eat3SFX.play()}
  if (random === 4) {eat4SFX.play()}
  // keeps track of how much fruit Gene has consumed
  eatCount++;
  // reverts Gene back to his default state
  setTimeout(function(){$gene.attr('src','assets/images/Gene.png');},400);
  // runs when Gene is full
  if (eatCount === 4) {
    satisfied = true;
    setInterval(full,250);
  }
}

// the function for when an element is dropped onto the Jukebox
function dropJukebox(event, ui) {
  // fly buzzes off
  if(event.toElement === document.getElementById('fly')){
    buzzSFX.play();
    return;
  }
  // if any of the fruit is dropped onto the jukebox, Gene lets you know what he thinks
  if((event.toElement === document.getElementById('strawberry'))||(event.toElement === document.getElementById('banana'))||(event.toElement === document.getElementById('orange'))||(event.toElement === document.getElementById('cherry'))){
    boringSFX.play();
    return;
  }
  // if neither fly or fruit was dropped onto the juke box...
  coinSFX.play();
  trackCount++;
  ui.draggable.remove();
  bgm1.play();
}

function clickGene() {
  hahahSFX.play();
}

function clickJukebox() {
  if (trackCount === 0){
    tapSFX.play();
  }
  else if (trackCount === 1){
    bgm1.pause();
    bgm3.play();
    trackCount++;
  }
  else if (trackCount === 2){
    bgm3.pause();
    bgm4.play();
    trackCount++;
  }
  else if (trackCount === 3){
    bgm4.pause();
    bgm1.play();
    trackCount = 1;
  }
}

// alternates between displaying default Gene and satisfied Gene
// plays different music
function full () {
  if ($gene.attr('src') === 'assets/images/Gene.png') {
    $gene.attr('src','assets/images/Gene2.png');
    if (trackCount === 1){
      bgm1.pause();
    }
    if (trackCount === 2){
      bgm3.pause()
    }
    if (trackCount === 3){
      bgm4.pause();
    }
    trackCount = 5;
    bgm2.play();
  }
  else {
    $gene.attr('src','assets/images/Gene.png');
  }
}
