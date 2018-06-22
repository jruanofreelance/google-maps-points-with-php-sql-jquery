CREATE TABLE `markers` (
  `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY ,
  `name` VARCHAR( 60 ) COLLATE utf8_spanish_ci NOT NULL ,
  `address` VARCHAR( 80 ) COLLATE utf8_spanish_ci NOT NULL ,
  `lat` FLOAT( 10, 6 ) NOT NULL ,
  `lng` FLOAT( 10, 6 ) NOT NULL ,
  `type` VARCHAR( 30 ) COLLATE utf8_spanish_ci NOT NULL
)ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

INSERT INTO `markers` (`name`, `address`, `lat`, `lng`, `type`) VALUES ('Bodegas Piqueras', 'Calle Zapateros, 11, Almansa, Albacete', '38.875803', '-1.114611', 'factory');
INSERT INTO `markers` (`name`, `address`, `lat`, `lng`, `type`) VALUES ('Stylex Studio', 'Calle Santa Lucía, 29, Almansa, Albacete', '38.867792', '-1.097837', 'studio');
INSERT INTO `markers` (`name`, `address`, `lat`, `lng`, `type`) VALUES ('Infrima', 'Calle Zapateros, 1, Almansa, Albacete', '38.874759', '-1.109418', 'factory');
INSERT INTO `markers` (`name`, `address`, `lat`, `lng`, `type`) VALUES ('Nieves Lencería', 'Calle Rambla de la Mancha, 26, Almansa, Albacete', '38.868720', '-1.095501', 'shop');
