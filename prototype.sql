-- MySQL dump 10.13  Distrib 5.6.30, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: oaprototype
-- ------------------------------------------------------
-- Server version	5.6.30-1

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
-- Table structure for table `Pages`
--

DROP TABLE IF EXISTS `Pages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Pages` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `body` mediumtext NOT NULL,
  `creationdate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `lastchange` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `Units_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `Pages_Units` (`Units_id`),
  CONSTRAINT `Pages_Units` FOREIGN KEY (`Units_id`) REFERENCES `Units` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Pages`
--

LOCK TABLES `Pages` WRITE;
/*!40000 ALTER TABLE `Pages` DISABLE KEYS */;
INSERT INTO `Pages` VALUES (1,'Page 1','','2016-08-09 15:32:41','2016-08-09 14:33:09',0),(2,'Page 2','','2016-08-09 15:33:04','2016-08-09 14:34:29',0),(3,'Page 3','','2016-08-09 15:33:09','2016-08-09 14:35:20',0),(4,'Page 4','','2016-08-09 15:33:14','2016-08-09 14:35:45',0),(5,'Page 5','','2016-08-09 15:33:19','2016-08-09 14:36:34',0),(6,'Page 6','','2016-08-09 15:33:25','2016-08-09 14:40:01',0),(7,'Page 7','','2016-08-09 15:33:30','2016-08-09 14:40:34',0);
/*!40000 ALTER TABLE `Pages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Units`
--

DROP TABLE IF EXISTS `Units`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Units` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` varchar(300) NOT NULL,
  `creationdate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `lastchange` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `Users_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `Units_Users` (`Users_id`),
  CONSTRAINT `Units_Users` FOREIGN KEY (`Users_id`) REFERENCES `Users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='Unidades';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Units`
--

LOCK TABLES `Units` WRITE;
/*!40000 ALTER TABLE `Units` DISABLE KEYS */;
INSERT INTO `Units` VALUES (0,'Unit 1','Unit one','2016-08-08 05:00:00','2016-08-08 05:00:00',0);
/*!40000 ALTER TABLE `Units` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Users`
--

DROP TABLE IF EXISTS `Users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Users` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `lastname` varchar(45) NOT NULL,
  `username` varchar(45) NOT NULL,
  `password` varchar(60) NOT NULL,
  `creationdate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `lastlogin` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Users`
--

LOCK TABLES `Users` WRITE;
/*!40000 ALTER TABLE `Users` DISABLE KEYS */;
INSERT INTO `Users` VALUES (0,'Michael','Sanchez','michaelsanchez','123456','2016-08-08 05:00:00','2016-08-08 21:00:00');
/*!40000 ALTER TABLE `Users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sharedUnits`
--

DROP TABLE IF EXISTS `sharedUnits`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sharedUnits` (
  `id` int(11) NOT NULL,
  `Users_id` int(11) NOT NULL,
  `Units_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `sharedUnits_Units` (`Units_id`),
  KEY `sharedUnits_Users` (`Users_id`),
  CONSTRAINT `sharedUnits_Units` FOREIGN KEY (`Units_id`) REFERENCES `Units` (`id`),
  CONSTRAINT `sharedUnits_Users` FOREIGN KEY (`Users_id`) REFERENCES `Users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sharedUnits`
--

LOCK TABLES `sharedUnits` WRITE;
/*!40000 ALTER TABLE `sharedUnits` DISABLE KEYS */;
/*!40000 ALTER TABLE `sharedUnits` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-08-22 16:29:34
