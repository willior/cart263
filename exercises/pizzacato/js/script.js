"use strict";

let bassFreqs = [55, 110];
let synthFreqs = [440.00, 493.88, 523.25, 587.33, 659.25, 698.46, 783.99, 880.00];
let pattern = [

'k',
'h',
's',
'h',

'h',
'h',
's',
'kh',

'h',
'k',
's',
'h',

'h',
'h',
's',
'h',];

let patternIndex = 0;
let bass, synth, kick, snare, hat;
let playing = false;

function preload() {

}

function setup() {
  bass = new Pizzicato.Sound({
    source: 'wave',
  })
  synth = new Pizzicato.Sound({
    source: 'wave',
  });

  kick = new Pizzicato.Sound('/assets/sounds/kick.wav');
  snare = new Pizzicato.Sound('/assets/sounds/snare.wav');
  hat = new Pizzicato.Sound('/assets/sounds/hihat.wav');

}

function draw() {

}

function mousePressed() {
  if (!playing){
    setInterval(playBass,200);
    setInterval(playNote,200);
    setInterval(playDrum,200);
    playing = true;
  }
}

function playBass() {
  let bassFreq = bassFreqs[floor(random() * bassFreqs.length)];
  bass.frequency = bassFreq;
  bass.play();
}

function playNote() {
  let synthFreq = synthFreqs[floor(random() * synthFreqs.length)];
  synth.frequency = synthFreq;
  synth.play();
}

function playDrum() {
  let symbols = pattern[patternIndex];
  if (symbols.indexOf('k') !== -1) {
    kick.play();
  }
  if (symbols.indexOf('s') !== -1) {
    snare.play();
  }
  if (symbols.indexOf('h') !== -1) {
    hat.play();
  }
  patternIndex = (patternIndex + 1) % pattern.length;

}
