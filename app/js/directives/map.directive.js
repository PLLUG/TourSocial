angular.module('app')
  .directive('map', function() {
  return {
      restrict: 'A',
      scope: {
        lat: '@lat',
        lng: '@lng',
        initialScale: '@initialScale',
        markers: '=markers',
        contentKey: '@contentKey'
      },
      link: function(scope, element, attrs) {

        $(element).width(attrs.width).height(attrs.height);

        var setMarker = function (map, lat, lng, content) {
          L.marker([lat, lng]).addTo(map)
                      .bindPopup(content)
                      .openPopup();
        };

        initMap = function () {
          var map, osmUrl,
              osmAttrib, osm;

          map = new L.map(element.attr('id'));
          osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
          osmAttrib = 'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a>';

          osm = new L.TileLayer(osmUrl, {
              minZoom: 8,
              maxZoom: 12,
              attribution: osmAttrib
          });

          map.setView(new L.LatLng(scope.lat, scope.lng), scope.initialScale);
          map.addLayer(osm);

          return map;
        };

        var map = initMap();

        scope.$watch('markers', function (markers) {
          if(markers) {
            for (var i = 0; i < markers.length; i++) {
              var marker = markers[i];
              var content = marker[scope.contentKey];

              setMarker(map, marker.lat, marker.lng, content);
            }
          }
        });
      }
  };
});
