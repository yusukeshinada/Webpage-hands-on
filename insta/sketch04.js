var api = 'https://api.instagram.com/v1/users/self/media/recent/?access_token=';
var token = '497327807.eba9126.240714cf30254f649e0751182224032c';

function setup() {
	noCanvas();
	var url = api + token;
	loadJSON(url, gotData, "jsonp");
}

function gotData(insta) {
	for (var i = 0; i < 12; i++) {
		var img = createImg(insta.data[i].images.thumbnail.url);
		img.size(100, 100);
	}
}

function draw() {

}