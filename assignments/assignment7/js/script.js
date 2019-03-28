"use strict";
// A minor: A B C D E F G A
let bassFreqs = [55, 110];
let synthFreqs = [440.00, 493.88, 523.25, 587.33, 659.25, 698.46, 783.99, 880.00];
let synthFreqsB = [880.00, 1046.50, 1318.5, 1567.98];

// F minor: F G Ab Bb C Dd Eb
let bassFreqs2 = [43.65, 87.3];
let synthFreqs2 = [349.23, 392.00, 415.30, 466.16, 523.25, 554.37, 622.25];
let synthFreqsB2 = [];

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
let allSynthComp;

let lowpassLFO = 800;
let lowpassLFOup = true;

let lengthRNG;
let restRNG;

let barCount = 0;
let keyChange = false;
let playing = false;

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
    options: {
      volume: 0.8
    }
  })
  // bass synth effects
  bassDist = new Pizzicato.Effects.Distortion({
    gain: 0.4
  });

  // lead synth
  synth = new Pizzicato.Sound({
    source: 'wave',
    options: {
      volume: 0.2,
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
    options: {
      volume: 0.2
    }
  });

  // background synth effects
  synthBdelay = new Pizzicato.Effects.PingPongDelay({
    feedback: 0.5,
    time: 0.2,
    mix: 0.5
  });

  // global synth Effects
  allSynthComp = new Pizzicato.Effects.Compressor({
    threshold: -12,
    knee: 12,
    attack: 0.05,
    release: 0.05,
    ratio: 16,
    mix: 1
  })

  // creating a group for the percussion
  var drums = new Pizzicato.Group();
  drums.addSound(kick)
  drums.addSound(snare)
  drums.addSound(hat)

  // creating a group for the synths
  var synths = new Pizzicato.Group();
  synths.addSound(bass)
  synths.addSound(synth)
  synths.addSound(synthB)

  // applying effects
  drums.addEffect(drumDist);
  drums.addEffect(drumLPF);
  snare.addEffect(snareReverb);
  bass.addEffect(bassDist);
  synth.addEffect(synthLPF);
  synth.addEffect(synthFlanger);  synth.addEffect(synthReverb);
  synthB.addEffect(synthBdelay);
  synths.addEffect(allSynthComp);
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
  if (lowpassLFO >= 8000) {
    lowpassLFOup = false;
  }
  else if (lowpassLFO <= 800) {
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

  if (keyChange === false) {
    let bassFreq = bassFreqs[floor(random() * bassFreqs.length)];
    bass.frequency = bassFreq;
  }
  else if(keyChange === true) {
    let bassFreq = bassFreqs2[floor(random() * bassFreqs2.length)];
    bass.frequency = bassFreq;
  }
  bass.play();
}

function playNote() {

  restRNG = Math.random();
  lengthRNG = Math.random();

  let synthFreq = synthFreqs[floor(random() * synthFreqs.length)];
  synth.frequency = synthFreq;

  if (restRNG <= 0.7) {
    synth.play();
  }
  else {
    synth.stop();
    setTimeout(playNote,400);
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
  console.log("pattern index: ",patternIndex);
  if (patternIndex === 15) {
    barCount++;
  }
  console.log("bar count: ",barCount);
  if ((patternIndex === 0) && (barCount === 2) && (keyChange === false)) {
    keyChange = true;
    barCount = 0;
  }
  else if ((patternIndex === 0) && (barCount === 2) && (keyChange === true)) {
    keyChange = false;
    barCount = 0;
  }
}
