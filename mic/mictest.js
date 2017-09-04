var mic;
var recorder;
var soundFile;
var recordButton; 
var playButton;
var savedFile;
var amplitude;
var slider;
var messe;

function setup() {
  // set up a canvas
  createCanvas(400, 300);
  // set up a mic
  mic = new p5.AudioIn();
  mic.start();
  // set up a recorder 
  recorder = new p5.SoundRecorder();
  recorder.setInput(mic);
  // set up a place seved  
  savedFile = new p5.SoundFile();
  // set up button
  recordButton = createButton('Record now');
  recordButton.mousePressed(record);
  recordButton.mouseReleased(stopRecord);
  recordButton.position(125, 320);

  playButton = createButton('Play now');
  playButton.mousePressed(play);
  playButton.position(210, 320);

  amplitude = new p5.Amplitude();

  slider = createSlider(0, 20, 5);
  slider.position(135, 300);
}

function draw() {
   // background(0);
  clear();
  var level = mic.getLevel();
  var size = map(level, 0, 1, 0, 700);
  // fill(0, 200, 170);
  strokeWeight(2);
  stroke(0,250,8);
  ellipse(width / 2, height / 2, size/2, size);
  fill(255, 0, 170,80);
  strokeWeight(50);
  stroke(255,50,170,50);
  ellipse(width / 2, height / 2, size, size);
}

function record() {
  messe = console.log('StartRecord');
  savedFile = new p5.SoundFile();
  recorder.record(savedFile);
}

function stopRecord() {
  console.log('Stop record');
  recorder.stop();
}

function play() {
  console.log('Playing');
  savedFile.amp(1);
  savedFile.play();
  savedFile.setVolume(slider.value());
  savedFile.play();
}