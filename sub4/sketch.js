//author: Natalie Black :)
 var baset, tvar;
 var SW;
 var j = 0;
 var i = 0;
 var x1,x2,x3,y1,y2,y3,w1,w2,w3,h1,h2,h3;
 var BG = 255;
 var exes;
 var c1,c2,c3;

function mousePressed() {
  mp();
}
function mp(){

    rect(random(width-100), random(height-100),random(100,400), random(100,400));
    rect(random(width-100), random(height-100),random(100,400),random(100,400));

    rect(random(width-100), random(height-100),random(100,400),random(100,400));

    strokeWeight(0.5);
}

function setup() {
  noFill();
  SW = 10;
  stroke(30);
  c1 = color(random(255),100);
  c2 = color(random(255),100);
  c3 = color(random(255),100);

  strokeCap(SQUARE);
  createCanvas(displayWidth, displayHeight);
 exes = [random((width*0.25), (height*0.75)), random((width*0.25), (height*0.75)), random((width*0.25), (height*0.75)), random((width*0.25), (height*0.75))];
  background(BG);
  //background(color(0,100,100, 1));
  baset = 5;
  tvar = 0;
   x1 = random(width);
      x2 = random(width);
      x3 = random(width);
      y1 = random(height);
      y2 = random(height);
      y3 = random(height);
      w1 = random(100,250);
      w2 = random(100,250);
      w3 = random(100,250);
      h1 = random(100,250);
      h2 = random(100,250);
      h3 = random(100,250);
}

function coinToss() {
  return random(4) > 2;
}

function draw() {    
  
  if(i++==150){
      i = 0;
      //background(BG);
      x1 = random(width-100);
      x2 = random(width-100);
      x3 = random(width-100);
      y1 = random(height-100);
      y2 = random(height-100);
      y3 = random(height-100);
      w1 = random(100,400);
      w2 = random(100,400);
      w3 = random(100,400);
      h1 = random(100,400);
      h2 = random(100,400);
      h3 = random(100,400);
      //c1 = color(random(10,245),100);
      //c2 = color(random(10,245),100);
      //c3 = color(random(10,245),100);
      if(coinToss()){
        c1 = color(random(225,245),random(225,245),random(225,245),100);
      } else {
        c1 = color(random(45),random(45),random(45),100);
      }
      if(coinToss()){
        c2 = color(random(225,245),random(225,245),random(225,245),100);
      } else {
        c2 = color(random(45),random(45),random(45),100);
      }
      if(coinToss()){
        c3 = color(random(225,245),random(225,245),random(225,245),100);
      } else {
        c3 = color(random(45),random(45),random(45),100);
      }
  }
//    s1.scribble();
    //s2.scribble();

      stroke(c1);
      var lx1 = random(x1,x1+w1);
      var ly1 = random(y1,y1+h1);
      line(lx1, y1+random(-5,5), lx1, y1+h1+random(-5,5));
      line(x1+random(-5,5), ly1, x1+w1+random(-5,5), ly1);

      stroke(c2);
      var lx2 = random(x2,x2+w2);
      var ly2 = random(y2,y2+h2);
      line(lx2, y2+random(-5,5), lx2, y2+h2+random(-5,5));
      line(x2+random(-5,5), ly2, x2+w2+random(-5,5), ly2);

      stroke(c3);
      var lx3 = random(x3,x3+w3);
      var ly3 = random(y3,y3+h3);
      line(lx3, y3+random(-5,5), lx3, y3+h3+random(-5,5));
      line(x3+random(-5,5), ly3, x3+w3+random(-5,5), ly3);



    //strokeWeight(1.25);
    //lines();
//    stroke(255, 1);
//
//
//
//            stroke(255, 10);
//
//
//

    //s3.scribble();

}
