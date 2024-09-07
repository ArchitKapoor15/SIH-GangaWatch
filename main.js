var map = L.map("map").setView([29.95583333, 78.17166667], 10);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);
var marker1 = L.marker([29.81680542, 77.87120495])
    .addTo(map)
    .bindPopup('<div class="marker1-content">Roorkee, Haridwar</div>');

var marker2 = L.marker([29.92722222, 78.02111111])
    .addTo(map)
    .bindPopup('<div class="marker2-content">Damkothi, Haridwar</div>');

var marker3 = L.marker([29.88027778, 78.14416667])
    .addTo(map)
    .bindPopup('<div class="marker3-content">Balkumari Mandir, Haridwar</div>');

var marker4 = L.marker([29.95583333, 78.17166667])
    .addTo(map)
    .bindPopup('<div class="marker4-content">Har Ki Pauri</div>');

var marker5 = L.marker([30.07583333, 78.28888889])
    .addTo(map)
    .bindPopup('<div class="marker5-content">Bairaaj, Rishikesh</div>');

var marker6 = L.marker([30.12666667, 78.33000000])
    .addTo(map)
    .bindPopup('<div class="marker6-content">Lakshman Jhula</div>');

