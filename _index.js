(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = function (css, customDocument) {
  var doc = customDocument || document;
  if (doc.createStyleSheet) {
    var sheet = doc.createStyleSheet()
    sheet.cssText = css;
    return sheet.ownerNode;
  } else {
    var head = doc.getElementsByTagName('head')[0],
        style = doc.createElement('style');

    style.type = 'text/css';

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(doc.createTextNode(css));
    }

    head.appendChild(style);
    return style;
  }
};

module.exports.byUrl = function(url) {
  if (document.createStyleSheet) {
    return document.createStyleSheet(url).ownerNode;
  } else {
    var head = document.getElementsByTagName('head')[0],
        link = document.createElement('link');

    link.rel = 'stylesheet';
    link.href = url;

    head.appendChild(link);
    return link;
  }
};

},{}],2:[function(require,module,exports){
var css = ".ol-mouse-position{top:8px;right:8px;position:absolute}.ol-scale-line{background:#95b9e6;background:rgba(0,60,136,.3);border-radius:4px;bottom:8px;left:8px;padding:2px;position:absolute}.ol-scale-line-inner{border:1px solid #eee;border-top:none;color:#eee;font-size:10px;text-align:center;margin:1px;will-change:contents,width}.ol-overlay-container{will-change:left,right,top,bottom}.ol-unsupported{display:none}.ol-viewport .ol-unselectable{-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.ol-control{position:absolute;background-color:#eee;background-color:rgba(255,255,255,.4);border-radius:4px;padding:2px}.ol-control:hover{background-color:rgba(255,255,255,.6)}.ol-zoom{top:.5em;left:.5em}.ol-rotate{top:.5em;right:.5em;transition:opacity .25s linear,visibility 0s linear}.ol-rotate.ol-hidden{opacity:0;visibility:hidden;transition:opacity .25s linear,visibility 0s linear .25s}.ol-zoom-extent{top:4.643em;left:.5em}.ol-full-screen{right:.5em;top:.5em}@media print{.ol-control{display:none}}.ol-control button{display:block;margin:1px;padding:0;color:#fff;font-size:1.14em;font-weight:700;text-decoration:none;text-align:center;height:1.375em;width:1.375em;line-height:.4em;background-color:#7b98bc;background-color:rgba(0,60,136,.5);border:none;border-radius:2px}.ol-control button::-moz-focus-inner{border:none;padding:0}.ol-zoom-extent button{line-height:1.4em}.ol-compass{display:block;font-weight:400;font-size:1.2em;will-change:transform}.ol-touch .ol-control button{font-size:1.5em}.ol-touch .ol-zoom-extent{top:5.5em}.ol-control button:focus,.ol-control button:hover{text-decoration:none;background-color:#4c6079;background-color:rgba(0,60,136,.7)}.ol-zoom .ol-zoom-in{border-radius:2px 2px 0 0}.ol-zoom .ol-zoom-out{border-radius:0 0 2px 2px}.ol-attribution{text-align:right;bottom:.5em;right:.5em;max-width:calc(100% - 1.3em)}.ol-attribution ul{margin:0;padding:0 .5em;font-size:.7rem;line-height:1.375em;color:#000;text-shadow:0 0 2px #fff}.ol-attribution li{display:inline;list-style:none;line-height:inherit}.ol-attribution li:not(:last-child):after{content:\" \"}.ol-attribution img{max-height:2em;max-width:inherit}.ol-attribution button,.ol-attribution ul{display:inline-block}.ol-attribution.ol-collapsed ul{display:none}.ol-attribution.ol-logo-only ul{display:block}.ol-attribution:not(.ol-collapsed){background:rgba(255,255,255,.8)}.ol-attribution.ol-uncollapsible{bottom:0;right:0;border-radius:4px 0 0;height:1.1em;line-height:1em}.ol-attribution.ol-logo-only{background:0 0;bottom:.4em;height:1.1em;line-height:1em}.ol-attribution.ol-uncollapsible img{margin-top:-.2em;max-height:1.6em}.ol-attribution.ol-logo-only button,.ol-attribution.ol-uncollapsible button{display:none}.ol-zoomslider{top:4.5em;left:.5em;width:24px;height:200px}.ol-zoomslider-thumb{position:absolute;background:#7b98bc;background:rgba(0,60,136,.5);border-radius:2px;cursor:pointer;height:10px;width:22px;margin:3px}.ol-touch .ol-zoomslider{top:5.5em;width:2.052em}.ol-touch .ol-zoomslider-thumb{width:1.8em}.ol-overviewmap{left:.5em;bottom:.5em}.ol-overviewmap.ol-uncollapsible{bottom:0;left:0;border-radius:0 4px 0 0}.ol-overviewmap .ol-overviewmap-map,.ol-overviewmap button{display:inline-block}.ol-overviewmap .ol-overviewmap-map{border:1px solid #7b98bc;height:150px;margin:2px;width:150px}.ol-overviewmap:not(.ol-collapsed) button{bottom:1px;left:2px;position:absolute}.ol-overviewmap.ol-collapsed .ol-overviewmap-map,.ol-overviewmap.ol-uncollapsible button{display:none}.ol-overviewmap:not(.ol-collapsed){background:rgba(255,255,255,.8)}.ol-overviewmap-box{border:2px dotted rgba(0,60,136,.7)}"; (require("./../../cssify"))(css); module.exports = css;
},{"./../../cssify":1}],3:[function(require,module,exports){
var css = "body {\n  font-family: sans-serif;\n}\n#map {\n  height: 400px;\n}\n"; (require("./../node_modules/cssify"))(css); module.exports = css;
},{"./../node_modules/cssify":1}],4:[function(require,module,exports){
require('../node_modules/openlayers/dist/ol.css');
require('./index.css');

var ol = window.ol;

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

},{"../node_modules/openlayers/dist/ol.css":2,"./index.css":3}]},{},[4])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvY3NzaWZ5L2Jyb3dzZXIuanMiLCJub2RlX21vZHVsZXMvb3BlbmxheWVycy9kaXN0L29sLmNzcyIsInNyYy9pbmRleC5jc3MiLCJzcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JDQTs7QUNBQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MsIGN1c3RvbURvY3VtZW50KSB7XG4gIHZhciBkb2MgPSBjdXN0b21Eb2N1bWVudCB8fCBkb2N1bWVudDtcbiAgaWYgKGRvYy5jcmVhdGVTdHlsZVNoZWV0KSB7XG4gICAgdmFyIHNoZWV0ID0gZG9jLmNyZWF0ZVN0eWxlU2hlZXQoKVxuICAgIHNoZWV0LmNzc1RleHQgPSBjc3M7XG4gICAgcmV0dXJuIHNoZWV0Lm93bmVyTm9kZTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgaGVhZCA9IGRvYy5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLFxuICAgICAgICBzdHlsZSA9IGRvYy5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuXG4gICAgc3R5bGUudHlwZSA9ICd0ZXh0L2Nzcyc7XG5cbiAgICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2MuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gICAgfVxuXG4gICAgaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgcmV0dXJuIHN0eWxlO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cy5ieVVybCA9IGZ1bmN0aW9uKHVybCkge1xuICBpZiAoZG9jdW1lbnQuY3JlYXRlU3R5bGVTaGVldCkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVTdHlsZVNoZWV0KHVybCkub3duZXJOb2RlO1xuICB9IGVsc2Uge1xuICAgIHZhciBoZWFkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXSxcbiAgICAgICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcblxuICAgIGxpbmsucmVsID0gJ3N0eWxlc2hlZXQnO1xuICAgIGxpbmsuaHJlZiA9IHVybDtcblxuICAgIGhlYWQuYXBwZW5kQ2hpbGQobGluayk7XG4gICAgcmV0dXJuIGxpbms7XG4gIH1cbn07XG4iLCJ2YXIgY3NzID0gXCIub2wtbW91c2UtcG9zaXRpb257dG9wOjhweDtyaWdodDo4cHg7cG9zaXRpb246YWJzb2x1dGV9Lm9sLXNjYWxlLWxpbmV7YmFja2dyb3VuZDojOTViOWU2O2JhY2tncm91bmQ6cmdiYSgwLDYwLDEzNiwuMyk7Ym9yZGVyLXJhZGl1czo0cHg7Ym90dG9tOjhweDtsZWZ0OjhweDtwYWRkaW5nOjJweDtwb3NpdGlvbjphYnNvbHV0ZX0ub2wtc2NhbGUtbGluZS1pbm5lcntib3JkZXI6MXB4IHNvbGlkICNlZWU7Ym9yZGVyLXRvcDpub25lO2NvbG9yOiNlZWU7Zm9udC1zaXplOjEwcHg7dGV4dC1hbGlnbjpjZW50ZXI7bWFyZ2luOjFweDt3aWxsLWNoYW5nZTpjb250ZW50cyx3aWR0aH0ub2wtb3ZlcmxheS1jb250YWluZXJ7d2lsbC1jaGFuZ2U6bGVmdCxyaWdodCx0b3AsYm90dG9tfS5vbC11bnN1cHBvcnRlZHtkaXNwbGF5Om5vbmV9Lm9sLXZpZXdwb3J0IC5vbC11bnNlbGVjdGFibGV7LXdlYmtpdC10b3VjaC1jYWxsb3V0Om5vbmU7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1raHRtbC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lOy13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjp0cmFuc3BhcmVudH0ub2wtY29udHJvbHtwb3NpdGlvbjphYnNvbHV0ZTtiYWNrZ3JvdW5kLWNvbG9yOiNlZWU7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC40KTtib3JkZXItcmFkaXVzOjRweDtwYWRkaW5nOjJweH0ub2wtY29udHJvbDpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjYpfS5vbC16b29te3RvcDouNWVtO2xlZnQ6LjVlbX0ub2wtcm90YXRle3RvcDouNWVtO3JpZ2h0Oi41ZW07dHJhbnNpdGlvbjpvcGFjaXR5IC4yNXMgbGluZWFyLHZpc2liaWxpdHkgMHMgbGluZWFyfS5vbC1yb3RhdGUub2wtaGlkZGVue29wYWNpdHk6MDt2aXNpYmlsaXR5OmhpZGRlbjt0cmFuc2l0aW9uOm9wYWNpdHkgLjI1cyBsaW5lYXIsdmlzaWJpbGl0eSAwcyBsaW5lYXIgLjI1c30ub2wtem9vbS1leHRlbnR7dG9wOjQuNjQzZW07bGVmdDouNWVtfS5vbC1mdWxsLXNjcmVlbntyaWdodDouNWVtO3RvcDouNWVtfUBtZWRpYSBwcmludHsub2wtY29udHJvbHtkaXNwbGF5Om5vbmV9fS5vbC1jb250cm9sIGJ1dHRvbntkaXNwbGF5OmJsb2NrO21hcmdpbjoxcHg7cGFkZGluZzowO2NvbG9yOiNmZmY7Zm9udC1zaXplOjEuMTRlbTtmb250LXdlaWdodDo3MDA7dGV4dC1kZWNvcmF0aW9uOm5vbmU7dGV4dC1hbGlnbjpjZW50ZXI7aGVpZ2h0OjEuMzc1ZW07d2lkdGg6MS4zNzVlbTtsaW5lLWhlaWdodDouNGVtO2JhY2tncm91bmQtY29sb3I6IzdiOThiYztiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCw2MCwxMzYsLjUpO2JvcmRlcjpub25lO2JvcmRlci1yYWRpdXM6MnB4fS5vbC1jb250cm9sIGJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcntib3JkZXI6bm9uZTtwYWRkaW5nOjB9Lm9sLXpvb20tZXh0ZW50IGJ1dHRvbntsaW5lLWhlaWdodDoxLjRlbX0ub2wtY29tcGFzc3tkaXNwbGF5OmJsb2NrO2ZvbnQtd2VpZ2h0OjQwMDtmb250LXNpemU6MS4yZW07d2lsbC1jaGFuZ2U6dHJhbnNmb3JtfS5vbC10b3VjaCAub2wtY29udHJvbCBidXR0b257Zm9udC1zaXplOjEuNWVtfS5vbC10b3VjaCAub2wtem9vbS1leHRlbnR7dG9wOjUuNWVtfS5vbC1jb250cm9sIGJ1dHRvbjpmb2N1cywub2wtY29udHJvbCBidXR0b246aG92ZXJ7dGV4dC1kZWNvcmF0aW9uOm5vbmU7YmFja2dyb3VuZC1jb2xvcjojNGM2MDc5O2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDYwLDEzNiwuNyl9Lm9sLXpvb20gLm9sLXpvb20taW57Ym9yZGVyLXJhZGl1czoycHggMnB4IDAgMH0ub2wtem9vbSAub2wtem9vbS1vdXR7Ym9yZGVyLXJhZGl1czowIDAgMnB4IDJweH0ub2wtYXR0cmlidXRpb257dGV4dC1hbGlnbjpyaWdodDtib3R0b206LjVlbTtyaWdodDouNWVtO21heC13aWR0aDpjYWxjKDEwMCUgLSAxLjNlbSl9Lm9sLWF0dHJpYnV0aW9uIHVse21hcmdpbjowO3BhZGRpbmc6MCAuNWVtO2ZvbnQtc2l6ZTouN3JlbTtsaW5lLWhlaWdodDoxLjM3NWVtO2NvbG9yOiMwMDA7dGV4dC1zaGFkb3c6MCAwIDJweCAjZmZmfS5vbC1hdHRyaWJ1dGlvbiBsaXtkaXNwbGF5OmlubGluZTtsaXN0LXN0eWxlOm5vbmU7bGluZS1oZWlnaHQ6aW5oZXJpdH0ub2wtYXR0cmlidXRpb24gbGk6bm90KDpsYXN0LWNoaWxkKTphZnRlcntjb250ZW50OlxcXCIgXFxcIn0ub2wtYXR0cmlidXRpb24gaW1ne21heC1oZWlnaHQ6MmVtO21heC13aWR0aDppbmhlcml0fS5vbC1hdHRyaWJ1dGlvbiBidXR0b24sLm9sLWF0dHJpYnV0aW9uIHVse2Rpc3BsYXk6aW5saW5lLWJsb2NrfS5vbC1hdHRyaWJ1dGlvbi5vbC1jb2xsYXBzZWQgdWx7ZGlzcGxheTpub25lfS5vbC1hdHRyaWJ1dGlvbi5vbC1sb2dvLW9ubHkgdWx7ZGlzcGxheTpibG9ja30ub2wtYXR0cmlidXRpb246bm90KC5vbC1jb2xsYXBzZWQpe2JhY2tncm91bmQ6cmdiYSgyNTUsMjU1LDI1NSwuOCl9Lm9sLWF0dHJpYnV0aW9uLm9sLXVuY29sbGFwc2libGV7Ym90dG9tOjA7cmlnaHQ6MDtib3JkZXItcmFkaXVzOjRweCAwIDA7aGVpZ2h0OjEuMWVtO2xpbmUtaGVpZ2h0OjFlbX0ub2wtYXR0cmlidXRpb24ub2wtbG9nby1vbmx5e2JhY2tncm91bmQ6MCAwO2JvdHRvbTouNGVtO2hlaWdodDoxLjFlbTtsaW5lLWhlaWdodDoxZW19Lm9sLWF0dHJpYnV0aW9uLm9sLXVuY29sbGFwc2libGUgaW1ne21hcmdpbi10b3A6LS4yZW07bWF4LWhlaWdodDoxLjZlbX0ub2wtYXR0cmlidXRpb24ub2wtbG9nby1vbmx5IGJ1dHRvbiwub2wtYXR0cmlidXRpb24ub2wtdW5jb2xsYXBzaWJsZSBidXR0b257ZGlzcGxheTpub25lfS5vbC16b29tc2xpZGVye3RvcDo0LjVlbTtsZWZ0Oi41ZW07d2lkdGg6MjRweDtoZWlnaHQ6MjAwcHh9Lm9sLXpvb21zbGlkZXItdGh1bWJ7cG9zaXRpb246YWJzb2x1dGU7YmFja2dyb3VuZDojN2I5OGJjO2JhY2tncm91bmQ6cmdiYSgwLDYwLDEzNiwuNSk7Ym9yZGVyLXJhZGl1czoycHg7Y3Vyc29yOnBvaW50ZXI7aGVpZ2h0OjEwcHg7d2lkdGg6MjJweDttYXJnaW46M3B4fS5vbC10b3VjaCAub2wtem9vbXNsaWRlcnt0b3A6NS41ZW07d2lkdGg6Mi4wNTJlbX0ub2wtdG91Y2ggLm9sLXpvb21zbGlkZXItdGh1bWJ7d2lkdGg6MS44ZW19Lm9sLW92ZXJ2aWV3bWFwe2xlZnQ6LjVlbTtib3R0b206LjVlbX0ub2wtb3ZlcnZpZXdtYXAub2wtdW5jb2xsYXBzaWJsZXtib3R0b206MDtsZWZ0OjA7Ym9yZGVyLXJhZGl1czowIDRweCAwIDB9Lm9sLW92ZXJ2aWV3bWFwIC5vbC1vdmVydmlld21hcC1tYXAsLm9sLW92ZXJ2aWV3bWFwIGJ1dHRvbntkaXNwbGF5OmlubGluZS1ibG9ja30ub2wtb3ZlcnZpZXdtYXAgLm9sLW92ZXJ2aWV3bWFwLW1hcHtib3JkZXI6MXB4IHNvbGlkICM3Yjk4YmM7aGVpZ2h0OjE1MHB4O21hcmdpbjoycHg7d2lkdGg6MTUwcHh9Lm9sLW92ZXJ2aWV3bWFwOm5vdCgub2wtY29sbGFwc2VkKSBidXR0b257Ym90dG9tOjFweDtsZWZ0OjJweDtwb3NpdGlvbjphYnNvbHV0ZX0ub2wtb3ZlcnZpZXdtYXAub2wtY29sbGFwc2VkIC5vbC1vdmVydmlld21hcC1tYXAsLm9sLW92ZXJ2aWV3bWFwLm9sLXVuY29sbGFwc2libGUgYnV0dG9ue2Rpc3BsYXk6bm9uZX0ub2wtb3ZlcnZpZXdtYXA6bm90KC5vbC1jb2xsYXBzZWQpe2JhY2tncm91bmQ6cmdiYSgyNTUsMjU1LDI1NSwuOCl9Lm9sLW92ZXJ2aWV3bWFwLWJveHtib3JkZXI6MnB4IGRvdHRlZCByZ2JhKDAsNjAsMTM2LC43KX1cIjsgKHJlcXVpcmUoXCIuLy4uLy4uL2Nzc2lmeVwiKSkoY3NzKTsgbW9kdWxlLmV4cG9ydHMgPSBjc3M7IiwidmFyIGNzcyA9IFwiYm9keSB7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG59XFxuI21hcCB7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbn1cXG5cIjsgKHJlcXVpcmUoXCIuLy4uL25vZGVfbW9kdWxlcy9jc3NpZnlcIikpKGNzcyk7IG1vZHVsZS5leHBvcnRzID0gY3NzOyIsInJlcXVpcmUoJy4uL25vZGVfbW9kdWxlcy9vcGVubGF5ZXJzL2Rpc3Qvb2wuY3NzJyk7XG5yZXF1aXJlKCcuL2luZGV4LmNzcycpO1xuXG52YXIgb2wgPSB3aW5kb3cub2w7XG5cbnZhciBtYXAgPSBuZXcgb2wuTWFwKHtcbiAgY29udHJvbHM6IG9sLmNvbnRyb2wuZGVmYXVsdHMoe2F0dHJpYnV0aW9uT3B0aW9uczoge2NvbGxhcHNpYmxlOiBmYWxzZX19KSxcbiAgdGFyZ2V0OiAnbWFwJyxcbiAgbGF5ZXJzOiBbXG4gICAgbmV3IG9sLmxheWVyLlRpbGUoe1xuICAgICAgc291cmNlOiBuZXcgb2wuc291cmNlLlRpbGVXTVMoe1xuICAgICAgICB1cmw6ICdodHRwOi8vc3R1ZGVudC5pZmlwLnR1d2llbi5hYy5hdC9nZW9zZXJ2ZXIvd21zJyxcbiAgICAgICAgcGFyYW1zOiB7TEFZRVJTOiAnaWZpcF8yMDE1Om55Y19jZW5zdXNfYmxvY2snfVxuICAgICAgfSlcbiAgICB9KVxuICBdLFxuICB2aWV3OiBuZXcgb2wuVmlldyh7XG4gICAgY2VudGVyOiBvbC5wcm9qLmZyb21Mb25MYXQoWzE2LjM3MzA2NCwgNDguMjA4MzNdKSxcbiAgICB6b29tOiAxM1xuICB9KVxufSk7XG5cbnZhciBmZWVkYmFja1BvaW50cyA9IG5ldyBvbC5zb3VyY2UuVmVjdG9yKHtcbiAgZmVhdHVyZXM6IG5ldyBvbC5Db2xsZWN0aW9uKCksXG59KTtcbm1hcC5hZGRMYXllcihuZXcgb2wubGF5ZXIuVmVjdG9yKHsgc291cmNlOiBmZWVkYmFja1BvaW50cyB9KSk7XG5mZWVkYmFja1BvaW50cy5hZGRGZWF0dXJlKGZlYXR1cmUpO1xudmFyIG1vZGlmeSA9IG5ldyBvbC5pbnRlcmFjdGlvbi5Nb2RpZnkoe1xuICBmZWF0dXJlczogZmVlZGJhY2tQb2ludHMuZ2V0RmVhdHVyZXNDb2xsZWN0aW9uKClcbn0pO1xubWFwLmFkZEludGVyYWN0aW9uKG1vZGlmeSk7XG5cbnZhciBtb2RpZnkgPSBuZXcgb2wuaW50ZXJhY3Rpb24uTW9kaWZ5KHtcbiAgZmVhdHVyZXM6IGZlZWRiYWNrUG9pbnRzLmdldEZlYXR1cmVzQ29sbGVjdGlvbigpXG59KTtcbm1hcC5hZGRJbnRlcmFjdGlvbihtb2RpZnkpO1xuXG52YXIgZ2VvbG9jYXRpb24gPSBuZXcgb2wuR2VvbG9jYXRpb24oe1xuICBwcm9qZWN0aW9uOiBtYXAuZ2V0VmlldygpLmdldFByb2plY3Rpb24oKSxcbiAgdHJhY2tpbmc6IHRydWVcbn0pO1xuZ2VvbG9jYXRpb24ub25jZSgnY2hhbmdlOnBvc2l0aW9uJywgZnVuY3Rpb24oZXZ0KSB7XG4gIGZlYXR1cmUuZ2V0R2VvbWV0cnkoKS5zZXRDb29yZGluYXRlcyhnZW9sb2NhdGlvbi5nZXRQb3NpdGlvbigpKTtcbiAgbWFwLmdldFZpZXcoKS5zZXRDZW50ZXIoZ2VvbG9jYXRpb24uZ2V0UG9zaXRpb24oKSk7XG59KTtcbiJdfQ==
