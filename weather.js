var weather;

var api = 'http://api.openweathermap.org/data/2.5/weather?q=';
var apikey = '&appid=65c6d7e7858bac615cecae2db5525bf5';
var units = '&units=metric';

var input;

function setup() {
  createCanvas(400, 200);
  var button = select('#submit');
  button.mousePressed(weatherAsk);
  input=select('#city');
}

function weatherAsk(){
  var url = api + input.value() + apikey + units;
  loadJSON(url, gotData, 'jsonp');
}

function gotData(data) {
  weather = data;
}

function draw() {
  background(0);
  
  if (weather) {
    var temp = weather.main.temp;
    var humidity = weather.main.humidity;
    fill(200,250,0);
    text('temparature:'+temp+'degree',50,175);
     text('humidity:'+humidity+'degree',250,175);
    fill(255);
    ellipse(100, 100, temp, temp);
    ellipse(300, 100, humidity, humidity);
   
  }
}