// Speed in KM per Hour
const walk = 3;
const bike = 60;
const car = 80;

// Location 1 (Latitude & Longitude)
var lat1 = 18.943889;
var lon1 = 72.835991;

// Location 2 (Latitude & Longitude)
var lat2 = 19.218330;
var lon2 = 72.978088;

var totalDistance = 0;

// Function to calculate distance using Haversine Formula
function calculateDistance() {

    var lat1Rad = lat1 * Math.PI / 180;
    var lon1Rad = lon1 * Math.PI / 180;
    var lat2Rad = lat2 * Math.PI / 180;
    var lon2Rad = lon2 * Math.PI / 180;

    totalDistance = Math.acos(
        Math.sin(lat1Rad) * Math.sin(lat2Rad) +
        Math.cos(lat1Rad) * Math.cos(lat2Rad) *
        Math.cos(lon2Rad - lon1Rad)
    ) * 6371;

    console.log("Distance: " + totalDistance.toFixed(2) + " KM");
}

// Call function
calculateDistance();

// Select travel mode
var mode = prompt("Select travel mode:\n1. Walk\n2. Bike\n3. Car");

var time = 0;

if (mode == '1') {
    time = totalDistance / walk;
} else if (mode == '2') {
    time = totalDistance / bike;
} else if (mode == '3') {
    time = totalDistance / car;
} else {
    console.log("Invalid option selected");
}

// Display time
if (time > 0) {
    if (time < 1) {
        console.log("Time: " + (time * 60).toFixed(2) + " minutes");
    } else {
        console.log("Time: " + time.toFixed(2) + " hours");
    }
}
