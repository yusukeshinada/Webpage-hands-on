var startTime;
var timer = 2000;
var points = [];
var rad = [];
var pointsNum = 100;
var a;
var b;
var c;
var timer;
var lerpInc = 0.03333333;
var lerpVal= 0;
var len;
var cnv;

function setup(){
	cnv = createCanvas(windowWidth, 300);
	startTime = millis();
	
	//array of points
	for(var i = 0; i < pointsNum; i++){
		points[i] = createVector(Math.random()*width, Math.random()*height);
		rad[i] = (Math.random()*5)+1;
	}

	a = createVector(points[0].x, points[0].y);
	b = a;
	c = createVector(points[1].x, points[1].y);
	sketch = true;
}

function draw(){
	// background(255);
	clear();
	strokeWeight(1);
	stroke(200);
	noFill();
	for(var i = 0; i < pointsNum; i++){
		ellipse(points[i].x, points[i].y, rad[i], rad[i]);
	}

	stroke(50);

	lerpVal += lerpInc;

	if(lerpVal < 1){//b extends towards c
		b.x = lerp(a.x, c.x, lerpVal);
		b.y = lerp(a.y, c.y, lerpVal);
	}else if(lerpVal < 2){//a extends towards b
		a.x = lerp(a.x, b.x, lerpVal-1);
		a.y = lerp(a.y, b.y, lerpVal-1);
	}else{
		changePoint();
	}

	line(a.x, a.y, b.x, b.y);

	if(!checkMobile()){
		for(var i = 0; i < pointsNum; i++){
			stroke(200-100*(i/pointsNum));
			if(dist(points[i].x, points[i].y, mouseX, mouseY) < 100){
				line(points[i].x, points[i].y, mouseX, mouseY);
			}
		}
	}else{
		var p = createVector(map(cos(millis()*0.001), -1, 1, 0, width), map(sin(millis()*0.003), -1, 1, 0, 200));
		for(var i = 0; i < pointsNum; i++){
			stroke(200-100*(i/pointsNum));
			if(dist(points[i].x, points[i].y, p.x, p.y) < map(sin(millis()*0.001), -1, 1, 20, 80)){
				line(points[i].x, points[i].y, p.x, p.y);
			}
		}
	}

}

function checkMobile(){
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
    return true;
	}else{
		return false;
	}
}

function changePoint(){
	var index = parseInt(Math.random()*points.length);
	a = c;
	c = createVector(points[index].x, points[index].y);
	lerpVal = 0;
	startTime = millis() + (Math.random()*4000);
}