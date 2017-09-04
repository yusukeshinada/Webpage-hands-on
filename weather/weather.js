var weather;
var input1, button1;
var input2, button2;
var api = 'http://api.openweathermap.org/data/2.5/weather?q=';
var apiKey = '&APPID=65c6d7e7858bac615cecae2db5525bf5&units=metric';
var mul = 3;

var circle; // set up for object.
var weatherAsk;

function setup() {
	createCanvas(400, 300);
	circle = new Circle();
	weatherAsk = new WeatherAsk();

	//setup the button, 1.Access to ID in html, 2. Connect the button to mousePressed().  
	button1 = select('#button1');
	button1.mousePressed(weatherAsk.ask1);
	input1 = select('#cityName1');
	// input1.position(0,0);
	// button1.position(133,1);
	
	button2 = select('#button2');
	button2.mousePressed(weatherAsk.ask2); //Call the function at pressing the mouse. 
	input2 = select('#cityName2');
	// input2.position(186,0);
	// button2.position(320,1);
}

function gotData(data) {
	weather = data;
}

function draw() {
	background(51);
	circle.display();
}

function WeatherAsk() {
		
	this.ask1 = function() {
		var url = api + input1.value() + apiKey;
		loadJSON(url, gotData);
		var url2 = api + input2.value() + apiKey;
		loadJSON(url2, gotData);
		
	}
	this.ask2 = function() {
		var url2 = api + input2.value() + apiKey;
		loadJSON(url2, gotData);
	}
}

function Circle() {
	this.display = function() {

		if (weather) {
			
			var temp = weather.main.temp;
			var tempMn = weather.main.temp_min;
			var tempMx = weather.main.temp_max;
			noFill();
			stroke(0, 255, 200);
			strokeWeight(2);
			line(width / 2 - 130, height / 2 - temp * mul / 2, width / 2 + 130, height / 2 - tempMx * mul / 2);
			line(width / 2 - 130, height / 2 + temp * mul / 2, width / 2 + 130, height / 2 + tempMx * mul / 2);
			ellipse(width / 2 - 130, height / 2, temp * mul, temp * mul);
			ellipse(width / 2, height / 2, tempMn * mul, tempMn * mul);
			ellipse(width / 2 + 130, height / 2, tempMx * mul, tempMx * mul);
			noStroke();
			fill(200, 255, 0);
			textAlign(CENTER);
			text('The temparature of ' + input1.value() + " and " + input2.value(), width / 2, 50);
			text('Min ' + tempMn, width / 2 - 130, height / 2 + 5);
			text('Ave ' + temp, width / 2, height / 2 + 5);
			text('Max ' + tempMx, width / 2 + 130, height / 2 + 5);

		}
	}
}