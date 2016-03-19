//author: Natalie Black :)
var x1,x2,x3,y1,y2,y3;
var r;
var red, green, blue;
var crange;

function setup() {
  noStroke();
  createCanvas(displayWidth, displayHeight);
  frameRate(30);
  r = 200;
  x1 = random(width*0.4,width*0.6);
  y1 = random(height*0.4,height*0.6);
  x2 = x1 + random(-r,r);
  y2 = y1 + random(-r,r);
  x3 = x2 + random(-r,r);
  y3 = y2 + random(-r,r);
  crange = 25;
  red = random(255);
  green = random(255);
  blue = random(255);
}

function draw() {
  red = red + random(-crange, crange);
  if(red > 255 || red < 0){
    red = random(255);
  }
  if(green > 255 || green < 0){
    green = random(255);
  }
  if(blue > 255 || blue < 0){
    blue = random(255);
  }
  green = green + random(-crange, crange);
  blue = blue + random(-crange, crange);
  fill(red, green, blue, 100);
  triangle(x1,y1,x2,y2,x3,y3);
  x1 = x2;
  y1 = y2;
  x1 = keepOnBoardX(x1);
  y1 = keepOnBoardY(y1);
  x2 = x3;
  y2 = y3;
  x2 = keepOnBoardX(x2);
  y2 = keepOnBoardY(y2);
  x3 = x2 + random(-r,r);
  y3 = y2 + random(-r,r);
}

function keepOnBoardX(x) {
  if(x < 0 || x > width) {
    return random(width);
  }else {
    return x;
  }
}

function keepOnBoardY(y) {
  if(y < 0 || y > height) {
    return random(height);
  }else {
    return y;
  }
}
