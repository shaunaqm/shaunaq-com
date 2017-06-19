var length=1000;
var rnd = 0.7;
var x = [];
var y = [];
var z = [];
var r = [];
var g = [];
var b = [];
function setup() {

	var canvas = createCanvas(512, 256);
	canvas.parent('heading');

	for (var i = 0; i<length; i++){
		x[i] = width / 5;
		y[i] = height / 2;
		z[i] = 0 / 2;
		r[i] = 0;
		g[i] = 0;
		b[i] = 0;
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
	r[i-1] = r[i];
	g[i-1] = g[i];
	b[i-1] = b[i];
}

x[length-1] += rndm()*5; 
y[length-1] += rndm()*5; 
z[length-1] += rndm()*5;
r[length-1] += rndm()*10;
g[length-1] += rndm()*10;
b[length-1] += rndm()*10;

x[length-1] = constrain(x[length-1], 0, width);
y[length-1] = constrain(y[length-1], 0, height);
z[length-1] = constrain(z[length-1], 0, 512);
r[length-1] = constrain(r[length-1],0,255);
g[length-1] = constrain(g[length-1],0,255);
b[length-1] = constrain(b[length-1],0,255);

for (var i = 1; i<length; i++){

	stroke(r[i], g[i], b[i], i/length*187);
	line(x[i-1],y[i-1],x[i],y[i]);
}

}

function rndm(){
	rnd = sin(13*rnd);
	return rnd;
}