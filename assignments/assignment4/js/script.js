"use strict";

/*****************

Eat Up
Pippin Barr

Using jQuery UI's draggable and droppable methods to
feed a hungry mouth!

Sounds:
Buzzing: https://freesound.org/people/soundmary/sounds/194931/
Chewing: https://freesound.org/people/InspectorJ/sounds/412068/

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

  // page elements
  // reverts fly's position when trying to feed to Gene
  // has Gene utter disgustingly when fly is picked up
  $fly = $('#fly').draggable({revert: "valid"}).on("mousedown", function() {
    pain1SFX.play();
  });
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
  // then returns so that the rest of the function does not run
  if(event.toElement === document.getElementById('fly')){
    pain2SFX.play();
    return;
  }

  // runs if fruit was fed to Gene
  ui.draggable.remove();
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
  if (eatCount < 4) {
    return;
  }
  else {
    setInterval(chew,250);
  }
}

// chew()
//
// Swaps the mouth image between closed and open and plays the crunching SFX
function chew () {
  // We can use .attr() to check the value of an attribute to
  // In this case we check if the image is the open mouth
  if ($gene.attr('src') === 'assets/images/Gene.png') {
    // If it is, we set the 'src' attribute to the closed mouth
    $gene.attr('src','assets/images/Gene2.png');
    // and play the crunching
    bgm1.pause();
    bgm2.play();
  }
  else {
    // Otherwise the 'src' attribute must have been the closed mouth
    // so we swap it for the open mouth
    $gene.attr('src','assets/images/Gene.png');
  }
}
