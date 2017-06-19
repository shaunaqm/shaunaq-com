var length=1000;
var rnd = 0.7;
var x = [];
var y = [];
var z = [];
var r = 0;
var g = 0;
var b = 0;
function setup() {

	var canvas = createCanvas(512, 256);
	canvas.parent('heading');

	for (var i = 0; i<length; i++){
		x[i] = width / 5;
		y[i] = height / 2;
		z[i] = 0 / 2;
	}
	frameRate(30);

}

function draw() {
	background(255);


// rnd = sin(13*rnd);
strokeWeight(0);
textSize(7);
fill(171);
text(rnd, 0, 10);
strokeWeight(1);



for (var i = 1; i<length; i++){
	x[i-1] = x[i];
	y[i-1] = y[i];
	z[i-1] = z[i];
}

x[length-1] += rndm()*5; 
y[length-1] += rndm()*5; 
z[length-1] += rndm()*5;

x[length-1] = constrain(x[length-1], 0, width);
y[length-1] = constrain(y[length-1], 0, height);
z[length-1] = constrain(z[length-1], 0, 512);

for (var i = 1; i<length; i++){
	stroke(0, 0, 0, i/length*187);
	line(x[i-1],y[i-1],x[i],y[i]);
}

}

function rndm(){
	rnd = sin(13*rnd);
	return rnd;
}
