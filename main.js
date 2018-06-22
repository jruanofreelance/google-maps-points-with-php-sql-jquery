var customLabel = {
                    studio: {label: 'S'},
                    factory: {label: 'F'},
                    shop: {label: 'S'}
                  };

function initMap() {

  var map = new google.maps.Map(document.getElementById('map'), {
            center: new google.maps.LatLng(38.872414, -1.101797),
            zoom: 15
          });

  var infoWindow = new google.maps.InfoWindow,
      $elements = [];

  $.get('mapmarkers.xml', function(xmlFile){

    $elementsHtml = parseXMLfile(xmlFile);

    $.each($elementsHtml,function(index, value){

      var $element = $(value),
          id = $element.attr('id'),
          name = $element.attr('name'),
          address = $element.attr('address'),
          type = $element.attr('type'),
          lat = $element.attr('lat'),
          lng = $element.attr('lng');

      var point = new google.maps.LatLng(parseFloat(lat),parseFloat(lng));
      var infowincontent = document.createElement('div');
      var strong = document.createElement('strong');

      strong.textContent = name;
      infowincontent.appendChild(strong);
      infowincontent.appendChild(document.createElement('br'));

      var text = document.createElement('text');

      text.textContent = address;
      infowincontent.appendChild(text);

      var icon = customLabel[type] || {};
      var marker = new google.maps.Marker({
                  map: map,
                  position: point,
                  label: icon.label
                });

      marker.addListener('click', function() {
                  infoWindow.setContent(infowincontent);
                  infoWindow.open(map, marker);
                });

    });

  });

  function parseXMLfile(xmlFile){
    var i = 0;

    $(xmlFile).find('maker').each(function(){

      var $maker = $(this),
          name = $maker.find('name').text(),
          address = $maker.find('address').text(),
          lat = $maker.find('lat').text(),
          lng = $maker.find('lng').text(),
          type = $maker.find('type').text();

      $elements[i] = $('<marker id="'+i+'" name="'+name+'" address="'+address+'" lat="'+lat+'" lng="'+lng+'" type="'+type+'"/>');
      i++;

    });

    return $elements;

  }

}

function doNothing() {}