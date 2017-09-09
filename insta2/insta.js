var api = 'https://api.instagram.com/v1/users/self/media/recent/?access_token=';
var token = '497327807.eba9126.240714cf30254f649e0751182224032c';

function setup() {
	noCanvas();
	var url = api + token;
 	loadJSON(url, gotData, "jsonp");
}

function gotData(data){
	print(data);
}

function draw() {
	
}