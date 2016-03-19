//author: Natalie Black :)
var crange = 15;
var c,c1,c2,c3,c4,c5,c6,c7,c8,c9,c10;
var trans = 20;
var count = 0;

function setup() {
  createCanvas(displayWidth, displayHeight);
  noFill();
  c = new Circler(0,50,170,210,170,230);
  c4 = new Circler(0,50,170,210,170,230);
  c5 = new Circler(0,50,170,210,170,230);
  c6 = new Circler(20,95,0,15,35,95);
  c7 = new Circler(20,95,0,15,35,95);
  c8 = new Circler(20,95,0,15,35,95);
  c9 = new Circler(225,250,225,250,225,250);
  c10 = new Circler(225,250,225,250,225,250);
  for(var i = 0; i < 500; i++) {
    c.drawIt();
    c4.drawIt();
    c5.drawIt();
    c6.drawIt();
    c7.drawIt();
    c8.drawIt();
    c9.drawIt();
    c10.drawIt();
  }
}

function csize(s) {
  return max(800,s + random(-10,10));
}

function newRGB(o) {
  return max(min(255,o + random(-crange, crange)),0);
}

function Circler(rmin, rmax,gmin,gmax,bmin,bmax) {
  this.r = random(rmin,rmax);
  this.g = random(gmin,gmax);
  this.b = random(bmin,bmax);
  this.w = random(900,2000);
  this.h = random(900,1400);
  this.px = width*0.5 + random(-width/2.0,width*0.5);
  this.py = height*0.5 + random(-height/2.0,height*0.5);
  this.redmax = rmax;
  this.greenmax = gmax;
  this.bluemax = bmax;
  this.redmin = rmin;
  this.greenmin = gmin;
  this.bluemin = bmin;

  this.drawIt = function() {
    this.r = newRGB(this.r);
    if(this.r > this.redmax || this.r < this.redmin) {
      this.r = random(this.redmin, this.redmax);
    }
    this.g = newRGB(this.g);
    if(this.g > this.greenmax || this.g < this.greenmin) {
      this.g = random(this.greenmin, this.greenmax);
    }
    this.b = newRGB(this.b);
    if(this.b > this.bluemax || this.b < this.bluemin) {
      this.b = random(this.bluemin, this.bluemax);
    }
    stroke(this.r,this.g,this.b,trans);
    strokeWeight(random(25,40));
    this.px = this.px + random(-5,5);
    this.py = this.py + random(-5,5);
    if(this.px > width+this.w || this.px < -this.w || (count > 150 && random(600) > 599)){
      this.px = width*0.5 + random(-width/2.0,width*0.5);
      count = 0;
    }
    if(this.py > height+this.h || this.py < -this.h || (count++ > 150 && random(600) > 599)){
      this.py = height*0.5 + random(-height/2.0,height*0.5);
      count = 0;
    }
    this.w = csize(this.w);
    this.h = csize(this.h);
    this.end = random(2 * PI);
    this.start = this.end + random(-1,1);
    arc(this.px,this.py,this.w,this.h,this.start,this.end);
    bezier(this.px,this.py,this.w,this.h,this.start,this.end);
    if(random(6)>5){
      strokeWeight(0.5)
      stroke(this.r,this.g,this.b,150+ random(-20,20));
      arc(this.px,this.py,this.w,this.h,this.start+random(-0.25,0.25),this.end+random(-0.25,0.25));
    }
  };
};

function draw() {
  strokeCap(SQUARE);
  c.drawIt();
  //c1.drawIt();
  //c2.drawIt();
  //c3.drawIt();
  c4.drawIt();
  c5.drawIt();
  c6.drawIt();
    c7.drawIt();
    c8.drawIt();
    c9.drawIt();
    c10.drawIt();
}
