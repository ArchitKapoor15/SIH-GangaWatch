var map = L.map("map").setView([29.95583333, 78.17166667], 10);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);
var marker1 = L.marker([29.81680542, 77.87120495]).addTo(map).bindPopup("Roorkee, Haridwar");
var marker2 = L.marker([29.92722222, 78.02111111]).addTo(map).bindPopup("Damkothi, Haridwar");
var marker3 = L.marker([29.88027778, 78.14416667]).addTo(map).bindPopup("Balkumari Mandir, Haridwar");
var marker4 = L.marker([29.95583333, 78.17166667]).addTo(map).bindPopup("Har Ki Pauri");
var marker5 = L.marker([30.07583333, 78.28888889]).addTo(map).bindPopup("Bairaaj, Rishikesh");
var marker6 = L.marker([30.12666667, 78.33000000]).addTo(map).bindPopup("Lakshman Jhula");
