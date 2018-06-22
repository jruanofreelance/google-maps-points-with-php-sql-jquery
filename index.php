<?php
include('loadData.php');
?>
<!DOCTYPE html>
  <head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
    <meta http-equiv="content-type" content="text/html"/>
    <title>Example Google Maps points with PHP, SQL and JS</title>
    <link rel="stylesheet" type="text/css" href="styles.css">
    <script src="jquery-3.2.1.min.js"></script>
    <script src="main.js"></script>
  </head>
  <body>
    <div id="map"></div>
    <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCKA6MvlnPsCDA70Zny_gSBCqYgkF7OLf4&callback=initMap"></script>
  </body>
</html>