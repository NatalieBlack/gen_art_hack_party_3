var recordButton;
var danceButton;
var soundFile;
var bins = 16;

// sprite vars
//var asterisk;
var platform;
var GRAVITY = 1;
var JUMP = 10;
var horz = 7;

var spriteArray = new Array();
var numSprites = 6;
var spriteWidth = 132;
var spacing;

var liveDancing = 0;

// 0 = not currently recording; 1 = currently recording
var isRecording = 0;


var mic, recorder, soundFile;

var state = 0; // mousePress will increment from Record, to Stop, to Play

function setup() {
  //fix pixel count for retina displays
  //devicePixelScaling(false);

  
  //spriteArray.push(createSprite(200, 200, 5,5));
  spacing = (windowWidth-spriteWidth*numSprites)/(numSprites+1);
  
  for (var i=0;i<numSprites;i++) {
    spriteArray.push(createSprite((spacing + i*(spacing+spriteWidth)), windowHeight-150));
    if ( i == 0 ) {
      spriteArray[i].addAnimation("normal", "assets/ghost_blue1.png", "assets/ghost_blue4.png");
      spriteArray[i].addAnimation("stretch", "assets/ghost_blue2.png", "assets/ghost_blue5.png");
    }
    if ( i == 1) {
      spriteArray[i].addAnimation("normal", "assets/ghost_purple1.png", "assets/ghost_purple4.png");
      spriteArray[i].addAnimation("stretch", "assets/ghost_purple2.png", "assets/ghost_purple5.png");
    }
    if ( i == 2 ) {
          spriteArray[i].addAnimation("normal", "assets/c1.png", "assets/c2.png");
          spriteArray[i].addAnimation("stretch", "assets/c3.png", "assets/c4.png");
        }
    if ( i == 3) {
          spriteArray[i].addAnimation("normal", "assets/d1.png", "assets/d2.png");
          spriteArray[i].addAnimation("stretch", "assets/d3.png", "assets/d4.png");
        }
    if ( i == 4 ) {
          spriteArray[i].addAnimation("normal", "assets/asterisk_normal0001.png", "assets/asterisk_normal0003.png");
          spriteArray[i].addAnimation("stretch", "assets/asterisk_stretching0001.png", "assets/asterisk_stretching0008.png");
        }
    if ( i == 5) {
          spriteArray[i].addAnimation("normal", "assets/bn1.png", "assets/bn3.png");
          spriteArray[i].addAnimation("stretch", "assets/bs1.png", "assets/bs8.png");
        }
  }
  
  var cnv = createCanvas(windowWidth, windowHeight);
  
  background(200);
  fill(0);
  text('Enable mic and click the mouse to begin recording', 20, 20);

  // noFill();
  
  // create an audio in
  mic = new p5.AudioIn();

  // users must manually enable their browser microphone for recording to work properly!
  mic.start();

// create fft
  fft = new p5.FFT(0.5, bins);
  fft.setInput(mic);
  // create a sound recorder
  recorder = new p5.SoundRecorder();

  // connect the mic to the recorder
  recorder.setInput(mic);

  // create an empty sound file that we will use to playback the recording
  soundFile = new p5.SoundFile();
 
 /* 
  // make record button
  recordButton = createButton('Sing!');
  recordButton.position(windowWidth/2-100, windowHeight-200);
  recordButton.mousePressed(recordSong);
  
  // make dance button
  danceButton = createButton('Dance!');
  danceButton.position(windowWidth/2+100, windowHeight-200);
  danceButton.mousePressed(startDance);
*/
}

//function mousePressed() {}

/*
function recordSong() {

  // show user program is listening
  ellipse(50,50,30,30);
  
  // start recording
  if (isRecording == 0 && mic.enabled) {

    // update record button 
    background(255,255,255);
    text('Recording now! Click to stop.', 20, 20);
    isRecording = 1;
    
    // Tell recorder to record to a p5.SoundFile which we will use for playback
    recorder.record(soundFile);
    
  }

  //stop recording
  else if (isRecording == 1) {
    
    // update record button
    isRecording = 0;
    //change label
    background(255,255,255);
    text('Recording stopped!', 20, 20);
    
    //save file
    recorder.stop(); // stop recorder, and send the result to soundFile
    saveSound(soundFile, 'mySound.wav'); // save file
    
  }

  
//show user program has stopped listening

}
*/

/*
function startDance() {
 
 // Dance to a recorded song
 if (isRecording == 0) {
  liveDancing = 0;
    // update record button 
    soundFile.play();
    }

if (isRecording == 1) {
   
    
}
 
  
  else if (isRecording == 1) {
    soundFile.play(); // play the result!

    state++;
  }
}
*/

function draw() {

  var ground = windowHeight-150;
  
  // thresholds for FFT frequency bins
  var thresholds = new Array();
  thresholds.push(120);
  thresholds.push(90);
  thresholds.push(60);
  thresholds.push(60);
  thresholds.push(40);
  thresholds.push(50);
  
  background(255,255,255);
  stroke(0,255,0);   
  fill(0,255,0);
  

  // make the number of dancers = to the number of bins
  var spectrum = fft.analyze(bins);

  // handle asterisk behavior 
  // asterisk.velocity.y += GRAVITY;
  for (var i=0;i<numSprites;i++) {
    
    spriteArray[i].velocity.y += GRAVITY;

    if(spriteArray[i].position.y >= ground) {
      spriteArray[i].velocity.y = 0;
      spriteArray[i].position.y = ground;
      spriteArray[i].changeAnimation("normal");
      }

    if(spriteArray[i].position.y <= 0) {
      spriteArray[i].velocity.y = 0;
      spriteArray[i].position.y = 1;
      spriteArray[i].changeAnimation("normal");
      }
      
    if(spriteArray[i].position.x >= (width - spriteWidth) ) {
      spriteArray[i].velocity.x = -abs(spriteArray[i].velocity.x);
      spriteArray[i].changeAnimation("normal");
      }
    
    if(spriteArray[i].position.x <= 0 ) {
      spriteArray[i].velocity.x = abs(spriteArray[i].velocity.x);
      spriteArray[i].changeAnimation("normal");
      }
  }
  
  for (var i=0; i<numSprites; i++) {
    for (var k=0; k<numSprites; k++) {
      if (i != k) {
        spriteArray[i].bounce(spriteArray[k]);
      }
    }
  }
  
  for (var i=0;i<numSprites;i++) {
    if((spectrum[2*i]+i)/2 >= thresholds[i] ) {
      spriteArray[i].changeAnimation("stretch");
      spriteArray[i].animation.rewind();
      spriteArray[i].velocity.y = -JUMP;
      spriteArray[i].velocity.x = random(horz) - horz/2;
    }
  }
  

  

  // draw sprites
  drawSprites();
  
  //if {liveDancing == 1) {
    

// FFT analyzer
/*
  for (var j = 0; j< spectrum.length; j++){
    var x = map(j, 0, spectrum.length, 0, width);
    var h = -height + map(spectrum[j], 0, 255, height, 0);
    rect(x, height, width / spectrum.length, h )
    text(h, x, 20);
  }
*/
  
}
