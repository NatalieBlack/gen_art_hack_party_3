var osc, analyzer, delay;

function setup() {
  createCanvas(200, 200);
  osc = new p5.Oscillator();
  osc.setType('sine');
  osc.freq(240);
  osc.amp(0.5);
  osc.start();

  analyzer = new p5.Amplitude();
  delay = new p5.Delay();

  analyzer.setInput(osc);

}

function Shape(){
	this.x = height/2;
	this.y = 50;
	this.width = width;
	this.height = 50;

	this.display = function(){
		rect(this.x, this.y, this.width, this.height);
	}
}

function draw() {
  background(255);
  var rms = analyzer.getLevel();
 	fill('green');
  stroke('green');
  var rand = random(0.1,5);
  x = osc.amp(rand);
  var rand2 = random(0, 255);
  var rand3 = random(0,255);
  y = osc.freq(rand2);
  var derp = 50+rms*500;
  delay.process(osc, 5, .7, 4000);
  env = new p5.Env(.01, 0.4, .2, .5);

  env.play(osc);

  for(var i = 0; i < 2500; i++){
  	if(i <= 2500){
  		stroke(rand3, rand2, derp, i);
			line(i, 5, rand3, i);
			stroke(rand2, rand3, derp, i);
			line(rand3, i*PI, derp, i);
			stroke(rand3, rand2, derp, i);
			line(-derp, -rand, -PI, -i);
			stroke(rand3, rand2, derp, i);
			line(derp, PI, rand3, i);
			stroke(rand2, rand3, derp, i);
			line(rand3, PI, derp, i);
			stroke(rand3, rand2, derp, i);
			line(-derp, -rand, -PI, -i);
  	}else{
  		i = 0;
  	}
  }
}

