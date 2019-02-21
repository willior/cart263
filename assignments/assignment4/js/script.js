"use strict";

/*****************

Eat Up: God Hand edition
Will Graham-Simpkins

Music, sound effects, and the character Gene taken from the video game God Hand.
A beat em up game directed by Shinji Mikami, God Hand was developed by Clover Studio and released on the PS2 in 2006.

******************/

// Sound effects for the experience
let bgm1 = new Audio("assets/sounds/theme1.mp3");
let bgm2 = new Audio("assets/sounds/theme2.mp3");
let whistleSFX = new Audio("assets/sounds/Whistle.wav");
let eat1SFX = new Audio("assets/sounds/Awesome!.wav");
let eat2SFX = new Audio("assets/sounds/Great!.wav");
let eat3SFX = new Audio("assets/sounds/I love it!.wav");
let eat4SFX = new Audio("assets/sounds/Wow!.wav");
let pain1SFX = new Audio("assets/sounds/Pain.wav");
let pain2SFX = new Audio("assets/sounds/Pain 2.wav");

// element variables
let $gene;
let $fly;
let $strawberry;
let $banana;
let $orange;
let $cherry;

// counter
let eatCount;
// variable used to randomly select an eat sound
let random;

$(document).ready(setup);
function setup() {
  eatCount = 0;
  // Get the Gene element from the page
  $gene = $('#gene');
  // Make it droppable
  $gene.droppable({
    // The drop option specifies a function to call when a drop is completed
    accept: "#strawberry, #banana, #orange, #cherry, #fly",
    drop: dropped
  });

  // page elements:
  //
  // reverts fly's position when trying to feed to Gene
  // has Gene utter disgustingly when fly is picked up
  $fly = $('#fly').draggable({revert: "valid"}).on("mousedown", function() {pain1SFX.play();});
  // Gene whistles in anticipation of delicious fruit
  $strawberry = $('#strawberry').draggable().on("mousedown", function() {whistleSFX.play()});
  $banana = $('#banana').draggable().on("mousedown", function() {whistleSFX.play()});
  $orange = $('#orange').draggable().on("mousedown", function() {whistleSFX.play()});
  $cherry = $('#cherry').draggable().on("mousedown", function() {whistleSFX.play()});

  // Start up the music
  bgm1.loop = true;
  bgm1.play();
}

function dropped (event,ui) {

  // if the fly is dropped on Gene, he utters more disgustingly
  // then breaks out of the function so that the rest does not run
  if(event.toElement === document.getElementById('fly')){
    pain2SFX.play();
    return;
  }
  // if something other than the fly is dropped onto Gene...
  // removes the element
  ui.draggable.remove();
  // visually showcases Gene's opinion on fruit
  $(this).attr('src','assets/images/Gene2.png');
  // picks a sound to play when Gene eats a fruit
  random = Math.floor(Math.random() * (4 - 1)) + 1;
  if (random === 1) {eat1SFX.play()}
  if (random === 2) {eat2SFX.play()}
  if (random === 3) {eat3SFX.play()}
  if (random === 4) {eat4SFX.play()}
  // keeps track of how much fruit Gene has consumed
  eatCount++;
  console.log(eatCount);
  // reverts Gene back to his default state
  setTimeout(function(){$gene.attr('src','assets/images/Gene.png');},400);
  // runs when Gene is full
  if (eatCount === 4) {setInterval(full,250);
  }
}

// alternates between default Gene and satisfied Gene
// plays different music
function full () {
  if ($gene.attr('src') === 'assets/images/Gene.png') {
    $gene.attr('src','assets/images/Gene2.png');
    bgm1.pause();
    bgm2.play();
  }
  else {
    $gene.attr('src','assets/images/Gene.png');
  }
}
