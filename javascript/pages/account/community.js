let placesService;
let markers = [];


function initMap() {
    const options = {
        center: { lat: 40.873, lng: -74.144 },
        zoom: 15
    };


    map = new google.maps.Map(document.getElementById('map'), options);
    placesService = new google.maps.places.PlacesService(map);
}


function showLocation() {
    const zipCode = document.getElementById('zipcode').value;
    const geocoder = new google.maps.Geocoder();


    geocoder.geocode({ 'address': zipCode }, function (results, status) {
        if (status === 'OK') {
            const location = results[0].geometry.location;
            map.setCenter(location);
            const marker = new google.maps.Marker({
                position: location,
                map: map
            });


            searchNearbyLibraries(location);
        } else {
            console.error('Geocode was not successful for the following reason: ' + status);
        }
    });


    return false;
}


function searchNearbyLibraries(location) {
    if (placesService) {
        const request = {
            location: location,
            radius: 5000,
            type: 'library'
        };


        placesService.nearbySearch(request, callback);
    } else {
        console.error('Places Service not initialized');
    }
}


function callback(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
        clearMarkers();
        for (let i = 0; i < Math.min(3, results.length); i++) {
            const place = results[i];
            const location = place.geometry.location;
            const marker = new google.maps.Marker({
                position: location,
                map: map,
                title: place.name
            });


            const infowindow = new google.maps.InfoWindow({
                content: `<strong>${place.name}</strong><br>${place.vicinity}`
            });


            marker.addListener('click', function() {
                infowindow.open(map, marker);
            });


            markers.push(marker);
        }
        adjustMapBounds();
    } else {
        console.error('Places service failed:', status);
    }
}


function clearMarkers() {
    for (let i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
    }
    markers = [];
}


function adjustMapBounds() {
    const bounds = new google.maps.LatLngBounds();
    for (let i = 0; i < markers.length; i++) {
        bounds.extend(markers[i].getPosition());
    }
    map.fitBounds(bounds);
}
