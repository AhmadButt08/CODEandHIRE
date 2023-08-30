-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: fyp_project
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `certification_entity`
--

DROP TABLE IF EXISTS `certification_entity`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `certification_entity` (
  `id` int NOT NULL AUTO_INCREMENT,
  `certification_name` varchar(255) DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKnq85fybrsw0upipg0ejhe4n2v` (`user_id`),
  CONSTRAINT `FKnq85fybrsw0upipg0ejhe4n2v` FOREIGN KEY (`user_id`) REFERENCES `user_entity` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `certification_entity`
--

LOCK TABLES `certification_entity` WRITE;
/*!40000 ALTER TABLE `certification_entity` DISABLE KEYS */;
INSERT INTO `certification_entity` VALUES (2,'AWS Solution Architect',13),(3,'SQL ',13),(4,'Aws developer',446),(5,'Front-end Master',446),(6,'Devops',446);
/*!40000 ALTER TABLE `certification_entity` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hibernate_sequence`
--

DROP TABLE IF EXISTS `hibernate_sequence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hibernate_sequence` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hibernate_sequence`
--

LOCK TABLES `hibernate_sequence` WRITE;
/*!40000 ALTER TABLE `hibernate_sequence` DISABLE KEYS */;
INSERT INTO `hibernate_sequence` VALUES (691);
/*!40000 ALTER TABLE `hibernate_sequence` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `image_entity`
--

DROP TABLE IF EXISTS `image_entity`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `image_entity` (
  `id` int NOT NULL AUTO_INCREMENT,
  `content_type` varchar(255) DEFAULT NULL,
  `data` longblob,
  `file_name` varchar(255) DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `image_path` longtext,
  PRIMARY KEY (`id`),
  KEY `FKnnae9idlott335fbsnkejvtap` (`user_id`),
  CONSTRAINT `FKnnae9idlott335fbsnkejvtap` FOREIGN KEY (`user_id`) REFERENCES `user_entity` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `image_entity`
--

LOCK TABLES `image_entity` WRITE;
/*!40000 ALTER TABLE `image_entity` DISABLE KEYS */;
INSERT INTO `image_entity` VALUES (15,'image/jpeg',NULL,'WhatsApp Image 2023-06-04 at 12.37.22 AM.jpeg',13,'20230604003752_6552284e-d1da-48f3-b051-dfcfb800abb2.WhatsApp Image 2023-06-04 at 12.37.22 AM.jpeg'),(16,'image/jpeg',NULL,'-oirgyt.jpg',446,'20230604004251_61660f97-0ffc-4d42-93d1-dc3f82e8a7ff.-oirgyt.jpg');
/*!40000 ALTER TABLE `image_entity` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `probelm_submission_entity`
--

DROP TABLE IF EXISTS `probelm_submission_entity`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `probelm_submission_entity` (
  `submission_id` int NOT NULL AUTO_INCREMENT,
  `submisson_score` float NOT NULL,
  `submitted_code` varchar(255) DEFAULT NULL,
  `submitted_date` datetime DEFAULT NULL,
  `problem_id` int DEFAULT NULL,
  PRIMARY KEY (`submission_id`),
  KEY `FKhu1u30i5oj5xm0nsoirsq3iy9` (`problem_id`),
  CONSTRAINT `FKhu1u30i5oj5xm0nsoirsq3iy9` FOREIGN KEY (`problem_id`) REFERENCES `problem_entity` (`problem_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `probelm_submission_entity`
--

LOCK TABLES `probelm_submission_entity` WRITE;
/*!40000 ALTER TABLE `probelm_submission_entity` DISABLE KEYS */;
/*!40000 ALTER TABLE `probelm_submission_entity` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `problem_entity`
--

DROP TABLE IF EXISTS `problem_entity`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `problem_entity` (
  `problem_id` int NOT NULL AUTO_INCREMENT,
  `difficulty_level` varchar(255) DEFAULT NULL,
  `max_score` int NOT NULL,
  `problem_description` text,
  `problem_solution` varchar(255) DEFAULT NULL,
  `problem_status` bit(1) NOT NULL,
  `problem_title` varchar(255) DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`problem_id`),
  KEY `FKgo7uiukwrjjja4l5gwa93uj34` (`user_id`),
  CONSTRAINT `FKgo7uiukwrjjja4l5gwa93uj34` FOREIGN KEY (`user_id`) REFERENCES `user_entity` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `problem_entity`
--

LOCK TABLES `problem_entity` WRITE;
/*!40000 ALTER TABLE `problem_entity` DISABLE KEYS */;
INSERT INTO `problem_entity` VALUES (1,'Easy',2,'<div>\r                   <p><strong>Objective</strong><br/>In this challenge, we review some basic concepts that will get you started with this series. You will need to use the same (or similar) syntax to read input and write output in challenges throughout  for learning materials and an instructional video!</p><br/>\r                   <p><strong>Task</strong><br/>To complete this challenge, you must save a line of input from stdin to a variable, print&nbsp;Hello, World.&nbsp;on a single line, and finally print the value of your variable on a second line.</p>\r                   <p>You\'ve got this!</p><br/>\r                   <p><strong>Note:</strong>&nbsp;<br/>The instructions are Java-based, but we support submissions in many popular languages. You can switch languages using the drop-down menu above your editor, and the variable may be written differently depending on the best-practice conventions of your submission language.</p><br/>\r                   <p><strong>Input Format</strong></p>\r ><strong>Output Format</strong></p>\r                   <p>Print&nbsp;Hello, World.&nbsp;on the first line, and the contents of on the second line.</p><br/>\r                   <p><strong>Sample Input</strong></p>\r                   <p><strong>Null</strong></p><br/>\r                   <p><strong>Sample Output</strong></p>\r                   <p>Hello World.</p><br/>\r                   <p><strong>Explanation</strong></p>\r                   <p>On the first line, we print the string literal&nbsp;Hello, World.. On the second line, we print the contents of the variable which, for this sample case, happens to be&nbsp;Welcome to 30 Days of Code!<em>.</em></p>\r \r  </div>','public class Hello{\n	public static void main(String[] args){\n	System.out.print(\"Hello World\");\n	}\n}',_binary '','Hello World',NULL),(16,'Easy',2,'<p>Write a prgram that print sum of two variables a and b</p><p>assign a value 2 and b with 3</p>','public class Add{\n	public static void main(String[] args){\n\n	}\n}',_binary '','Add Variable',NULL),(18,'Medium',3,'<p>Write a program that print the Multiple of two numbers a and b.</p><p>And print the on the console.</p>','int a , int b ;\na = 5;\nb = 2;\nprint(a*b)',_binary '','Multiple Numbers',NULL),(19,'Easy',1,'<p>Write a program that print Division&nbsp; of two numbers a and b.</p><p>And print the on the console.</p>','int a , int b ;\na = 10;\nb = 2;\nprint(a/b)',_binary '\0','Divide Numbers',NULL),(20,'Easy',1,'<p>Write a program that print Substraction&nbsp; of two numbers a and b.</p><p>And print the on the console.</p>','int a , int b ;\na = 10;\nb = 2;\nprint(a-b)',_binary '\0','Substract Numbers',NULL),(21,'Easy',3,'<p>knerererer</p>','print(\'hello\')',_binary '\0','Hello',NULL),(22,'Easy',3,'<p>knerererer</p>','print(\'hello\')',_binary '\0','Hello',NULL),(23,'Easy',3,'<p>knerererer</p>','print(\'hello\')',_binary '\0','Hello',NULL),(24,'Easy',3,'<p>knerererer</p>','print(\'hello\')',_binary '\0','Hello',NULL),(25,'Easy',3,'<p>knerererer</p>','print(\'hello\')',_binary '\0','Hello',NULL),(26,'Easy',2,'<p>hello world how are you</p>','print(\"hello worl\")',_binary '\0','hello World',NULL),(27,'Easy',2,'<p>hello world how are you</p>','print(\"hello worl\")',_binary '\0','hello World',NULL),(28,'Easy',2,'<p>hello this a hello world program</p>','world',_binary '\0','hello',NULL),(29,'Easy',2,'<p>hello this a hello world program</p>','world',_binary '\0','hello',NULL),(30,'Easy',2,'<p>print hello world</p>','hello Word',_binary '\0','hello world',NULL),(31,'Easy',2,'<p>print hello world</p>','hello Word',_binary '\0','hello world',NULL),(32,'Easy',2,'<p>print hello world</p>','hello Word',_binary '\0','hello world',NULL),(33,'Easy',2,'<p>print hello world</p>','hello Word',_binary '\0','hello world',NULL);
/*!40000 ALTER TABLE `problem_entity` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `profile_entity`
--

DROP TABLE IF EXISTS `profile_entity`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `profile_entity` (
  `profile_id` int NOT NULL AUTO_INCREMENT,
  `location` varchar(255) DEFAULT NULL,
  `full_name` varchar(255) DEFAULT NULL,
  `head_line` varchar(255) DEFAULT NULL,
  `number` varchar(255) DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`profile_id`),
  KEY `FKo2umrys1k6bv6donx07r5ayv3` (`user_id`),
  CONSTRAINT `FKo2umrys1k6bv6donx07r5ayv3` FOREIGN KEY (`user_id`) REFERENCES `user_entity` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `profile_entity`
--

LOCK TABLES `profile_entity` WRITE;
/*!40000 ALTER TABLE `profile_entity` DISABLE KEYS */;
INSERT INTO `profile_entity` VALUES (7,'Rawalpindi','Muhammad Ehsan','Full Stack Engineer Intern','340222343243',446),(16,'Rawalpindi','Ahemd Amjad Butt','Front-end Developer','034002323223',13);
/*!40000 ALTER TABLE `profile_entity` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `skill_entity`
--

DROP TABLE IF EXISTS `skill_entity`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `skill_entity` (
  `id` int NOT NULL AUTO_INCREMENT,
  `skill_name` varchar(255) DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKimrescot9a19hcgwnb5cwvn0c` (`user_id`),
  CONSTRAINT `FKimrescot9a19hcgwnb5cwvn0c` FOREIGN KEY (`user_id`) REFERENCES `user_entity` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `skill_entity`
--

LOCK TABLES `skill_entity` WRITE;
/*!40000 ALTER TABLE `skill_entity` DISABLE KEYS */;
INSERT INTO `skill_entity` VALUES (1,'AI',13),(2,'Web Dev',13),(3,'Cyber Security',13),(4,'Front-end',446),(5,'back-end',446),(6,'database',446);
/*!40000 ALTER TABLE `skill_entity` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `submission_entity`
--

DROP TABLE IF EXISTS `submission_entity`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `submission_entity` (
  `submission_id` int NOT NULL AUTO_INCREMENT,
  `submisson_score` float NOT NULL,
  `submitted_code` varchar(255) DEFAULT NULL,
  `submitted_date` datetime DEFAULT NULL,
  `problem_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`submission_id`),
  KEY `FKha7j03dt620rl6e0i62ai29j3` (`problem_id`),
  KEY `FKr94mvwk4orwdwhrldojk0ydrf` (`user_id`),
  CONSTRAINT `FKha7j03dt620rl6e0i62ai29j3` FOREIGN KEY (`problem_id`) REFERENCES `problem_entity` (`problem_id`),
  CONSTRAINT `FKr94mvwk4orwdwhrldojk0ydrf` FOREIGN KEY (`user_id`) REFERENCES `user_entity` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=592 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `submission_entity`
--

LOCK TABLES `submission_entity` WRITE;
/*!40000 ALTER TABLE `submission_entity` DISABLE KEYS */;
INSERT INTO `submission_entity` VALUES (585,2,'public class Hello{\n	public static void main(String[] args){\n	System.out.print(\"Hello World\");\n	}\n}','2023-06-01 23:50:38',1,446),(588,3,'public class Hello{\n	public static void main(String[] args){\n      int a, b;\n      a = 5;\n      b=2;\n	System.out.print(5*2);\n	}\n}','2023-06-02 00:23:59',18,446),(591,2,'public class Hello{\n	public static void main(String[] args){\n	System.out.print(\"Hello World\");\n	}\n}','2023-06-02 00:26:23',1,13);
/*!40000 ALTER TABLE `submission_entity` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `test_case_entity`
--

DROP TABLE IF EXISTS `test_case_entity`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `test_case_entity` (
  `test_case_id` int NOT NULL AUTO_INCREMENT,
  `sample_input` varchar(255) NOT NULL,
  `sample_output` varchar(255) NOT NULL,
  `problem_id` int DEFAULT NULL,
  PRIMARY KEY (`test_case_id`),
  KEY `FK9h5qlp1aq8mv1iqb7xlyrgety` (`problem_id`),
  CONSTRAINT `FK9h5qlp1aq8mv1iqb7xlyrgety` FOREIGN KEY (`problem_id`) REFERENCES `problem_entity` (`problem_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `test_case_entity`
--

LOCK TABLES `test_case_entity` WRITE;
/*!40000 ALTER TABLE `test_case_entity` DISABLE KEYS */;
INSERT INTO `test_case_entity` VALUES (1,'','Hello World',1),(2,'','5',16),(3,'0','10',18),(4,'0','5',19),(5,'0','8',20),(6,'hello World','Hello World',33);
/*!40000 ALTER TABLE `test_case_entity` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `token_entity`
--

DROP TABLE IF EXISTS `token_entity`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `token_entity` (
  `id` int NOT NULL,
  `expired` bit(1) NOT NULL,
  `revoked` bit(1) NOT NULL,
  `token` varchar(255) DEFAULT NULL,
  `token_type` varchar(255) DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_2gtx0vpbs5ljauorddy3w4wqy` (`token`),
  KEY `FKchycpasyr16kt66k09e6ompve` (`user_id`),
  CONSTRAINT `FKchycpasyr16kt66k09e6ompve` FOREIGN KEY (`user_id`) REFERENCES `user_entity` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `token_entity`
--

LOCK TABLES `token_entity` WRITE;
/*!40000 ALTER TABLE `token_entity` DISABLE KEYS */;
INSERT INTO `token_entity` VALUES (540,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDb21wYW55VXNlciJ9XSwic3ViIjoiaGFtemFAZ21haWwuY29tIiwidXNlcklkIjo0NTcsImlhdCI6MTY4NTE4MzE0NCwiZXhwIjoxNjg1MTg0NTg0fQ.lrOvcjgYWhUKXhQeIKYgH194yGuq3d5zOCHlO1y2iMQ','BEARER',457),(541,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDYW5kaWRhdGVVc2VyIn1dLCJzdWIiOiJhaGVtZGJ1dHRAZ21haWwuY29tIiwidXNlcklkIjoxMywiaWF0IjoxNjg1MjA2NTc4LCJleHAiOjE2ODUyMDgwMTh9.zfhgpW7KSF1rba_T8gceUm6JVFms24EzeN0wd4peiTI','BEARER',13),(542,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDYW5kaWRhdGVVc2VyIn1dLCJzdWIiOiJhaGVtZGJ1dHRAZ21haWwuY29tIiwidXNlcklkIjoxMywiaWF0IjoxNjg1MjA2NTk5LCJleHAiOjE2ODUyMDgwMzl9.mWDix3ERD6rrd2v0zBH9yc0C8a_mT3CX-E4q_64H_x0','BEARER',13),(543,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDb21wYW55VXNlciJ9XSwic3ViIjoiaGFtemFAZ21haWwuY29tIiwidXNlcklkIjo0NTcsImlhdCI6MTY4NTIwNjcwNSwiZXhwIjoxNjg1MjA4MTQ1fQ.tGRDjL9fM8a0RvOaYgRgZBY7Rq2uLG3ROERI49N-270','BEARER',457),(544,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDb21wYW55VXNlciJ9XSwic3ViIjoiaGFtemFAZ21haWwuY29tIiwidXNlcklkIjo0NTcsImlhdCI6MTY4NTIwNjcwOCwiZXhwIjoxNjg1MjA4MTQ4fQ.W7V3pLBabee8SUCLFRTXoylbo1wqmH1ghJOeqk6ERIo','BEARER',457),(545,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDYW5kaWRhdGVVc2VyIn1dLCJzdWIiOiJhaGVtZGJ1dHRAZ21haWwuY29tIiwidXNlcklkIjoxMywiaWF0IjoxNjg1MjA5MzYxLCJleHAiOjE2ODUyMTA4MDF9.lU5WnJ699EQqblzRxeinL7dta-NspH9_PftqXM1Urf0','BEARER',13),(546,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDb21wYW55VXNlciJ9XSwic3ViIjoiaGFtemFAZ21haWwuY29tIiwidXNlcklkIjo0NTcsImlhdCI6MTY4NTIxMDk4NywiZXhwIjoxNjg1MjEyNDI3fQ.fQzmFKJQDo7KYpkLFRgykJFSDzFLB44y0HGnMNR9Z8A','BEARER',457),(547,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDb21wYW55VXNlciJ9XSwic3ViIjoiaGFtemFAZ21haWwuY29tIiwidXNlcklkIjo0NTcsImlhdCI6MTY4NTIxMTAxMCwiZXhwIjoxNjg1MjEyNDUwfQ.xtxqBeq20L5yI5qzbJRG6WZDCBSQ6iKqwyyfJd0GwMQ','BEARER',457),(548,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDYW5kaWRhdGVVc2VyIn1dLCJzdWIiOiJhaGVtZGJ1dHRAZ21haWwuY29tIiwidXNlcklkIjoxMywiaWF0IjoxNjg1MjE1MjE4LCJleHAiOjE2ODUyMTY2NTh9.iMbNKUYKwSsTbXhW427X8xIPQTK0gwecPes1UIY-gEw','BEARER',13),(549,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDYW5kaWRhdGVVc2VyIn1dLCJzdWIiOiJhaGVtZGJ1dHRAZ21haWwuY29tIiwidXNlcklkIjoxMywiaWF0IjoxNjg1MjE1MjM0LCJleHAiOjE2ODUyMTY2NzR9.0Sl7TxZoIopwnwROUhm6juqmR5FpiCQ6i97kgOPKGoU','BEARER',13),(550,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDYW5kaWRhdGVVc2VyIn1dLCJzdWIiOiJhaGVtZGJ1dHRAZ21haWwuY29tIiwidXNlcklkIjoxMywiaWF0IjoxNjg1MjYyNzc2LCJleHAiOjE2ODUyNjQyMTZ9.i1YLg7LZhhnutQZDM72XGDox0TYSFBVfTs1tRSyExv4','BEARER',13),(551,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDYW5kaWRhdGVVc2VyIn1dLCJzdWIiOiJhaGVtZGJ1dHRAZ21haWwuY29tIiwidXNlcklkIjoxMywiaWF0IjoxNjg1MjYyNzc3LCJleHAiOjE2ODUyNjQyMTd9.R0_4exnJxuIEiwz7XYO3a9J0ELEJlQ4CDMPMa9ppywI','BEARER',13),(552,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDYW5kaWRhdGVVc2VyIn1dLCJzdWIiOiJhaGVtZGJ1dHRAZ21haWwuY29tIiwidXNlcklkIjoxMywiaWF0IjoxNjg1MjY0MzI4LCJleHAiOjE2ODUyNjU3Njh9.9QRv3IeSYOR9qIbqAECbRLFVavqdhy3rjdvdxh0svDU','BEARER',13),(554,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDYW5kaWRhdGVVc2VyIn1dLCJzdWIiOiJhaGVtZGJ1dHRAZ21haWwuY29tIiwidXNlcklkIjoxMywiaWF0IjoxNjg1MjY0MzI5LCJleHAiOjE2ODUyNjU3Njl9.q0jBQFz3k5lSPl-65vmHTITb8uXI0FnGevHTcWxShUY','BEARER',13),(555,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDYW5kaWRhdGVVc2VyIn1dLCJzdWIiOiJhaGVtZGJ1dHRAZ21haWwuY29tIiwidXNlcklkIjoxMywiaWF0IjoxNjg1MjY2MDUzLCJleHAiOjE2ODUyNjc0OTN9.fzPdZ1sj1J8KyeKRKWKa76e0_M8FrmpywkwcwwUQnXQ','BEARER',13),(559,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDYW5kaWRhdGVVc2VyIn1dLCJzdWIiOiJhaGVtZGJ1dHRAZ21haWwuY29tIiwidXNlcklkIjoxMywiaWF0IjoxNjg1MjY2MDU0LCJleHAiOjE2ODUyNjc0OTR9.8oQOkME-qV_mzwZn626JfmAw1moXwGphek0D0wwq4y4','BEARER',13),(561,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDYW5kaWRhdGVVc2VyIn1dLCJzdWIiOiJhaGVtZGJ1dHRAZ21haWwuY29tIiwidXNlcklkIjoxMywiaWF0IjoxNjg1MjY2MDk3LCJleHAiOjE2ODUyNjc1Mzd9.PdTFoDIkWl3i21Xu42bw8T5xXK2d6Z7XFXLPyqgaUWI','BEARER',13),(562,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDYW5kaWRhdGVVc2VyIn1dLCJzdWIiOiJhaGVtZGJ1dHRAZ21haWwuY29tIiwidXNlcklkIjoxMywiaWF0IjoxNjg1MjY2MDk5LCJleHAiOjE2ODUyNjc1Mzl9.wb7w4TTAc0wH7ZSzoNpTjttlB_47zblK7gz5MwoYGrs','BEARER',13),(563,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDb21wYW55VXNlciJ9XSwic3ViIjoiaGFtemFAZ21haWwuY29tIiwidXNlcklkIjo0NTcsImlhdCI6MTY4NTI2NjQyNiwiZXhwIjoxNjg1MjY3ODY2fQ.QibjM3YZvZ0cTSFoFgozBjuuca9oqyiZHrhOtSKQsH4','BEARER',457),(564,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDb21wYW55VXNlciJ9XSwic3ViIjoiaGFtemFAZ21haWwuY29tIiwidXNlcklkIjo0NTcsImlhdCI6MTY4NTI2NjQzNCwiZXhwIjoxNjg1MjY3ODc0fQ.PNDPy7gCptgiOM8dStCULlPrVGOJYGsCc1ZOHaXk96o','BEARER',457),(565,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDb21wYW55VXNlciJ9XSwic3ViIjoiaGFtemFAZ21haWwuY29tIiwidXNlcklkIjo0NTcsImlhdCI6MTY4NTI5MjA4OSwiZXhwIjoxNjg1MjkzNTI5fQ.J9csEmZ0Axths8hz4MePArGMLt5UhYG2WSTXptkPQtI','BEARER',457),(566,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDYW5kaWRhdGVVc2VyIn1dLCJzdWIiOiJhaGVtZGJ1dHRAZ21haWwuY29tIiwidXNlcklkIjoxMywiaWF0IjoxNjg1MjkyMjg5LCJleHAiOjE2ODUyOTM3Mjl9.xdJXxLCoEI6rE4yMbRjx_afsqyxJOasXQk01GnZHGtQ','BEARER',13),(567,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDYW5kaWRhdGVVc2VyIn1dLCJzdWIiOiJhaGVtZGJ1dHRAZ21haWwuY29tIiwidXNlcklkIjoxMywiaWF0IjoxNjg1MjkyMzE1LCJleHAiOjE2ODUyOTM3NTV9.qKireDftA8AeTLhOCqznJA7nDhZoXnPc6y5_LoyprL4','BEARER',13),(568,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDYW5kaWRhdGVVc2VyIn1dLCJzdWIiOiJhaGVtZGJ1dHRAZ21haWwuY29tIiwidXNlcklkIjoxMywiaWF0IjoxNjg1MjkzMDU3LCJleHAiOjE2ODUyOTQ0OTd9.UznJ4pbt4h0ePalaFu--8TTNDyPurHxJgytiXh3Lhac','BEARER',13),(569,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDYW5kaWRhdGVVc2VyIn1dLCJzdWIiOiJhaGVtZGJ1dHRAZ21haWwuY29tIiwidXNlcklkIjoxMywiaWF0IjoxNjg1MjkzMjAzLCJleHAiOjE2ODUyOTQ2NDN9.nBNSUhpQq7aBwhrthHvhpoUyDja-UbK-5prlldqpRbQ','BEARER',13),(570,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDYW5kaWRhdGVVc2VyIn1dLCJzdWIiOiJhaGVtZGJ1dHRAZ21haWwuY29tIiwidXNlcklkIjoxMywiaWF0IjoxNjg1Mjk0NzMwLCJleHAiOjE2ODUyOTYxNzB9.1KtSJzG9iAOGWX2aaQYiM7Nd9sTvWbm5CXxu9Hk55fs','BEARER',13),(571,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDYW5kaWRhdGVVc2VyIn1dLCJzdWIiOiJhaGVtZGJ1dHRAZ21haWwuY29tIiwidXNlcklkIjoxMywiaWF0IjoxNjg1Mjk0ODQwLCJleHAiOjE2ODUyOTYyODB9.IZiS4r5IFk6ITV2jByEZ6DDc3iz-taEAqlbjTK3SkWI','BEARER',13),(572,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDYW5kaWRhdGVVc2VyIn1dLCJzdWIiOiJhaGVtZGJ1dHRAZ21haWwuY29tIiwidXNlcklkIjoxMywiaWF0IjoxNjg1Mjk2NTYyLCJleHAiOjE2ODUyOTgwMDJ9.3AIAS_sHSN1B3FmtvSx54-t01Yci8h-8Lh7r4-TUhug','BEARER',13),(573,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDYW5kaWRhdGVVc2VyIn1dLCJzdWIiOiJhaGVtZGJ1dHRAZ21haWwuY29tIiwidXNlcklkIjoxMywiaWF0IjoxNjg1Mjk2NTYzLCJleHAiOjE2ODUyOTgwMDN9.6Y0rEFDele-hXWCbm6A3dUE7q7matVlsV-dkN5KOmzo','BEARER',13),(574,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDYW5kaWRhdGVVc2VyIn1dLCJzdWIiOiJhaGVtZGJ1dHRAZ21haWwuY29tIiwidXNlcklkIjoxMywiaWF0IjoxNjg1NjQwMDc5LCJleHAiOjE2ODU2NDE1MTl9.sfHN-0cZTQBJR4tvx4Qyr1tGnF5kEPg0IHk4cMpWBLQ','BEARER',13),(575,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDYW5kaWRhdGVVc2VyIn1dLCJzdWIiOiJlaHNhbkBnbWFpbC5jb20iLCJ1c2VySWQiOjQ0NiwiaWF0IjoxNjg1NjQxMTA0LCJleHAiOjE2ODU2NDI1NDR9.Ft71I2jw8eGYE6FJ1-lq415_otS5IWljhFvGCgABxyQ','BEARER',446),(576,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDYW5kaWRhdGVVc2VyIn1dLCJzdWIiOiJlaHNhbkBnbWFpbC5jb20iLCJ1c2VySWQiOjQ0NiwiaWF0IjoxNjg1NjQxMTA3LCJleHAiOjE2ODU2NDI1NDd9.vB42ZQiInUYRek6nlMsaVtFai8sXg9IfHRcnIv9XxKk','BEARER',446),(577,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDYW5kaWRhdGVVc2VyIn1dLCJzdWIiOiJlaHNhbkBnbWFpbC5jb20iLCJ1c2VySWQiOjQ0NiwiaWF0IjoxNjg1NjQyNjM3LCJleHAiOjE2ODU2NDQwNzd9.UnE9W5rV_Uyc4Ac7_L99xY4P5DCkHJ6d29HMwly6knU','BEARER',446),(578,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDYW5kaWRhdGVVc2VyIn1dLCJzdWIiOiJlaHNhbkBnbWFpbC5jb20iLCJ1c2VySWQiOjQ0NiwiaWF0IjoxNjg1NjQyNjQ1LCJleHAiOjE2ODU2NDQwODV9.JCpHoP_32B9_3JZVHJgeeDwFGRy2Dwa0P5oc9pyBoGE','BEARER',446),(579,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDYW5kaWRhdGVVc2VyIn1dLCJzdWIiOiJlaHNhbkBnbWFpbC5jb20iLCJ1c2VySWQiOjQ0NiwiaWF0IjoxNjg1NjQ1MTc1LCJleHAiOjE2ODU2NDY2MTV9.8eNWLdLGDAr4ERjaS2taB58YIWn6_tABqmaY9l-99NY','BEARER',446),(581,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDYW5kaWRhdGVVc2VyIn1dLCJzdWIiOiJlaHNhbkBnbWFpbC5jb20iLCJ1c2VySWQiOjQ0NiwiaWF0IjoxNjg1NjQ1MTc2LCJleHAiOjE2ODU2NDY2MTZ9.Sv4Q7CnQgsShgymhUP4vrIIJmTmRCzjLb5_q1N9GirM','BEARER',446),(586,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDYW5kaWRhdGVVc2VyIn1dLCJzdWIiOiJlaHNhbkBnbWFpbC5jb20iLCJ1c2VySWQiOjQ0NiwiaWF0IjoxNjg1NjQ3MzM2LCJleHAiOjE2ODU2NDg3NzZ9.SqFKgy_6HPz4kTvQGV_V8ZsUG-FeiyTOebbendsa9N4','BEARER',446),(587,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDYW5kaWRhdGVVc2VyIn1dLCJzdWIiOiJlaHNhbkBnbWFpbC5jb20iLCJ1c2VySWQiOjQ0NiwiaWF0IjoxNjg1NjQ3MzM3LCJleHAiOjE2ODU2NDg3Nzd9.GZ8WjBULXUGZV9z36etFAJba-p9evtDUNIu9IW1HNnA','BEARER',446),(589,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDYW5kaWRhdGVVc2VyIn1dLCJzdWIiOiJhaGVtZGJ1dHRAZ21haWwuY29tIiwidXNlcklkIjoxMywiaWF0IjoxNjg1NjQ3NDYxLCJleHAiOjE2ODU2NDg5MDF9.a6z2GfLycVwQGXzkMnV1qg_XDAX4o9P8raNdFGU34DE','BEARER',13),(590,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDYW5kaWRhdGVVc2VyIn1dLCJzdWIiOiJhaGVtZGJ1dHRAZ21haWwuY29tIiwidXNlcklkIjoxMywiaWF0IjoxNjg1NjQ3NDYzLCJleHAiOjE2ODU2NDg5MDN9.KtkBNGFqtvTdGUJV68pxieDa59bmgUXVjs_CnU0fIKQ','BEARER',13),(592,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDYW5kaWRhdGVVc2VyIn1dLCJzdWIiOiJlaHNhbkBnbWFpbC5jb20iLCJ1c2VySWQiOjQ0NiwiaWF0IjoxNjg1NjQ3NjA2LCJleHAiOjE2ODU2NDkwNDZ9.QX4jzF2eURFSkKX8G25qZjUg-AOxztkUhfZrByzSBxk','BEARER',446),(593,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDYW5kaWRhdGVVc2VyIn1dLCJzdWIiOiJlaHNhbkBnbWFpbC5jb20iLCJ1c2VySWQiOjQ0NiwiaWF0IjoxNjg1NjQ3NjA3LCJleHAiOjE2ODU2NDkwNDd9.fBVyr-Hg8umMspxsgJZXFN04WbOyjpaJXjlC8ehJPdc','BEARER',446),(594,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDYW5kaWRhdGVVc2VyIn1dLCJzdWIiOiJlaHNhbkBnbWFpbC5jb20iLCJ1c2VySWQiOjQ0NiwiaWF0IjoxNjg1NzI0MjYxLCJleHAiOjE2ODU3MjU3MDF9.sdEKGr7ThXxLbdjBS6f3OdS6tKkGrZQl1Vp2gcnSfeI','BEARER',446),(595,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDYW5kaWRhdGVVc2VyIn1dLCJzdWIiOiJlaHNhbkBnbWFpbC5jb20iLCJ1c2VySWQiOjQ0NiwiaWF0IjoxNjg1NzI2MDU1LCJleHAiOjE2ODU3Mjc0OTV9.2NvFsxeTmfnJQfPYIucB6QmH2C31U8vfD720B9f32ws','BEARER',446),(597,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDYW5kaWRhdGVVc2VyIn1dLCJzdWIiOiJlaHNhbkBnbWFpbC5jb20iLCJ1c2VySWQiOjQ0NiwiaWF0IjoxNjg1NzI2MDU3LCJleHAiOjE2ODU3Mjc0OTd9.h4sdi_6HBXwxVm5PVPqkHlLFc0VOW3rx6XSZH5mr6Kg','BEARER',446),(598,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDYW5kaWRhdGVVc2VyIn1dLCJzdWIiOiJlaHNhbkBnbWFpbC5jb20iLCJ1c2VySWQiOjQ0NiwiaWF0IjoxNjg1NzI5MzkyLCJleHAiOjE2ODU3MzA4MzJ9.WlHuZGm0Pw2GhKscvSv-zfvgHMWesIZXPGSBtZsY9HM','BEARER',446),(599,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDYW5kaWRhdGVVc2VyIn1dLCJzdWIiOiJlaHNhbkBnbWFpbC5jb20iLCJ1c2VySWQiOjQ0NiwiaWF0IjoxNjg1NzI5MzkzLCJleHAiOjE2ODU3MzA4MzN9.8SapodHYOwPuoA_WbbGpWM-N_VAhXtFegMLqwMmajaM','BEARER',446),(601,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDYW5kaWRhdGVVc2VyIn1dLCJzdWIiOiJlaHNhbkBnbWFpbC5jb20iLCJ1c2VySWQiOjQ0NiwiaWF0IjoxNjg1Nzc2NTY4LCJleHAiOjE2ODU3NzgwMDh9.R_gvM-vHJh1OcYYozLIipEbi_ixv4ykf3Hq09NXFxvk','BEARER',446),(602,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDYW5kaWRhdGVVc2VyIn1dLCJzdWIiOiJlaHNhbkBnbWFpbC5jb20iLCJ1c2VySWQiOjQ0NiwiaWF0IjoxNjg1Nzc2NTY5LCJleHAiOjE2ODU3NzgwMDl9.BzJv0WQV6s7yc6E0-0e93kokQPdMtcKJ-NfejFgTn1w','BEARER',446),(603,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDYW5kaWRhdGVVc2VyIn1dLCJzdWIiOiJhaGVtZGJ1dHRAZ21haWwuY29tIiwidXNlcklkIjoxMywiaWF0IjoxNjg1Nzc3MzAzLCJleHAiOjE2ODU3Nzg3NDN9.IDf_bWCE-9VVs3RfrL0fs-pWceUQ-4I1O5fm5ZyjhGg','BEARER',13),(604,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDYW5kaWRhdGVVc2VyIn1dLCJzdWIiOiJhaGVtZGJ1dHRAZ21haWwuY29tIiwidXNlcklkIjoxMywiaWF0IjoxNjg1Nzc3MzMyLCJleHAiOjE2ODU3Nzg3NzJ9.P-9s7_sW_nm7lWM0-5TKiW3E7Vfd4DVNSghLxRTuZDg','BEARER',13),(607,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDYW5kaWRhdGVVc2VyIn1dLCJzdWIiOiJhaGVtZGJ1dHRAZ21haWwuY29tIiwidXNlcklkIjoxMywiaWF0IjoxNjg1Nzc3Mzk4LCJleHAiOjE2ODU3Nzg4Mzh9.bS-1shP0ovLLUwMp6Rx4uYFhTb5VBFXJ_luA49s1zMM','BEARER',13),(608,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDYW5kaWRhdGVVc2VyIn1dLCJzdWIiOiJhaGVtZGJ1dHRAZ21haWwuY29tIiwidXNlcklkIjoxMywiaWF0IjoxNjg1Nzc4ODEyLCJleHAiOjE2ODU3ODAyNTJ9.0Cdv_WyM7FyGEY6szvli2-8kATdYwrrcg2rxoIJeKsM','BEARER',13),(609,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDYW5kaWRhdGVVc2VyIn1dLCJzdWIiOiJhaGVtZGJ1dHRAZ21haWwuY29tIiwidXNlcklkIjoxMywiaWF0IjoxNjg1NzgwNjcxLCJleHAiOjE2ODU3ODIxMTF9.cs1MlB1xyJiGEd4zusGpLP5tH2MIqa7Az16fQ8Zm7bI','BEARER',13),(610,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDYW5kaWRhdGVVc2VyIn1dLCJzdWIiOiJhaGVtZGJ1dHRAZ21haWwuY29tIiwidXNlcklkIjoxMywiaWF0IjoxNjg1NzgzMDMwLCJleHAiOjE2ODU3ODQ0NzB9.vQJBMuYPzBGEYvKMZEQ2vlbsBjCHpVvnYesTxgGFN3c','BEARER',13),(611,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDYW5kaWRhdGVVc2VyIn1dLCJzdWIiOiJhaGVtZGJ1dHRAZ21haWwuY29tIiwidXNlcklkIjoxMywiaWF0IjoxNjg1NzgzOTE4LCJleHAiOjE2ODU3ODUzNTh9.Wc6TYmJZ9Ertasjtg1Vn2GA9cGwrUD9ETw5OKtLeY2A','BEARER',13),(613,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDYW5kaWRhdGVVc2VyIn1dLCJzdWIiOiJhaGVtZGJ1dHRAZ21haWwuY29tIiwidXNlcklkIjoxMywiaWF0IjoxNjg1NzgzOTIxLCJleHAiOjE2ODU3ODUzNjF9.UCpKuqfn0o6Mc2NCgvFOrLLiQC39kLmm-q1vEhiz2TM','BEARER',13),(614,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDYW5kaWRhdGVVc2VyIn1dLCJzdWIiOiJlaHNhbkBnbWFpbC5jb20iLCJ1c2VySWQiOjQ0NiwiaWF0IjoxNjg1NzgzOTQxLCJleHAiOjE2ODU3ODUzODF9.fC2dRW5ghI4q6mKaWHiuCEhal6Yf1bQZfNihBIe-l-0','BEARER',446),(615,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDYW5kaWRhdGVVc2VyIn1dLCJzdWIiOiJlaHNhbkBnbWFpbC5jb20iLCJ1c2VySWQiOjQ0NiwiaWF0IjoxNjg1NzgzOTQzLCJleHAiOjE2ODU3ODUzODN9.Pb644fHSGYNmCjp14p7oxa79UDu6GN0XNLrd-cdG_mY','BEARER',446),(616,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDYW5kaWRhdGVVc2VyIn1dLCJzdWIiOiJlaHNhbkBnbWFpbC5jb20iLCJ1c2VySWQiOjQ0NiwiaWF0IjoxNjg1Nzg1NDQ3LCJleHAiOjE2ODU3ODY4ODd9.eQZqJIaWec99jRv-sY7dPTzIDKH97aT4zea4VkryRrg','BEARER',446),(617,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDYW5kaWRhdGVVc2VyIn1dLCJzdWIiOiJlaHNhbkBnbWFpbC5jb20iLCJ1c2VySWQiOjQ0NiwiaWF0IjoxNjg1Nzg1NDQ5LCJleHAiOjE2ODU3ODY4ODl9.ACJ-o02J84vLhSiYk-1wHsk1I6JNWG9wPYYijt9p-Qo','BEARER',446),(618,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDb21wYW55VXNlciJ9XSwic3ViIjoiaGFtemFAZ21haWwuY29tIiwidXNlcklkIjo0NTcsImlhdCI6MTY4NTc4NTUwMSwiZXhwIjoxNjg1Nzg2OTQxfQ.BWwHt2pYm7KVwPG4QlG6FoCOSA8o11grJm8tzXMf9BE','BEARER',457),(619,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDb21wYW55VXNlciJ9XSwic3ViIjoiaGFtemFAZ21haWwuY29tIiwidXNlcklkIjo0NTcsImlhdCI6MTY4NTc4NTUwMywiZXhwIjoxNjg1Nzg2OTQzfQ.LkVGwF5h3tbuJMut3KBHKrN7sZJrGIw3f-f7gLq7PBU','BEARER',457),(620,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDb21wYW55VXNlciJ9XSwic3ViIjoiaGFtemFAZ21haWwuY29tIiwidXNlcklkIjo0NTcsImlhdCI6MTY4NTc4NTcwMywiZXhwIjoxNjg1Nzg3MTQzfQ.3cG_nNnSXazTkoPTdxW8oBcX-CTN2vzUKVen0c4C8yU','BEARER',457),(621,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDYW5kaWRhdGVVc2VyIn1dLCJzdWIiOiJlaHNhbkBnbWFpbC5jb20iLCJ1c2VySWQiOjQ0NiwiaWF0IjoxNjg1Nzg3MDg1LCJleHAiOjE2ODU3ODg1MjV9.-pKk5r97XKTUck_iR3s8Vm3ce0VVG1o-wSeP7Lnx2JI','BEARER',446),(622,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDYW5kaWRhdGVVc2VyIn1dLCJzdWIiOiJlaHNhbkBnbWFpbC5jb20iLCJ1c2VySWQiOjQ0NiwiaWF0IjoxNjg1Nzg3MTY5LCJleHAiOjE2ODU3ODg2MDl9.qDy8YkvRoc6x5SybpV7k4ECZvih2VQD_zKeXj7Zli3k','BEARER',446),(623,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDYW5kaWRhdGVVc2VyIn1dLCJzdWIiOiJlaHNhbkBnbWFpbC5jb20iLCJ1c2VySWQiOjQ0NiwiaWF0IjoxNjg1Nzg4NjQwLCJleHAiOjE2ODU3OTAwODB9.ti8yJuZCvq14ldGwa4wP5oifd7lavRHpMuO_ltDXCLM','BEARER',446),(624,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDYW5kaWRhdGVVc2VyIn1dLCJzdWIiOiJlaHNhbkBnbWFpbC5jb20iLCJ1c2VySWQiOjQ0NiwiaWF0IjoxNjg1Nzg4NjQxLCJleHAiOjE2ODU3OTAwODF9.dUGCzFljbE2i-17sSUTffTV51cDnYBfmwZOn93jupYQ','BEARER',446),(625,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDb21wYW55VXNlciJ9XSwic3ViIjoiaGFtemFAZ21haWwuY29tIiwidXNlcklkIjo0NTcsImlhdCI6MTY4NTc4ODkwNiwiZXhwIjoxNjg1NzkwMzQ2fQ.eQ1NdvHDuJ4Opo-hBf6sAiNwf_DfoIBGXXxjhHHY0cc','BEARER',457),(626,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDb21wYW55VXNlciJ9XSwic3ViIjoiaGFtemFAZ21haWwuY29tIiwidXNlcklkIjo0NTcsImlhdCI6MTY4NTc4ODkwOSwiZXhwIjoxNjg1NzkwMzQ5fQ.tXCVbEDaa_1ms4p7NCSJoLGFAsmQE0hVDxRfAgtfLKg','BEARER',457),(627,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDYW5kaWRhdGVVc2VyIn1dLCJzdWIiOiJhaGVtZGJ1dHRAZ21haWwuY29tIiwidXNlcklkIjoxMywiaWF0IjoxNjg1NzkwNjc1LCJleHAiOjE2ODU3OTIxMTV9.QBJv8LItcKnqKKpYKsJSpfQhmVQUJoaUnlVVVmO1ozQ','BEARER',13),(628,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDYW5kaWRhdGVVc2VyIn1dLCJzdWIiOiJhaGVtZGJ1dHRAZ21haWwuY29tIiwidXNlcklkIjoxMywiaWF0IjoxNjg1NzkwNjg4LCJleHAiOjE2ODU3OTIxMjh9.bs7t6UN4r3aeWxwJqgpyqwIMzs9vgl3Lo1XGllr3FPM','BEARER',13),(629,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDYW5kaWRhdGVVc2VyIn1dLCJzdWIiOiJhaGVtZGJ1dHRAZ21haWwuY29tIiwidXNlcklkIjoxMywiaWF0IjoxNjg1NzkyMjI2LCJleHAiOjE2ODU3OTM2NjZ9.l8R8TmM_yywvm2H1pIDEuzCbYTgJqQQ2uJtyB9i9DbU','BEARER',13),(631,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDYW5kaWRhdGVVc2VyIn1dLCJzdWIiOiJhaGVtZGJ1dHRAZ21haWwuY29tIiwidXNlcklkIjoxMywiaWF0IjoxNjg1NzkyMjI3LCJleHAiOjE2ODU3OTM2Njd9.f1zc2ahdVqzDllz7e5Kbs_PUWeIHg4Q8V6VAviRAyeM','BEARER',13),(632,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDYW5kaWRhdGVVc2VyIn1dLCJzdWIiOiJhaGVtZGJ1dHRAZ21haWwuY29tIiwidXNlcklkIjoxMywiaWF0IjoxNjg1NzkzMjg4LCJleHAiOjE2ODU3OTQ3Mjh9.mj6TfDj0cxoT10NNEcMdMZG-ILeDkreRs8cYpODCHTM','BEARER',13),(633,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDYW5kaWRhdGVVc2VyIn1dLCJzdWIiOiJhaGVtZGJ1dHRAZ21haWwuY29tIiwidXNlcklkIjoxMywiaWF0IjoxNjg1NzkzMjg5LCJleHAiOjE2ODU3OTQ3Mjl9.PBSNi9zL_6ZgwpYe4JzP5-3Rv2IF9HCMGMJYEOdVbog','BEARER',13),(634,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDYW5kaWRhdGVVc2VyIn1dLCJzdWIiOiJhaGVtZGJ1dHRAZ21haWwuY29tIiwidXNlcklkIjoxMywiaWF0IjoxNjg1Nzk0NjE5LCJleHAiOjE2ODU3OTYwNTl9._xTsdbryVSHDK9oI3piPfy2aXmgwdHRpopSnbb4WoTA','BEARER',13),(635,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDYW5kaWRhdGVVc2VyIn1dLCJzdWIiOiJhaGVtZGJ1dHRAZ21haWwuY29tIiwidXNlcklkIjoxMywiaWF0IjoxNjg1Nzk0NjIxLCJleHAiOjE2ODU3OTYwNjF9.5RZCVHJZLBoQrTVJhw7BcPwAJop9stXuCDw9M18e16I','BEARER',13),(636,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDYW5kaWRhdGVVc2VyIn1dLCJzdWIiOiJhaGVtZGJ1dHRAZ21haWwuY29tIiwidXNlcklkIjoxMywiaWF0IjoxNjg1Nzk1MTMyLCJleHAiOjE2ODU3OTY1NzJ9.JNJSXW4MQ2cGX7wXJR587wuHCpb6P0-xSILsfvPbUNI','BEARER',13),(637,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDYW5kaWRhdGVVc2VyIn1dLCJzdWIiOiJhaGVtZGJ1dHRAZ21haWwuY29tIiwidXNlcklkIjoxMywiaWF0IjoxNjg1Nzk1MTMzLCJleHAiOjE2ODU3OTY1NzN9.oPv1a09KsPMKaljt5szeTE0XEifW3hmvY4fd9_cavLE','BEARER',13),(638,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDb21wYW55VXNlciJ9XSwic3ViIjoiaGFtemFAZ21haWwuY29tIiwidXNlcklkIjo0NTcsImlhdCI6MTY4NTc5NjU2MCwiZXhwIjoxNjg1Nzk4MDAwfQ.7vmy15LrYOVWvMC-d6n8A-N59pcMvWlzRdY0tlH6Ru0','BEARER',457),(639,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDb21wYW55VXNlciJ9XSwic3ViIjoiaGFtemFAZ21haWwuY29tIiwidXNlcklkIjo0NTcsImlhdCI6MTY4NTc5NjU2MSwiZXhwIjoxNjg1Nzk4MDAxfQ.e_x_pbiKXdPgjReEySzKw6TZrtWaLt784bKjuduePWQ','BEARER',457),(640,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDYW5kaWRhdGVVc2VyIn1dLCJzdWIiOiJhaGVtZGJ1dHRAZ21haWwuY29tIiwidXNlcklkIjoxMywiaWF0IjoxNjg1Nzk2NTkwLCJleHAiOjE2ODU3OTgwMzB9.b7lTTDrTb4OEgQVmsCDhKwuGrr6ZipNLuK3bdB-otuc','BEARER',13),(641,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDYW5kaWRhdGVVc2VyIn1dLCJzdWIiOiJhaGVtZGJ1dHRAZ21haWwuY29tIiwidXNlcklkIjoxMywiaWF0IjoxNjg1Nzk2NjE0LCJleHAiOjE2ODU3OTgwNTR9.j6YIkSB56RTe0t2A6JrSb_Igb-Mvap5eUgwcFvXcr3o','BEARER',13),(642,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDYW5kaWRhdGVVc2VyIn1dLCJzdWIiOiJhaGVtZGJ1dHRAZ21haWwuY29tIiwidXNlcklkIjoxMywiaWF0IjoxNjg1ODIwNjE5LCJleHAiOjE2ODU4MjQyMTl9.wg8UTFJMq9T0XPR8V1ZuoI6UrFrt5cp_RuTONPdQogQ','BEARER',13),(645,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDYW5kaWRhdGVVc2VyIn1dLCJzdWIiOiJhaGVtZGJ1dHRAZ21haWwuY29tIiwidXNlcklkIjoxMywiaWF0IjoxNjg1ODIwNjIwLCJleHAiOjE2ODU4MjQyMjB9.rSxEYNIangWSQW8C3Mj4czF1KbHH15TRIrP1EGNe4yI','BEARER',13),(646,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDb21wYW55VXNlciJ9XSwic3ViIjoiaGFtemFAZ21haWwuY29tIiwidXNlcklkIjo0NTcsImlhdCI6MTY4NTgyMTE4NSwiZXhwIjoxNjg1ODI0Nzg1fQ.J_AkJOpJc4kVh8e78wMDAku_-QTemD2vNMmzFuFb_ck','BEARER',457),(648,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDb21wYW55VXNlciJ9XSwic3ViIjoiaGFtemFAZ21haWwuY29tIiwidXNlcklkIjo0NTcsImlhdCI6MTY4NTgyMTE4NywiZXhwIjoxNjg1ODI0Nzg3fQ.JZBDSWaKCX2y_wiGMT2ewEvmlOyQVN1EFCBpdcowBWk','BEARER',457),(649,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDYW5kaWRhdGVVc2VyIn1dLCJzdWIiOiJlaHNhbkBnbWFpbC5jb20iLCJ1c2VySWQiOjQ0NiwiaWF0IjoxNjg1ODIxMzMxLCJleHAiOjE2ODU4MjQ5MzF9.3zolzMePMV8Rq9Ik-lPUzIeUJeYB94P8Uwyprs3BACs','BEARER',446),(650,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDYW5kaWRhdGVVc2VyIn1dLCJzdWIiOiJlaHNhbkBnbWFpbC5jb20iLCJ1c2VySWQiOjQ0NiwiaWF0IjoxNjg1ODIxMzQ4LCJleHAiOjE2ODU4MjQ5NDh9.lBG-LAbZVGrFgdns-vOK72KbWMzmxUHM8LQQRrBBiPA','BEARER',446),(651,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDb21wYW55VXNlciJ9XSwic3ViIjoiaGFtemFAZ21haWwuY29tIiwidXNlcklkIjo0NTcsImlhdCI6MTY4NTgyMTQ0NCwiZXhwIjoxNjg1ODI1MDQ0fQ.ZAtYHYbnQn9G2alqx-SaJcCuJtANKPgc12-3hSdi9mE','BEARER',457),(652,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDb21wYW55VXNlciJ9XSwic3ViIjoiaGFtemFAZ21haWwuY29tIiwidXNlcklkIjo0NTcsImlhdCI6MTY4NTgyMTQ0NSwiZXhwIjoxNjg1ODI1MDQ1fQ.xBF61BQVTUGZToyPy7oGv531JcaOGEECohmNDvfXJ98','BEARER',457),(653,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDb21wYW55VXNlciJ9XSwic3ViIjoiaGFtemFAZ21haWwuY29tIiwidXNlcklkIjo0NTcsImlhdCI6MTY4NTgyMTQ0OCwiZXhwIjoxNjg1ODI1MDQ4fQ.BCZHM2wMYT7a_ZK7vg1Om3wCMFmHCjMDbcrZs5uuneQ','BEARER',457),(655,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDb21wYW55VXNlciJ9XSwic3ViIjoiaGFtemFAZ21haWwuY29tIiwidXNlcklkIjo0NTcsImlhdCI6MTY4NTgyMTQ0OSwiZXhwIjoxNjg1ODI1MDQ5fQ.Fv4Wrr_pRyYbK_WsOkSFHcnHqzMzyw84c0IE9kM2LA8','BEARER',457),(657,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDb21wYW55VXNlciJ9XSwic3ViIjoiaGFtemFAZ21haWwuY29tIiwidXNlcklkIjo0NTcsImlhdCI6MTY4NTgyMTUyOSwiZXhwIjoxNjg1ODI1MTI5fQ.oUUjOQeFncUSuGXIlxPFtu1FmD9URMMMVVN7ii2z5Po','BEARER',457),(658,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDb21wYW55VXNlciJ9XSwic3ViIjoiaGFtemFAZ21haWwuY29tIiwidXNlcklkIjo0NTcsImlhdCI6MTY4NTg1OTM3OSwiZXhwIjoxNjg1ODYyOTc5fQ.3_pEApXmf8K1HmRqN9Fn18Gyux_zgUqZnpEW1Wl6hU8','BEARER',457),(659,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDYW5kaWRhdGVVc2VyIn1dLCJzdWIiOiJlaHNhbkBnbWFpbC5jb20iLCJ1c2VySWQiOjQ0NiwiaWF0IjoxNjg1ODU5NDEwLCJleHAiOjE2ODU4NjMwMTB9.di4sbt2T_6iPKK2YO6iBD42SppWpCe9PTB2zeXLX2FA','BEARER',446),(660,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDYW5kaWRhdGVVc2VyIn1dLCJzdWIiOiJlaHNhbkBnbWFpbC5jb20iLCJ1c2VySWQiOjQ0NiwiaWF0IjoxNjg1ODU5NDIxLCJleHAiOjE2ODU4NjMwMjF9.rvhCzNyZSwHo0sFrf-Vifjfm6J-rIKZCYPAY5f02kHU','BEARER',446),(661,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDb21wYW55VXNlciJ9XSwic3ViIjoiaGFtemFAZ21haWwuY29tIiwidXNlcklkIjo0NTcsImlhdCI6MTY4NTg2MTczOCwiZXhwIjoxNjg1ODY1MzM4fQ.S_R4T5H15b2BPa2UI8qcI8qNQEsWbygmXoXfDwirVYI','BEARER',457),(662,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDb21wYW55VXNlciJ9XSwic3ViIjoiaGFtemFAZ21haWwuY29tIiwidXNlcklkIjo0NTcsImlhdCI6MTY4NTg2MTc1MiwiZXhwIjoxNjg1ODY1MzUyfQ.srY0k6du8nTQ6f630KgRJz84czNFc4PYt5Ug9mKNgiY','BEARER',457),(663,_binary '\0',_binary '\0','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDYW5kaWRhdGVVc2VyIn1dLCJzdWIiOiJlaHNhbkBnbWFpbC5jb20iLCJ1c2VySWQiOjQ0NiwiaWF0IjoxNjg1ODY1NTQ2LCJleHAiOjE2ODU4NjkxNDZ9.UaIMm9uSaqw_aVaC672gvbmVt67lwSKmMAAVvDhlRJQ','BEARER',446),(664,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDb21wYW55VXNlciJ9XSwic3ViIjoiaGFtemFAZ21haWwuY29tIiwidXNlcklkIjo0NTcsImlhdCI6MTY4NTg2NTU3MywiZXhwIjoxNjg1ODY5MTczfQ.wYshT750rKGVqYIMVK9MLA0gPHieXA1RtBCIYChcX-E','BEARER',457),(665,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDb21wYW55VXNlciJ9XSwic3ViIjoiaGFtemFAZ21haWwuY29tIiwidXNlcklkIjo0NTcsImlhdCI6MTY4NTg2NTU4OSwiZXhwIjoxNjg1ODY5MTg5fQ.Gb4Fg9Wk7BDQm5XBTYIQ7FSNYiCfrire4FXnFlauYck','BEARER',457),(666,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDYW5kaWRhdGVVc2VyIn1dLCJzdWIiOiJhaGVtZGJ1dHRAZ21haWwuY29tIiwidXNlcklkIjoxMywiaWF0IjoxNjg1ODcwNzcxLCJleHAiOjE2ODU4NzQzNzF9.6MJem_dqldwwlZPajLWctzj4QcnhY4U-ZLFAwmhbiTs','BEARER',13),(667,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDYW5kaWRhdGVVc2VyIn1dLCJzdWIiOiJhaGVtZGJ1dHRAZ21haWwuY29tIiwidXNlcklkIjoxMywiaWF0IjoxNjg1ODcwNzgxLCJleHAiOjE2ODU4NzQzODF9.bGu2BaS4XLjo0diCquuT_7El_F0wcIRiqMgL4zLVjZA','BEARER',13),(668,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDb21wYW55VXNlciJ9XSwic3ViIjoiaGFtemFAZ21haWwuY29tIiwidXNlcklkIjo0NTcsImlhdCI6MTY4NTg3MTA3OCwiZXhwIjoxNjg1ODc0Njc4fQ.-mUdKCSg5emnqyjbb2oquD1Dxo-Taq5Z6OuY_5LqWxA','BEARER',457),(669,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDb21wYW55VXNlciJ9XSwic3ViIjoiaGFtemFAZ21haWwuY29tIiwidXNlcklkIjo0NTcsImlhdCI6MTY4NTg3MTA3OSwiZXhwIjoxNjg1ODc0Njc5fQ.nZB6LyHH79Wl2nr1cBhdrMv-J8YeHi3TrCSqCSIZ34Y','BEARER',457),(670,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDb21wYW55VXNlciJ9XSwic3ViIjoiaGFtemFAZ21haWwuY29tIiwidXNlcklkIjo0NTcsImlhdCI6MTY4NTg3MzczMCwiZXhwIjoxNjg1ODc3MzMwfQ.sk9mB5DtC17mN7ZGKDHoyGXNN9Lg6sCdWPV87L8tL_Y','BEARER',457),(671,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDYW5kaWRhdGVVc2VyIn1dLCJzdWIiOiJhaGVtZGJ1dHRAZ21haWwuY29tIiwidXNlcklkIjoxMywiaWF0IjoxNjg1ODc4NzY4LCJleHAiOjE2ODU4ODIzNjh9.A8aLqRIX-TsSMF5rMGrQU5oXslpzAiAE_oBiohJyQi0','BEARER',13),(672,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDYW5kaWRhdGVVc2VyIn1dLCJzdWIiOiJhaGVtZGJ1dHRAZ21haWwuY29tIiwidXNlcklkIjoxMywiaWF0IjoxNjg1ODc4Nzg0LCJleHAiOjE2ODU4ODIzODR9.-v7Gh_2MO7xZiKeVx-dFKc4BAqAtW7GI7RJB-D97mIo','BEARER',13),(673,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDYW5kaWRhdGVVc2VyIn1dLCJzdWIiOiJhaGVtZGJ1dHRAZ21haWwuY29tIiwidXNlcklkIjoxMywiaWF0IjoxNjg1ODc5ODYxLCJleHAiOjE2ODU4ODM0NjF9.WBIZhsdhmQcxm_CMCTIeK_YoX8z5smtpG-I8iBjPp3s','BEARER',13),(675,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDYW5kaWRhdGVVc2VyIn1dLCJzdWIiOiJhaGVtZGJ1dHRAZ21haWwuY29tIiwidXNlcklkIjoxMywiaWF0IjoxNjg1ODc5ODczLCJleHAiOjE2ODU4ODM0NzN9.ingMjEoK8FZXC-VSAGiRmjeptL4QPhOFE7MKAiS_HBA','BEARER',13),(676,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDYW5kaWRhdGVVc2VyIn1dLCJzdWIiOiJhaGVtZGJ1dHRAZ21haWwuY29tIiwidXNlcklkIjoxMywiaWF0IjoxNjg1ODgwMzUyLCJleHAiOjE2ODU4ODM5NTJ9.Ye6KKZOLzPtCaDwIZVwLzjupTSA_z9MAYyEO2V33I8s','BEARER',13),(677,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDYW5kaWRhdGVVc2VyIn1dLCJzdWIiOiJhaGVtZGJ1dHRAZ21haWwuY29tIiwidXNlcklkIjoxMywiaWF0IjoxNjg1ODgxMDA2LCJleHAiOjE2ODU4ODQ2MDZ9.7nNLWEKGhWYk3hD9lXlYpCND7xlrBDgrBlvgMtARPFc','BEARER',13),(678,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDb21wYW55VXNlciJ9XSwic3ViIjoiaGFtemFAZ21haWwuY29tIiwidXNlcklkIjo0NTcsImlhdCI6MTY4NTg4MTYyMywiZXhwIjoxNjg1ODg1MjIzfQ.5Y-DlGUQaVb-idWgVK3mP4xPHNVsaMoR6JmRcGf-akA','BEARER',457),(679,_binary '\0',_binary '\0','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDb21wYW55VXNlciJ9XSwic3ViIjoiaGFtemFAZ21haWwuY29tIiwidXNlcklkIjo0NTcsImlhdCI6MTY4NTg4MTYzNSwiZXhwIjoxNjg1ODg1MjM1fQ.0VuUqtEjH4tRi_kTRPyIuk13Q9JEO3eiG5lbKBk9XfY','BEARER',457),(680,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDYW5kaWRhdGVVc2VyIn1dLCJzdWIiOiJhaGVtZGJ1dHRAZ21haWwuY29tIiwidXNlcklkIjoxMywiaWF0IjoxNjg1ODgzMDI2LCJleHAiOjE2ODU4ODY2MjZ9.2m7uqNUWXd9X_L4xE_C-B5_kxmnKb_qUVZBXtUCtslE','BEARER',13),(681,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDYW5kaWRhdGVVc2VyIn1dLCJzdWIiOiJhaGVtZGJ1dHRAZ21haWwuY29tIiwidXNlcklkIjoxMywiaWF0IjoxNjg1ODgzMDM4LCJleHAiOjE2ODU4ODY2Mzh9.YDiFLStv96pmzAzCwiPletD-U6G0qjnfXf8cNJTTz-A','BEARER',13),(684,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDYW5kaWRhdGVVc2VyIn1dLCJzdWIiOiJhaGVtZGJ1dHRAZ21haWwuY29tIiwidXNlcklkIjoxMywiaWF0IjoxNjg1ODg1MjA1LCJleHAiOjE2ODU4ODg4MDV9.otE4cYhIzX202S_j7YOb4GRrAsm28H5bFyzQ513HshI','BEARER',13),(686,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDb21wYW55VXNlciJ9XSwic3ViIjoiYWRtaW5AZ21haWwuY29tIiwidXNlcklkIjo2ODUsImlhdCI6MTY4NTg4NjEyMiwiZXhwIjoxNjg1ODg5NzIyfQ.WYhgmYbKrVr8lUDEBvHfFuaNFf9xX5WPLT9F2nzeahI','BEARER',685),(687,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDYW5kaWRhdGVVc2VyIn1dLCJzdWIiOiJhaGVtZGJ1dHRAZ21haWwuY29tIiwidXNlcklkIjoxMywiaWF0IjoxNjg1ODg2MTgyLCJleHAiOjE2ODU4ODk3ODJ9.MuXpxL2FXDAkI9HLi6OcffkORk4sVXnIyBLE2tf9Itg','BEARER',13),(688,_binary '\0',_binary '\0','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJDYW5kaWRhdGVVc2VyIn1dLCJzdWIiOiJhaGVtZGJ1dHRAZ21haWwuY29tIiwidXNlcklkIjoxMywiaWF0IjoxNjg1ODg2MTk5LCJleHAiOjE2ODU4ODk3OTl9.EO1QerWJVszI8RSp1tITVqij_0XGF9YuVch6oZovWiA','BEARER',13),(689,_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJBZG1pbiJ9XSwic3ViIjoiYWRtaW5AZ21haWwuY29tIiwidXNlcklkIjo2ODUsImlhdCI6MTY4NTg4NzI5MSwiZXhwIjoxNjg1ODkwODkxfQ.pdZx47K81oEpCcKfe8DrmuWFpjUe4_9GgxLElqyKLZY','BEARER',685),(690,_binary '\0',_binary '\0','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJBZG1pbiJ9XSwic3ViIjoiYWRtaW5AZ21haWwuY29tIiwidXNlcklkIjo2ODUsImlhdCI6MTY4NTg4NzI5NCwiZXhwIjoxNjg1ODkwODk0fQ.MBK0-vWV0LWD1A4bKHRHYf99WPZmZaSSpsbr_yXtD0M','BEARER',685);
/*!40000 ALTER TABLE `token_entity` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_entity`
--

DROP TABLE IF EXISTS `user_entity`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_entity` (
  `id` int NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_entity`
--

LOCK TABLES `user_entity` WRITE;
/*!40000 ALTER TABLE `user_entity` DISABLE KEYS */;
INSERT INTO `user_entity` VALUES (13,'ahemdbutt@gmail.com','Ahmed','butt','$2a$10$7gm0V.u9fSTVpVMRfD0ufOpfVEocIBGW41Mcy74aeVMRXyURiIj6m','CandidateUser'),(446,'ehsan@gmail.com','Muhammad','Ehsan','$2a$10$W.nXZj8uE4qs7N9Bdw4Touh1och9d56i.iufY0qJNQEEJq34p5jvi','CandidateUser'),(457,'hamza@gmail.com','ali','hamza','$2a$10$cF10lkI.cc9Yct2xGeZYbOk0L6YU7iGE9wGCxYKZ79nVjsJHCJcae','CompanyUser'),(685,'admin@gmail.com','admin','admin','$2a$10$LG/YdUmkOEJYv/YdNopNROuLVEglL.Xyz2EhaoDRoFUTwJKK5xFYS','Admin');
/*!40000 ALTER TABLE `user_entity` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-04 19:08:31
