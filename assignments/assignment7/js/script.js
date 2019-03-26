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
'k',

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

let dubDelay;
let reverb;
let reverbMod = 0.5;
let reverbModUp = false;

let playing = false;

let noteRNG;

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

  reverb = new Pizzicato.Effects.Reverb({
    time: 0.5,
    decay: 0.5,
    reverse: false,
    mix: reverbMod
  });
  synth.addEffect(reverb);
}

function draw() {

}

function mousePressed() {
  if (!playing){
    setInterval(playBass,200);
    setTimeout(playNote,200);
    setInterval(playDrum,200);
    playing = true;
    setInterval(reverbMix,400);
  }
}

function reverbMix() {

  if (reverbModUp === true) {
    reverbMod = reverbMod + 0.1;
  }
  if (reverbModUp === false) {
    reverbMod = reverbMod - 0.1;
  }


  if (reverbMod >= 1) {
    reverbModUp = false;
  }
}

function playBass() {
  let bassFreq = bassFreqs[floor(random() * bassFreqs.length)];
  bass.frequency = bassFreq;
  bass.play();
}

function playNote() {

  noteRNG = Math.random();

  let synthFreq = synthFreqs[floor(random() * synthFreqs.length)];
  synth.frequency = synthFreq;

  if (noteRNG <= 0.7) {

    synth.play();
  }
  else {
    synth.stop();
    setTimeout(playNote,200);
    return;
  }

  if (noteRNG > 0.7) {
    setTimeout(playNote,400);
  }
  else {
    setTimeout(playNote,200);
  }
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
