<?php

  $xmlString = '<?xml version="1.0" encoding="UTF-8"?><markers></markers>';

  $dom = new DOMDocument;
  $dom->preserveWhiteSpace = FALSE;
  $dom->loadXML($xmlString);

  $makers = simplexml_import_dom($dom);

  define("DB_HOST" , "localhost");
  define("DB_USER" , "userDB");
  define("DB_PASS" , "passDB");
  define("DB_NAME" , "nameDB");

  $db = new mysqli(DB_HOST , DB_USER , DB_PASS , DB_NAME);
  if(!$db){ echo 'An error has occurred <br/>'.mysqli_connect_error(); }

  $query = "SELECT * FROM markers WHERE 1";
  $result = $db->query($query);

  while ($row = $result->fetch_assoc()){
    $newMaker = $makers->addChild('maker');
    $newMaker->addChild("name", utf8_encode($row['name']));
    $newMaker->addChild("address", utf8_encode($row['address']));
    $newMaker->addChild("lat", $row['lat']);
    $newMaker->addChild("lng", $row['lng']);
    $newMaker->addChild("type", utf8_encode($row['type']));
  }

  $dom->save('mapmarkers.xml');

?>