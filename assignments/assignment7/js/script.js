"use strict";

let bassFreqs = [55, 110];
let synthFreqs = [440.00, 493.88, 523.25, 587.33, 659.25, 698.46, 783.99, 880.00];
let synthFreqsB = [880.00, 1046.50, 1318.5, 1567.98];
let pattern = [

'kh',
'x',
'sh',
'x',

'h',
'x',
'sh',
'k',

'h',
'k',
'sh',
'x',

'h',
'x',
'sh',
'k',

];

let patternIndex = 0;
let bass, synth, synthB, kick, snare, hat;

let drumDist;
let drumLPF;
let bassDist;
let snareReverb;
let synthLPF;
let synthFlanger;
let synthReverb;
let synthBdelay;

let lowpassLFO = 400;
let lowpassLFOup = true;

let playing = false;

let lengthRNG;
let restRNG;

function preload() {

}

function setup() {
  // percussion
  kick = new Pizzicato.Sound('/assets/sounds/kick.wav');
  snare = new Pizzicato.Sound('/assets/sounds/snare.wav');
  hat = new Pizzicato.Sound('/assets/sounds/hihat.wav');
  kick.release = 0;
  snare.release = 0;
  hat.release = 0;

  // creating a group for the percussion
  var drums = new Pizzicato.Group();
  drums.addSound(kick)
  drums.addSound(snare)
  drums.addSound(hat)
  // percussion effects
  drumDist = new Pizzicato.Effects.Distortion({
    gain: 1
  });
  drumLPF = new Pizzicato.Effects.LowPassFilter({
    frequency: 2400,
    peak: 16
  });
  snareReverb = new Pizzicato.Effects.Reverb({
    time: 0.5,
    decay: 1,
    reverse: false,
    mix: 0.5
  });

  // bass synth
  bass = new Pizzicato.Sound({
    source: 'wave',
  })
  // bass synth effects
  bassDist = new Pizzicato.Effects.Distortion({
    gain: 0.5
  });

  // lead synth
  synth = new Pizzicato.Sound({
    source: 'wave',
    options: {
      type: 'triangle'
    }
  })

  // lead synth effects
  synthLPF = new Pizzicato.Effects.LowPassFilter({
    frequency: lowpassLFO,
    peak: 16
  })

  synthFlanger = new Pizzicato.Effects.Flanger({
    time: 0.8,
    depth: 0.2,
    speed: 0.2,
    feedback: 0.5,
    mix: 1
  })

  synthReverb = new Pizzicato.Effects.Reverb({
    time: 1.6,
    decay: 1.6,
    reverse: true,
    mix: 0.5
  });

  // background synth
  synthB = new Pizzicato.Sound({
    source: 'wave',
  });
  // background synth effects
  synthBdelay = new Pizzicato.Effects.PingPongDelay({
    feedback: 0.5,
    time: 0.2,
    mix: 0.5
  });

  // applying effects
  drums.addEffect(drumDist);
  drums.addEffect(drumLPF);
  snare.addEffect(snareReverb);
  bass.addEffect(bassDist);
  synth.addEffect(synthLPF);
  synth.addEffect(synthFlanger);  synth.addEffect(synthReverb);
  synthB.addEffect(synthBdelay);
}

function draw() {

}

function mousePressed() {
  if (!playing){
    setInterval(playBass,200);
    setTimeout(playNote,200);
    setInterval(playNoteB,100);
    setInterval(playDrum,200);
    setInterval(lowPassMod,5);
    playing = true;
  }
}

function lowPassMod() {
  synthLPF.frequency = lowpassLFO;
  console.log(lowpassLFO);
  if (lowpassLFO >= 4000) {
    lowpassLFOup = false;
  }
  else if (lowpassLFO <= 400) {
    lowpassLFOup = true;
  }
  if (lowpassLFOup){
    lowpassLFO = lowpassLFO + 4;
  }
  else if (!lowpassLFOup){
    lowpassLFO = lowpassLFO - 4;
  }
}

// randomly plays a bass note and its upper octave neighbour
function playBass() {
  let bassFreq = bassFreqs[floor(random() * bassFreqs.length)];
  bass.frequency = bassFreq;
  bass.play();
}

function playNote() {

  restRNG = Math.random();
  lengthRNG = Math.random();

  let synthFreq = synthFreqs[floor(random() * synthFreqs.length)];
  synth.frequency = synthFreq;
  synth.volume = 0.2;

  if (restRNG <= 0.7) {
    synth.play();
  }
  else {
    synth.stop();
    setTimeout(playNote,200);
    return;
  }

  if (lengthRNG > 0.7) {
    setTimeout(playNote,400);
  }
  else {
    setTimeout(playNote,200);
  }
}

function playNoteB() {
  synthB.volume = 0.2;
  let synthFreqB = synthFreqsB[floor(random() * synthFreqsB.length)];
  synthB.frequency = synthFreqB;
  synthB.play();
}

function playDrum() {
  kick.stop();
  snare.stop();
  hat.stop();

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
