require('../node_modules/openlayers/dist/ol.css');
require('./index.css');

var ol = require('openlayers');

var map = new ol.Map({
  controls: ol.control.defaults({attributionOptions: {collapsible: false}}),
  target: 'map',
  layers: [
    new ol.layer.Tile({
      source: new ol.source.TileWMS({
        url: 'http://student.ifip.tuwien.ac.at/geoserver/wms',
        params: {LAYERS: 'ifip_2015:nyc_census_block'}
      })
    })
  ],
  view: new ol.View({
    center: ol.proj.fromLonLat([16.373064, 48.20833]),
    zoom: 13
  })
});

var feedbackPoints = new ol.source.Vector({
  features: new ol.Collection(),
});
map.addLayer(new ol.layer.Vector({ source: feedbackPoints }));
feedbackPoints.addFeature(feature);
var modify = new ol.interaction.Modify({
  features: feedbackPoints.getFeaturesCollection()
});
map.addInteraction(modify);

var modify = new ol.interaction.Modify({
  features: feedbackPoints.getFeaturesCollection()
});
map.addInteraction(modify);

var geolocation = new ol.Geolocation({
  projection: map.getView().getProjection(),
  tracking: true
});
geolocation.once('change:position', function(evt) {
  feature.getGeometry().setCoordinates(geolocation.getPosition());
  map.getView().setCenter(geolocation.getPosition());
});
