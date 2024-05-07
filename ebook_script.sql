-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: ebook
-- ------------------------------------------------------
-- Server version	8.0.36

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `addresses`
--

DROP TABLE IF EXISTS `addresses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `addresses` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `adrr` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `landmark` varchar(255) DEFAULT NULL,
  `pincode` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `cust_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKbigmxh232j0nq754p70t3q2rl` (`cust_id`),
  CONSTRAINT `FKbigmxh232j0nq754p70t3q2rl` FOREIGN KEY (`cust_id`) REFERENCES `customers` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `addresses`
--

LOCK TABLES `addresses` WRITE;
/*!40000 ALTER TABLE `addresses` DISABLE KEYS */;
INSERT INTO `addresses` VALUES (1,'Gujari ward, Civil line','Bramhapuri','Front of hindu dyand mandir school','441206','Maharashtra',1),(2,'Test Address','Test City','Test Landmark','1234','Test State',3),(3,'Gujari ward','Bramhapuri','Front of hindu dyand mandir school','441206','Maharashtra',2);
/*!40000 ALTER TABLE `addresses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `admins`
--

DROP TABLE IF EXISTS `admins`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admins` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admins`
--

LOCK TABLES `admins` WRITE;
/*!40000 ALTER TABLE `admins` DISABLE KEYS */;
INSERT INTO `admins` VALUES (1,'pranavkharche79@gmail.com','Admin@123','Admin');
/*!40000 ALTER TABLE `admins` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `books`
--

DROP TABLE IF EXISTS `books`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `books` (
  `bookid` int NOT NULL AUTO_INCREMENT,
  `bimage` varchar(255) DEFAULT NULL,
  `bname` varchar(255) DEFAULT NULL,
  `bprice` double NOT NULL,
  `bread` varchar(255) DEFAULT NULL,
  `btype` varchar(255) DEFAULT NULL,
  `cat_id` int DEFAULT NULL,
  PRIMARY KEY (`bookid`),
  KEY `FK8n0onoay622kn34n34tfq76gh` (`cat_id`),
  CONSTRAINT `FK8n0onoay622kn34n34tfq76gh` FOREIGN KEY (`cat_id`) REFERENCES `categories` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `books`
--

LOCK TABLES `books` WRITE;
/*!40000 ALTER TABLE `books` DISABLE KEYS */;
INSERT INTO `books` VALUES (4,'http://res.cloudinary.com/dvizikqng/image/upload/v1713878924/606bb27d-4eae-4ada-b1a0-bce772ba8465.jpg','Hacking Beginner To Expert Guide To Computer Hacking',979,'https://www.junkybooks.com/book/reader.php?book=thebooks/636846257649a-hacking-beginner-to-expert-guide-to-computer-hacking.pdf','New',1),(5,'http://res.cloudinary.com/dvizikqng/image/upload/v1713879454/ce14e20b-e85a-49e8-bae3-983b72e62ac0.jpg','Python And Tkinter Programming',1080,'https://www.junkybooks.com/book/reader.php?book=thebooks/63dd77b64d9b8-python-and-tkinter-programming.pdf','New',1),(6,'http://res.cloudinary.com/dvizikqng/image/upload/v1713879767/e172a147-1d10-47ad-94ac-7e9db2b9e727.jpg','Beacon Technologies',200,'https://www.junkybooks.com/book/reader.php?book=thebooks/62f126759fa89-beacon-technologies.pdf','Old',1),(7,'http://res.cloudinary.com/dvizikqng/image/upload/v1713880020/4cd6e873-b271-493d-9be6-884309a19f0a.jpg','Beginning Programming For Dummies',245,'https://www.junkybooks.com/book/reader.php?book=thebooks/63dd6965a6633-beginning-programming-for-dummies.pdf','Old',1),(8,'http://res.cloudinary.com/dvizikqng/image/upload/v1713880163/ea121d5c-e4e6-42d5-98d5-680ff1f921a3.jpg','MATLAB Programming Fundamentals - MathWorks',249,'https://www.junkybooks.com/book/reader.php?book=thebooks/63dd6b7c8487d-matlab-programming-fundamentals-mathworks.pdf','New',1),(9,'http://res.cloudinary.com/dvizikqng/image/upload/v1713880304/3c940188-6040-4d1d-9612-eb447e0c4039.jpg','Induction',499,'https://www.junkybooks.com/book/reader.php?book=thebooks/62bb480d3c5ef-induction.pdf','New',3),(10,'http://res.cloudinary.com/dvizikqng/image/upload/v1713880419/4d9bc427-14de-4b5f-a4ee-9ff030c9a2b9.jpg','Fire & Water',332,'https://www.junkybooks.com/book/reader.php?book=thebooks/62bb5dd3a6c9c-fire-water.pdf','New',3),(11,'http://res.cloudinary.com/dvizikqng/image/upload/v1713880488/db4fddc8-0d0e-47a3-9def-1741b93eba8e.jpg','Bronze Magic',299,'https://www.junkybooks.com/book/reader.php?book=thebooks/62bb6005e657b-bronze-magic.pdf','New',3),(12,'http://res.cloudinary.com/dvizikqng/image/upload/v1713880666/3546f890-5779-4a63-a980-c4ee97cfadf0.jpg','Adventures Of Huckleberry Finn',599,'https://www.junkybooks.com/book/reader.php?book=thebooks/62cee4d31bc21-adventures-of-huckleberry-finn.pdf','Old',3),(13,'http://res.cloudinary.com/dvizikqng/image/upload/v1713880795/c2cc31e9-8e9a-41f9-96e2-60793d3783fb.jpg','Tween Snow And Fire A Tale Of The Last Kafir War',700,'https://www.junkybooks.com/book/reader.php?book=thebooks/62cee983257fe-tween-snow-and-fire-a-tale-of-the-last-kafir-war.pdf','Old',3),(14,'http://res.cloudinary.com/dvizikqng/image/upload/v1713880875/03440e0f-6fa8-4b50-ac84-f0cff7681c5d.jpg','The Spanish Love Deception',199,'https://www.junkybooks.com/book/reader.php?book=thebooks/62e235c8e53c4-the-spanish-love-deception.pdf','Old',3),(15,'http://res.cloudinary.com/dvizikqng/image/upload/v1714062881/d236c603-1ad5-4dd1-aea6-c113607b2134.jpg','Handbook Of Medicinal Herbs',3896,'https://www.junkybooks.com/book/reader.php?book=thebooks/63c10a247e483-handbook-of-medicinal-herbs.pdf','New',4),(16,'http://res.cloudinary.com/dvizikqng/image/upload/v1714062969/77ff00fe-eaec-4341-85c8-26d8ee3008e0.jpg','The Miracle Morning: The Not-So-Obvious Secret Guaranteed To Transform Your Life',1499,'https://www.junkybooks.com/book/reader.php?book=thebooks/63c10aea73cf5-the-miracle-morning-the-not-so-obvious-secret-guaranteed-to-transform-your-life.pdf','New',4),(17,'http://res.cloudinary.com/dvizikqng/image/upload/v1714063052/c002e806-e520-4af6-8c08-6179ea1cf2d3.jpg','Marcus Aurelius: Meditations',119,'https://www.junkybooks.com/book/reader.php?book=thebooks/63c5aebfd2381-marcus-aurelius-meditations.pdf','New',4),(18,'http://res.cloudinary.com/dvizikqng/image/upload/v1714063157/7885d676-6de7-4896-8636-22fe2131a8c3.jpg','Food And Wine Pairing',250,'https://www.junkybooks.com/book/reader.php?book=thebooks/63da5b4fda7f2-food-and-wine-pairing-.pdf','Old',4),(19,'http://res.cloudinary.com/dvizikqng/image/upload/v1714066488/9cf3a938-19e1-4fbe-8330-e78b866bf985.jpg','FITNESS ABCs - International Fitness Association',150.31,'https://www.junkybooks.com/book/reader.php?book=thebooks/63da6982af794-fitness-abcs-international-fitness-association.pdf','Old',4),(20,'http://res.cloudinary.com/dvizikqng/image/upload/v1714066725/ddc3909e-5422-4fe1-b0d1-e1c2285bede0.jpg','Java Programming Language Handbook',199,'https://www.junkybooks.com/book/reader.php?book=thebooks/63ded1cba2a19-java-programming-language-handbook.pdf','New',5),(21,'http://res.cloudinary.com/dvizikqng/image/upload/v1714066813/40403c58-8b81-4e97-8a3e-501e6ed89cfc.jpg','Developing 2D Games With Unity: Independent Game Programming With C#',1447,'https://www.junkybooks.com/book/reader.php?book=thebooks/63e0245ecc057-developing-2d-games-with-unity-independent-game-programming-with-c-.pdf','Old',5),(22,'http://res.cloudinary.com/dvizikqng/image/upload/v1714066888/418b2063-d09d-435f-8fa3-2c662f9ec175.jpg','Learn C++ Programming Language: Become A Complete C++ Programmer',297,'https://www.junkybooks.com/book/reader.php?book=thebooks/63e01faa57089-learn-c-programming-language-become-a-complete-c-programmer.pdf','Old',5),(23,'http://res.cloudinary.com/dvizikqng/image/upload/v1714066983/3f96d0d8-cc94-4d7a-af09-2630bd807249.jpg','Mastering Web Application',199,'https://www.junkybooks.com/book/reader.php?book=thebooks/63e2b8240a14f-mastering-web-application.pdf','Old',5),(24,'http://res.cloudinary.com/dvizikqng/image/upload/v1714067204/85f51104-3dc3-474c-a495-78d7bd39af79.jpg','Beginning AngularJS',199,'https://www.junkybooks.com/book/reader.php?book=thebooks/63dec1da03afc-beginning-angularjs.pdf','New',5),(25,'http://res.cloudinary.com/dvizikqng/image/upload/v1714067252/45886bf3-f505-41ff-a73a-3abfdccbabac.jpg','Object Oriented Programming Using C#',299,'https://www.junkybooks.com/book/reader.php?book=thebooks/63deb7a2b948b-object-oriented-programming-using-c-.pdf','New',5),(26,'http://res.cloudinary.com/dvizikqng/image/upload/v1714067330/34df9ae2-4192-4d6b-acbf-68fd08163a60.jpg','Expert Spring MVC And Web Flow',200,'https://www.junkybooks.com/book/reader.php?book=thebooks/63e2b66e425c6-expert-spring-mvc-and-web-flow.pdf','New',5);
/*!40000 ALTER TABLE `books` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `carts`
--

DROP TABLE IF EXISTS `carts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `carts` (
  `cid` bigint NOT NULL AUTO_INCREMENT,
  `bimage` varchar(255) DEFAULT NULL,
  `bname` varchar(255) DEFAULT NULL,
  `book_id` bigint NOT NULL,
  `bprice` double NOT NULL,
  `cust_id` bigint NOT NULL,
  `qty` int NOT NULL,
  `tprice` double NOT NULL,
  PRIMARY KEY (`cid`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carts`
--

LOCK TABLES `carts` WRITE;
/*!40000 ALTER TABLE `carts` DISABLE KEYS */;
INSERT INTO `carts` VALUES (1,'http://res.cloudinary.com/dvizikqng/image/upload/v1713878924/606bb27d-4eae-4ada-b1a0-bce772ba8465.jpg','Hacking Beginner To Expert Guide To Computer Hacking',4,979,2,1,0),(2,'http://res.cloudinary.com/dvizikqng/image/upload/v1713879454/ce14e20b-e85a-49e8-bae3-983b72e62ac0.jpg','Python And Tkinter Programming',5,1080,2,1,0),(3,'http://res.cloudinary.com/dvizikqng/image/upload/v1714066888/418b2063-d09d-435f-8fa3-2c662f9ec175.jpg','Learn C++ Programming Language: Become A Complete C++ Programmer',22,297,2,1,0);
/*!40000 ALTER TABLE `carts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `catname` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Computers'),(3,'Adventure'),(4,'Health'),(5,'Programming'),(6,'Environment'),(7,'Physics'),(8,'Ebook');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customers`
--

DROP TABLE IF EXISTS `customers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customers` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_81beos46prgefk70wc9mgyp3f` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customers`
--

LOCK TABLES `customers` WRITE;
/*!40000 ALTER TABLE `customers` DISABLE KEYS */;
INSERT INTO `customers` VALUES (1,'bgmitest74707@gmail.com','Male','BGMI TEST',NULL,'9325874707'),(2,'pkharche74707@gmail.com','Male','Pranav Kharche',NULL,'9325874707'),(3,'test1@gmail.com','Male','Test','Test@123','1234567899');
/*!40000 ALTER TABLE `customers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `logins`
--

DROP TABLE IF EXISTS `logins`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `logins` (
  `email` varchar(255) NOT NULL,
  `id` bigint NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `logins`
--

LOCK TABLES `logins` WRITE;
/*!40000 ALTER TABLE `logins` DISABLE KEYS */;
INSERT INTO `logins` VALUES ('bgmitest74707@gmail.com',1,NULL,'Customer'),('pkharche74707@gmail.com',2,NULL,'Customer'),('pranavkharche79@gmail.com',1,'Admin@123','Admin'),('test@gmail.com',2,'Test@123','Customer'),('test1@gmail.com',3,'Test@123','Customer');
/*!40000 ALTER TABLE `logins` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-05-07 13:43:14
