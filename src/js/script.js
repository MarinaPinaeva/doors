/* function myMap() {
    const mapCanvas = document.getElementById("map");
    const mapOptions = {
      center: new google.maps.LatLng(51.7, -0.9), zoom: 5
    };
    const map = new google.maps.Map(mapCanvas, mapOptions);
  } */


/* 	function myMap() {
		const element = document.getElementById('map');
		const options = {
			zoom: 5,
			center: {lat: 87318658669746, lng: 53.20646285153901}, 56.8732083911975, 53.20651090579342
		};
		const map = new google.maps.Map(element, options);
    }; */

/* 
let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 56.8732083911975, lng: 53.20651090579342 },
    zoom: 8,
  });
} */

$(document).ready(function() {
    $(window).scroll(function(){
        if ($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });
    
    $("a[href^='#up']").click(function(){
        $("html, body").animate({scrollTop: "0px"});
        return false;
    });
});


