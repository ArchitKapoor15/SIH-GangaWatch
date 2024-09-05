import './style.css';
import Map from 'ol/Map.js';
import OSM from 'ol/source/OSM.js';
import TileLayer from 'ol/layer/Tile.js';
import View from 'ol/View.js';

const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new OSM(),
    }),
  ],
  view: new View({
    center: [0, 0],
    zoom: 2,
  }),
});


// <div style="width:100%; height:100%" id="map"></div>
// <script defer="defer" type="text/javascript">
// var map = new OpenLayers.Map('map');
// var wms =new OpenLayers.Layer.WMS("Bhuvan LULC 50K", "https://bhuvan-vec2.nrsc.gov.in/bhuvan/wms", {layers: 'lulc:BR_LULC50K_1112'} );
// map.addLayer(wms);
// map.zoomToMaxExtent();
// </script>

// <script src="http://openlayers.org/api/2/OpenLayers.js"></script>