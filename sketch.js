var length=1000;
var rnd = 0.7;
var x = [];
var y = [];
function setup() {

  createCanvas(512, 256);
  for (var i = 0; i<length; i++){
  x[i] = width / 2;
  y[i] = height / 2;
  }
  frameRate(30);

}

function draw() {
  background(57);


// rnd = sin(13*rnd);
strokeWeight(0);
textSize(7);
fill(171);
  text(rnd, 20, 20);
  strokeWeight(1);


 	
 	for (var i = 1; i<length; i++){
  x[i-1] = x[i];
  y[i-1] = y[i];
  }
  
  x[length-1] += rndm()*5; //random(-5,5);
  y[length-1] += rndm()*5; //random(-5,5);
  
  for (var i = 1; i<length; i++){
  stroke(i/length*200+57);
  line(x[i-1],y[i-1],x[i],y[i]);
  }

}

function rndm(){
rnd = sin(13*rnd);
return rnd;
}
