//author: Natalie Black :)
var x, y;
var range = 50;
var baset = 180;
var crange = 10;
var BG = 50;
var ch;
var chalks = [];
var a;

function Antagonist(x,y) {
  
    this.x = x;
    this.y = y;
  
  this.move = function() {
    if(this.forward) {
      this.x = this.x + random(-2,8);
      if(this.x > width){
        this.forward = false;
        this.y = random(height);
      }
    } else {
      this.x = this.x + random(-8,2);
      if(this.x < 0){
        this.forward = true;
        this.y = random(height);
      }
    }
  }
  
  this.drawIt = function() {
    stroke(BG,BG,BG, varyTrans());
    bezier(this.x, this.y, rr(this.x), rr(this.y), rr(this.x), rr(this.y), rr(this.x), rr(this.y));
    this.move();
    this.y = this.y + random(-8,8);
  };
};

function Chalk(x,y,r,g,b,dir) {
  
    this.x = x;
    this.y = y;
    this.r = r;
    this.g = g;
    this.b = b;
    this.forward = dir;
  
  this.newColour = function() {
    this.r = newRGB(this.r);
    this.g = newRGB(this.g);
    this.b = newRGB(this.b);
    return color(this.r,this.g,this.b, varyTrans());
  };

  this.move = function() {
    if(this.forward) {
      this.x = this.x + random(-2,8);
      if(this.x > width){
        this.forward = false;
        this.y = random(height);
      }
    } else {
      this.x = this.x + random(-8,2);
      if(this.x < 0){
        this.forward = true;
        this.y = random(height);
      }
    }
  }
  
  this.drawIt = function() {
    stroke(this.newColour(), varyTrans());
    if(this.forward) {
    bezier(this.x, this.y, rr(0), rr(this.y), rr(this.x), rr(this.y), 0, rr(this.y));
    } else {
      bezier(this.x, this.y, rr(width), rr(this.y), rr(this.x), rr(this.y), width, rr(this.y));
    }
    this.move();
    this.y = this.y + random(-3,3);
  };
};

function setup() {
  createCanvas(displayWidth, displayHeight);
  noFill();
  strokeWeight(0.3);
  background(BG);
  chalks.push(new Chalk(0, random(height),116, 173, 150, true));
  chalks.push(new Chalk(0, random(height),184, 226, 151, true));
  chalks.push(new Chalk(width, random(height),190, 221, 244, false));
  a = new Antagonist(random(width), random(height));

};

function draw() {    
 for(var i = 0; i < chalks.length; i++){
   chalks[i].drawIt();
 }
 a.drawIt();

}



function varyTrans() {
  return baset + random(-10,10);
}

function newRGB(old){
  var n = old + random(-crange, crange);
  return min(240,max(n,30));
}

function rr(input){
  return input + random(-range, range);
}

