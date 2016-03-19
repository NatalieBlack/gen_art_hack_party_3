//author: Natalie Black :)
var SIZE;
var crange = 40;
var s1, s2,s3;
var mint, maxt;
var SW;
var count;
var ccount = 0;
var colours;


 function Scribbler(y1, r, s, minSW, maxSW, rainbow) {
    this.x1 = 0;
    this.y1 = y1;
    this.slope = s;
    this.r = r;
    this.rainbow = rainbow;
    this.minSW = minSW;
    this.maxSW = maxSW;
    this.tr = random(mint, maxt);
    this.red = random(50, 200);
    this.green = random(50, 200);
    this.blue = random(50, 200);
  
  this.getNextColour = function(){
    if(count++%50 == 0){
      colour = colours[ccount++%colours.length];
      colour = color(red(colour) + random(-crange, crange), green(colour) + random(-crange, crange),blue(colour) + random(-crange, crange));
      //colour = color(this.red + random(-crange, crange), this.green + random(-crange, crange), this.blue + random(-crange, crange));
    } 
    return colour;
  }
  this.move = function(){
    x2 = random(0, width);

    y2 = y1 + random(-r,r);
 
    if(y2 >= SIZE || y2 <= 0){
      y2 = random(0, height);
    }
  }
  
  this.scribble = function() {
    this.move();
    this.drawSwoosh();
  }
  
  this.drawSwoosh = function(){
    strokeWeight(random(minSW,maxSW));

    noFill();
      
    var n = random(1,5);  

   x1 = width*0.5;
   y1 = height*0.5;
   beginShape();
 
  vertex(x1, y1);
  
  for(var i = 0; i < n; i++){

      bezierVertex(this.getPoint(x1,r), this.getPoint(y1,r),this.getPoint(x1,r), this.getPoint(y1,r),this.getPoint(x1,r), this.getPoint(y1,r));
  }    for(var i = 0; i < n; i++){

      bezierVertex(this.getPoint(x1,r), this.getPoint(y1,r),this.getPoint(x1,r), this.getPoint(y1,r),this.getPoint(x1,r), this.getPoint(y1,r));
  }for(var i = 0; i < n; i++){

  
    bezierVertex(this.getPoint(x1,r), this.getPoint(y1,r),this.getPoint(x1,r), this.getPoint(y1,r),random(width), random(height));
    }
    
  
    endShape();

    y1 = y2;
  }
  
  this.getPoint = function( s,  r){
    var q = width;
    return int(s) + int(random(0-q,q));
}

  this.getColour = function() {
    return colour;
  }
  
  this.getTrans = function(){
    return int(random(mint, maxt));
  }

}


function setup() {
  createCanvas(displayWidth, displayHeight);
  SW = 1;
  SIZE = 600;
  strokeCap(SQUARE);
  background(255);
  count = 0;
  colours = [color(225, 58, 109), color(133, 224, 58), color(212, 243, 63), color(164, 42, 164), color(105, 55, 171)]

  strokeWeight(SW);
  mint = 255;
  maxt = 255;
  s1 = new Scribbler(random(height), width, 5, 0.5, 0.5, false);
  s2 = new Scribbler(random(height), width, 5, 12, 25, true);

}

function draw() {
    stroke(0,0,0,255);
    s1.scribble();
    stroke(s2.getNextColour());
    s2.scribble();
}

