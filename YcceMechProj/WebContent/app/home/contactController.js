
app.controller('contactController', function($scope, $location, $rootScope) {

	/** GOOGLE MAP API*/
	// Initialize google maps
	function initMap() {
	  var myCenter = new google.maps.LatLng(18.62238239501155,73.71506460869136);
	  var mapCanvas = document.getElementById("map");
	  var mapOptions = {center: myCenter, zoom: 11};
	  var map = new google.maps.Map(mapCanvas, mapOptions);
	  //Bounce Marker
	  var marker = new google.maps.Marker({
		    position: myCenter,
		    animation: google.maps.Animation.BOUNCE
		  });
	  marker.setMap(map);
	 
	// Zoom to 9 when clicking on marker
	  /**google.maps.event.addListener(marker,'click',function() {
		  var pos = map.getZoom();
		  map.setZoom(15);
		  map.setCenter(marker.getPosition());
		  window.setTimeout(function() {map.setZoom(pos);},5000);
	  });*/
	  
	//Info Window on click
	  google.maps.event.addListener(marker,'click',function() {
		    var infowindow = new google.maps.InfoWindow({
		      content:" -- Studio"
		    });
		  infowindow.open(map,marker);
		  });
	  
	};
	
	initMap();
});
