//author: Natalie Black :)
var x1,x2,x3,y1,y2,y3;
var r;

function setup() {
  noStroke();
  createCanvas(displayWidth, displayHeight);
  r = 100;
  x1 = random(width*0.4,width*0.6);
  y1 = random(height*0.4,height*0.6);
  x2 = x1 + random(-r,r);
  y2 = y1 + random(-r,r);
  x3 = x2 + random(-r,r);
  y3 = y2 + random(-r,r);
}

function draw() {
  fill(random(255),random(255),random(255),100);
  triangle(x1,y1,x2,y2,x3,y3);
  x1 = x3;
  y1 = y3;
  x1 = keepOnBoardX(x1);
  y1 = keepOnBoardY(y1);
  x2 = x1 + random(-r,r);
  y2 = y1 + random(-r,r);
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
