let osc;
let envelope;
let filter;
let lfo;
let plucky;

//variables for image
let eventImg;
let imageWidth = 200;
let imageHeight = 200;

function preload() {
  eventImg = loadImage('pewpew.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  resonanceSlider = createSlider(0, 1, 0.5, 0.01);
  resonanceSlider.position(width/2-70, 320);
  
  plucky = new Tone.MonoSynth({
    oscillator: {
      frequency: 1800,
      type: 'square'
    },
    envolope: {
      attack: 0.001,
      decay: 0.01,
      sustain: 0,
      release: 0.1
    },
    filter: {
      type: 'highpass',
      frequency: 500,
      rolloff: -12
    },
    volume: 60
  }).toDestination();
  
}

function draw() {
  background(220);
  text('Resonance: '+resonanceSlider.value(), width/2, 300);

  plucky.set ({
    resonance: resonanceSlider.value(),
  });
}

// Function to play eventImg and display image
function mouseClicked() {
  Tone.start();

  console.log("Mouse clicked");

  image(eventImg, 0, 0);
  
  // Trigger sound effect
  plucky.triggerAttack();
}
