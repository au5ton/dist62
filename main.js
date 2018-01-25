var geojsonArea = require('@mapbox/geojson-area');
var fs = require('fs');

var contents = fs.readFileSync('38.json').toString();

var obj = JSON.parse(contents);

var area = geojsonArea.geometry(obj);

console.log(area)
