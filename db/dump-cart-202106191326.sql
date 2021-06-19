-- MySQL dump 10.13  Distrib 5.5.62, for Win64 (AMD64)
--
-- Host: localhost    Database: cart
-- ------------------------------------------------------
-- Server version	5.7.24

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `menu`
--

DROP TABLE IF EXISTS `menu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `menu` (
  `store` varchar(1) COLLATE utf8mb4_unicode_ci NOT NULL,
  UNIQUE KEY `store` (`store`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `menu`
--

LOCK TABLES `menu` WRITE;
/*!40000 ALTER TABLE `menu` DISABLE KEYS */;
/*!40000 ALTER TABLE `menu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `setup`
--

DROP TABLE IF EXISTS `setup`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `setup` (
  `store` varchar(1) COLLATE utf8mb4_unicode_ci NOT NULL,
  `open` int(1) NOT NULL,
  `flag` varchar(1) COLLATE utf8mb4_unicode_ci NOT NULL,
  `order` int(11) NOT NULL,
  `saenz` text COLLATE utf8mb4_unicode_ci NOT NULL,
  UNIQUE KEY `store` (`store`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `setup`
--

LOCK TABLES `setup` WRITE;
/*!40000 ALTER TABLE `setup` DISABLE KEYS */;
INSERT INTO `setup` VALUES ('1',1,'1',11111,'We cook with love so that you eat with conscience !!!');
/*!40000 ALTER TABLE `setup` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_cart`
--

DROP TABLE IF EXISTS `tbl_cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_cart` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `product_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `member_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=125 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_cart`
--

LOCK TABLES `tbl_cart` WRITE;
/*!40000 ALTER TABLE `tbl_cart` DISABLE KEYS */;
INSERT INTO `tbl_cart` VALUES (100,1,14,64),(101,6,14,64),(102,6,1,0),(103,2,1,64),(104,2,1,64),(105,2,1,64),(106,2,1,64),(107,1,1,64),(108,1,1,64),(109,1,1,64),(110,1,1,64),(111,1,1,64),(112,1,1,64),(113,1,1,64),(114,1,1,64),(115,1,1,64),(116,1,1,64),(117,1,1,64),(118,1,1,64),(119,1,1,64),(120,1,1,64),(121,1,1,64),(122,1,1,64),(123,1,1,64),(124,3,1,65);
/*!40000 ALTER TABLE `tbl_cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_category`
--

DROP TABLE IF EXISTS `tbl_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_category` (
  `id` int(8) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` mediumtext COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_category`
--

LOCK TABLES `tbl_category` WRITE;
/*!40000 ALTER TABLE `tbl_category` DISABLE KEYS */;
INSERT INTO `tbl_category` VALUES (1,'platos','../assets/img/category/platos.jpg'),(2,'juice','../assets/img/category/jugos.jpg'),(3,'pasta','../assets/img/category/pastas.jpg'),(4,'sandwich','../assets/img/category/sandwich.jpg'),(5,'sides','../assets/img/category/sides.jpg'),(6,'soup','../assets/img/category/soup.jpg'),(7,'vegetarian','../assets/img/category/vegetal.jpg');
/*!40000 ALTER TABLE `tbl_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_favorite`
--

DROP TABLE IF EXISTS `tbl_favorite`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_favorite` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `product_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_favorite`
--

LOCK TABLES `tbl_favorite` WRITE;
/*!40000 ALTER TABLE `tbl_favorite` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_favorite` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_order`
--

DROP TABLE IF EXISTS `tbl_order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_order` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `customer_id` int(11) NOT NULL,
  `payment_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `order_status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `order_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_order`
--

LOCK TABLES `tbl_order` WRITE;
/*!40000 ALTER TABLE `tbl_order` DISABLE KEYS */;
INSERT INTO `tbl_order` VALUES (1,64,'Tienda','PENDIENTE','2021-06-19 09:55:50'),(5,64,'PAYPAL','PENDIENTE','2021-06-19 09:55:50'),(6,64,'Tienda','ATENDIDO','2021-06-19 09:55:50'),(7,64,'Tienda','PENDIENTE','2021-06-19 09:55:50'),(8,64,'Tienda','PENDIENTE','2021-06-19 09:55:50');
/*!40000 ALTER TABLE `tbl_order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_order_item`
--

DROP TABLE IF EXISTS `tbl_order_item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_order_item` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `order_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `item_price` double NOT NULL,
  `quantity` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_order_item`
--

LOCK TABLES `tbl_order_item` WRITE;
/*!40000 ALTER TABLE `tbl_order_item` DISABLE KEYS */;
INSERT INTO `tbl_order_item` VALUES (1,1,1,0.12,1),(2,1,2,0.14,1),(3,1,3,0.15,1),(4,1,1,0.12,1),(5,1,1,0.12,1),(6,5,1,0.12,1),(7,5,1,0.12,1),(8,5,1,0.12,1),(9,5,1,0.12,1),(10,5,1,0.12,1);
/*!40000 ALTER TABLE `tbl_order_item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_payment`
--

DROP TABLE IF EXISTS `tbl_payment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_payment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_order` int(11) NOT NULL,
  `subtotal` decimal(10,2) NOT NULL,
  `status` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_adminuser` int(11) NOT NULL,
  `fecha` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COLLATE=utf8_estonian_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_payment`
--

LOCK TABLES `tbl_payment` WRITE;
/*!40000 ALTER TABLE `tbl_payment` DISABLE KEYS */;
INSERT INTO `tbl_payment` VALUES (1,1,0.65,'V',1,'2021-06-19 11:41:17'),(8,5,0.60,'V',1,'2021-06-19 11:41:17');
/*!40000 ALTER TABLE `tbl_payment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_payment_detail`
--

DROP TABLE IF EXISTS `tbl_payment_detail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_payment_detail` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_payment` int(11) NOT NULL,
  `type_payment` varchar(255) COLLATE utf8_estonian_ci NOT NULL,
  `venta` decimal(10,2) NOT NULL,
  `status` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_adminuser` int(11) NOT NULL,
  `fecha` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8 COLLATE=utf8_estonian_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_payment_detail`
--

LOCK TABLES `tbl_payment_detail` WRITE;
/*!40000 ALTER TABLE `tbl_payment_detail` DISABLE KEYS */;
INSERT INTO `tbl_payment_detail` VALUES (1,1,'TIENDA',0.12,'V',1,'2021-06-19 11:48:16'),(2,1,'TIENDA',0.14,'V',1,'2021-06-19 11:48:16'),(3,1,'TIENDA',0.15,'V',1,'2021-06-19 11:48:16'),(4,1,'TIENDA',0.12,'V',1,'2021-06-19 11:48:16'),(5,1,'TIENDA',0.12,'V',1,'2021-06-19 11:48:16'),(6,8,'PAYPAL',0.12,'V',1,'2021-06-19 11:48:16'),(7,8,'PAYPAL',0.12,'V',1,'2021-06-19 11:48:16'),(8,8,'PAYPAL',0.12,'V',1,'2021-06-19 11:48:16'),(9,8,'PAYPAL',0.12,'V',1,'2021-06-19 11:48:16'),(10,8,'PAYPAL',0.12,'V',1,'2021-06-19 11:48:16');
/*!40000 ALTER TABLE `tbl_payment_detail` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_product`
--

DROP TABLE IF EXISTS `tbl_product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_product` (
  `id` int(8) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `code` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` mediumtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` double(10,2) NOT NULL,
  `detail1` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `detail2` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `category` varchar(1) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `cat` (`category`),
  KEY `category` (`category`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_product`
--

LOCK TABLES `tbl_product` WRITE;
/*!40000 ALTER TABLE `tbl_product` DISABLE KEYS */;
INSERT INTO `tbl_product` VALUES (1,'Anticucho','anti_01','../assets/img/anticuchos.jpg',0.12,'kjljkllkjkl kjkfdfddddfddddfdfdffddf dfdfdfdf dfdfdf dfdfdfdf dfdfdf dfdf   dfdfdfdfdf  ljkljl kjkljkljkl kjlkjkljki kjlkjkljkl jkljkljklkl kjkljkljkl kjkljkljkl kjkjkljkl kjkljkljkl kjkljlkjsAKLAJLKaklsa skJAKSLJAklsjaklsklsa ASKJakljsklaJKSLA kjskljAKLSJAskjskl AKSJklajsklASKLA kASJKajsklAS<br>11111111111111<br>222222222222222<br>33333333333','kjljkllkjkl kjkljkljl kjkljkljkl kjlkjkljki kjlkjkljkl jkljkljklkl bbbbb bbbb bbbbb bbbbbb bbbbb bbbb bbb bb bbbbb bbbbb bbbbb bbbbb bbb bbbb bbbbb bbb bbbb bbb bbbb bbb bbb  bbbbb','1'),(2,'Lomito saltado','lomo_01','../assets/img/lomo.jpg',0.14,'kjljkllkjkl kjklgggggggg ggg gg gggggg ggggggggggggggggggggggggg ggggggggggggggggg ggggggggggggggggg ggggggggggggggggg ggggggggjkljl kjkljkljkl kjlkjkljki kjlkjkljkl jkljkljklkl kjkljkljkl kjkljkljkl kjkjkljkl kjkljkljkl kjkljlkjsAKLAJLKaklsa skJAKSLJAklsjaklsklsa ASKJakljsklaJKSLA kjskljAKLSJAskjskl AKSJklajsklASKLA kASJKajsklA','kjljkllkjkl kjkljkljl kjkljkljkl kjlkjkljki kjlkjkljkl jkljkljklkl ','1'),(3,'Escabeche','esca_01','../assets/img/escabeche.jpg',0.15,'kjljkllkjkl kjkljkljl kjkljkljkl kjlkjkljki kjlkjkljkl jkljkljklkl kjkljkljkl kjkljkljkl kjkjkljkl kjkljkljkl kjkljlkjsAKLAJLKaklsa skJAKSLJAklsjaklsklsa ASKJakljsklaJKSLA kjskljAKLSJAskjskl AKSJklajsklASKLA kASJKajsklA','kjljkllkjkl kjkljkljl kjkljkljkl kjlkjkljki kjlkjkljkl jkljkljklkl ','1'),(4,'Arroz Chaufa','chau_01','../assets/img/chaufa.jpg',0.18,'kjljkllkjkl kjkljkljl kjklvvvvvv vvvv vvvvvvvvvvvvvvvvv vvvvvvvvvvvvvvvvv vvvvvv vvv vvvvvv vvvvvvvvvvvv vvvvvvvvvvvvjkljkl kjlkjkljki kjlkjkljkl jkljkljklkl kjkljkljkl kjkljkljkl kjkjkljkl kjkljkljkl kjkljlkjsAKLAJLKaklsa skJAKSLJAklsjaklsklsa ASKJakljsklaJKSLA kjskljAKLSJAskjskl AKSJklajsklASKLA kASJKajsklA','kjljkllkjkl kjkljkljl kjkljkljkl kjlkjkljki kjlkjkljkl jkljkljklkl ','1'),(6,'Watermelon Juice','water_01','../assets/img/watermelon_j.jpg',0.08,'kjljkllkjkl kjkljkljl kjkljkljkl kjlkjkljki kjlkjkljkl jkljkljklkl kjkljkljkl kjkljkljkl kjkjkljkl kjkljkljkl kjkljlkjsAKLAJLKaklsa skJAKSLJAklsjaklsklsa ASKJakljsklaJKSLA kjskljAKLSJAskjskl AKSJklajsklASKLA kASJKajsklA','kjljkllkjkl kjkljkljl kjkljkljkl kjlkjkljki kjlkjkljkl jkljkljklkl ','2'),(7,'Pineapple Juice','pine_01','../assets/img/pineapple_j.jpg',0.09,'kjljkllkjkl kjkljkljl kjkljkljkl kjlkjkljki kjlkjkljkl jkljkljklkl kjkljkljkl kjkljkljkl kjkjkljkl kjkljkljkl kjkljlkjsAKLAJLKaklsa skJAKSLJAklsjaklsklsa ASKJakljsklaJKSLA kjskljAKLSJAskjskl AKSJklajsklASKLA kASJKajsklA','kjljkllkjkl kjkljkljl kjkljkljkl kjlkjkljki kjlkjkljkl jkljkljklkl ','2'),(9,'Celery Juice','cele_01','../assets/img/celery_j.jpg',0.11,'kjljkllkjkl kjkljkljl kjkljkljkl kjlkjkljki kjlkjkljkl jkljkljklkl kjkljkljkl kjkljkljkl kjkjkljkl kjkljkljkl kjkljlkjsAKLAJLKaklsa skJAKSLJAklsjaklsklsa ASKJakljsklaJKSLA kjskljAKLSJAskjskl AKSJklajsklASKLA kASJKajsklA','kjljkllkjkl kjkljkljl kjkljkljkl kjlkjkljki kjlkjkljkl jkljkljklkl ','2'),(10,'Soda','soda_01','../assets/img/soda.jpg',0.05,'kjljkllkjkl kjkljkljl kjkljkljkl kjlkjkljki kjlkjkljkl jkljkljklkl kjkljkljkl kjkljkljkl kjkjkljkl kjkljkljkl kjkljlkjsAKLAJLKaklsa skJAKSLJAklsjaklsklsa ASKJakljsklaJKSLA kjskljAKLSJAskjskl AKSJklajsklASKLA kASJKajsklA','kjljkllkjkl kjkljkljl kjkljkljkl kjlkjkljki kjlkjkljkl jkljkljklkl ','1'),(12,'Ceviche Pescado','cevi_01','../assets/img/ceviche.jpg',0.14,'kjljkllkjkl kjkljkljl kjkljkljkl kjlkjkljki kjlkjkljkl jkljkljklkl kjkljkljkl kjkljkljkl kjkjkljkl kjkljkljkl kjkljlkjsAKLAJLKaklsa skJAKSLJAklsjaklsklsa ASKJakljsklaJKSLA kjskljAKLSJAskjskl AKSJklajsklASKLA kASJKajsklA','kjljkllkjkl kjkljkljl kjkljkljkl kjlkjkljki kjlkjkljkl jkljkljklklbbbbbbbbbbbbbbbbb bbbbbbbbbbbbb bbbbbbbbbb bbbbbbbbbbbb bbbbbb bbbbbb b   b bbbbbb  bbbbbbb bbbb b bb bbbbbb b ','1'),(13,'prueba11','prueba_01','../assets/img/broken (1).png',2.56,'prueba detail 1','prueba detail 2','5');
/*!40000 ALTER TABLE `tbl_product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbluser`
--

DROP TABLE IF EXISTS `tbluser`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbluser` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Firstname` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Lastname` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Email` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Password` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Direcc` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `zip` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `town` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cell` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=67 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbluser`
--

LOCK TABLES `tbluser` WRITE;
/*!40000 ALTER TABLE `tbluser` DISABLE KEYS */;
INSERT INTO `tbluser` VALUES (1,'kevinN','kevinL','kevin@gmail.com','73fc369d282422571de05384e8c7c44e','547 41 street\r\nUnion city\r\nNew Jersey\r\nUSA','07087','Union city','1234567890'),(4,'mioN','','mio@gmail.com','9a504fb17dedc18c41973edf5784b67d','direccion\r\n\r\nasdffgggh\r\n\r\njkddkdllddlfl   fdjkljlkddlkf dkjkldjlkfd dkjdkljkld','07087','Union city','2015986828'),(5,'mark','Bedoya','mark@gmail.com','6579a25fc8e60d2ff7dfb590bb79042f','547 41 st. 2 floor\r\n\r\ncopia\r\n\r\ncopia\r\n\r\n','07087','Union city','2019865824'),(6,'tuyoN','tuyoL','tuyo@gmail.com','fceef2814507eb004a617f889871b7a9','direccion de donde vive','07087','Union city','20159875898'),(7,'suyo','suyo','suyo@gmail.com','ff3b705f7bce6b84be005328a48d9061','suyo direccion','07087','UNION CITY',''),(13,'kevin','last name kev','kev@gmail.com','3b812175a3bbca97b079857d20ee12f1','direccion kev','07087','UNION CITY','2019999999'),(14,'yo','yolast','yo@gmail.com','6d0007e52f7afb7d5a0650b0ffb8a4d1','yo','07087','maranga','2011111111'),(15,'11name','11last','11@gmail.com','6512bd43d9caa6e02c990b0a82652dca','11','11','victoria','11'),(16,'123name','123last','123@gmail.com','202cb962ac59075b964b07152d234b70','123direcc','123zip','perla','123cell'),(17,'111name','111last','111@gmail.com','698d51a19d8a121ce581499d7b701668','111direcc','111zip','111lima','111cel'),(18,'walter','Mercado','wal@gmail.com','2f70101cd97aa4896dd9732721ba8e38','isidoro suarez 351 maranga','07087','Union city','2015986828'),(19,'hola','hola','hola@hola.com','4d186321c1a7f0f354b297e8914ab240','hola','07087','','2015986828'),(20,'yyurr','valdez carazas','adanyur@gmail.com','e10adc3949ba59abbe56e057f20f883e','av','13','lima','912270037'),(53,'yur adan','valdez carazas','adan@gmail.com','12345','jr mexico','10000','10000','912270037'),(54,'yur','valdez','adan@gmail.com','','jr mexico','1000','1000','100'),(55,'yur','valdez','adan@gmail.com','','jr mexico','1000','1000','100'),(56,'fsdfd','sfsdf','sdfsd','','dfsd','1212','1212','12121'),(57,'sdas','dsadas','asdas','','asdas','12121','21212','12121'),(58,'fasdfdf','sdfdsf','sdfsd','','sdfsd','1212','dsfdsf','13232'),(59,'asdas','dasdas','dasdas','','asdasd','21324','asdas','24334234'),(60,'sdfds','fsdf','sdfsd','','dsfdsf','3434','dsfsdf','454354'),(61,'asdas','dasd','asdasd','','asdasd','2321','12321','21321232'),(62,'sadas','dsad','asdasd','','dasd','243','4234','432343'),(63,'yur adan','valdez carazas','adanyur@gmail.com','123456','jr mexico','1000','1000','1000'),(64,'yur adan','valdez carazas','yur@gmail.com','123456','jr mexico','1000','1000','1000'),(65,'jim','ramos suasnabar','jim@gmail.com','123456','jr san cosme','10000','1000','1000'),(66,'jim abdiel','suasnabar','jim@gmail.com','123456','jr san cosme ','100','100','1000');
/*!40000 ALTER TABLE `tbluser` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbluser_admin`
--

DROP TABLE IF EXISTS `tbluser_admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbluser_admin` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Firstname` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `Lastname` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `Email` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `Password` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbluser_admin`
--

LOCK TABLES `tbluser_admin` WRITE;
/*!40000 ALTER TABLE `tbluser_admin` DISABLE KEYS */;
INSERT INTO `tbluser_admin` VALUES (1,'admin','admin','admin@gmail.com','123456');
/*!40000 ALTER TABLE `tbluser_admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'cart'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-06-19 13:26:06
