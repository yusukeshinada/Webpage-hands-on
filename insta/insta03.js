var api = 'https://api.instagram.com/v1/users/self/media/recent/?access_token=';
var token = '497327807.eba9126.240714cf30254f649e0751182224032c';

function setup() {
	noCanvas();
	var url = api + token;
	loadJSON(url, gotData, "jsonp");
}

function gotData(insta) {
	for (var i = 0; i < 9; i++) {
		var scale = createImg(insta.data[i].images.thumbnail.url);
		scale.scale(10, 100);
	}	
}

function draw() {

}