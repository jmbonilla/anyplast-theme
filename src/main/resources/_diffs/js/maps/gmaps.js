var geocoder;
var map;
function initialize(address, title) {
	geocoder = new google.maps.Geocoder();
	var mapOptions = {
		zoom : 15,
		mapTypeId : google.maps.MapTypeId.ROADMAP
	}
	map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
	codeAddress(address, title);
}

function codeAddress(address, title) {
	geocoder.geocode({
		'address' : address
	}, function(results, status) {
		if (status == google.maps.GeocoderStatus.OK) {
			map.setCenter(results[0].geometry.location);
			marker = new google.maps.Marker({
				map : map,
				position : results[0].geometry.location,
				title : title + '  -  ' + address
			});
		} else {
			alert('Location not found. Try it later.');
		}
	});
}