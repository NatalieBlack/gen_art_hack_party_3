//author: Natalie Black :)
var tr;
var SW;
var j = 0
var k = 0;
var exes;
var whys;
var prev_exes = [];
var prev_whys = [];
var colours;
var vertical = true;


function setup() {
  SW = 10;
  fill(0);
  createCanvas(displayWidth, displayHeight);
  background(255);
  exes  = [random(0, width), random(0, width), random(0, width), random(0, width)];
  whys  = [random(0, height), random(0, height), random(0, height), random(0, height)];
  colours = [color(255,0,0), color(0,255,0), color(0,0,0), color(0, 0, 255)];

}

function almost(point) {
  return point + random(-2,2);
}

function lines() {
  for(var i = 0; i < exes.length; i++){
    var x = exes[i];
    stroke(red(colours[i]), green(colours[i]), blue(colours[i]), tr);
    strokeWeight(SW);
    line(almost(x),0,almost(x),((height/600.0)*(j)));
    skinnyLines(x,((height/600.0)*(j)));
  }
  j = j + 1;
  if(j > 600) {
    j = 0;
    vertical = false;
    resetExes();
  }
}

function resetExes() {
  for(var i = 0; i < exes.length; i++){
    prev_exes.push(exes[i]);
    exes[i]= random(width);
  }
}

function drawPrevs(){
  for(var j = 0; j < prev_exes.length/4; j++) {    
    for(var i = 0; i < 4; i++){
      stroke(red(colours[i]), green(colours[i]), blue(colours[i]), tr);
      var x = prev_exes[(j*4)+i];
    strokeWeight(SW);
      line(almost(x), 0, almost(x), height);
      skinnyLines(x, height);
    }
  }
    
}

function skinnyLines(x,h) {
  strokeWeight(0.5);
  for(var i = 0; i < 6; i++){
    line(almost(x-(SW*0.5) + (10*i)), 0, almost(x-(SW*0.5) + (10*i)),h);
  }
}



function draw() {
    tr = 100;
    SW = 60;
    strokeCap(SQUARE);
    background(255);
    drawPrevs();
    lines();
}
