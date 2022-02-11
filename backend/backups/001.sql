-- Adminer 4.8.1 MySQL 5.5.5-10.6.5-MariaDB-1:10.6.5+maria~focal dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;

DROP TABLE IF EXISTS `books`;
CREATE TABLE `books` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `publisher` varchar(255) NOT NULL,
  `author` varchar(255) NOT NULL,
  `description` varchar(1023) NOT NULL,
  `isbn` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `isbn` (`isbn`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `books` (`id`, `title`, `publisher`, `author`, `description`, `isbn`) VALUES
(1,	'Dune',	'-',	'Frank Herbert',	'Dune is a 1965 epic science fiction novel by American author Frank Herbert, originally published as two separate serials in Analog magazine. It tied with Roger Zelazny\'s This Immortal for the Hugo Award in 1966 and it won the inaugural Nebula Award for Best Novel. It is the first installment of the Dune saga. In 2003, it was described as the world\'s best-selling science fiction novel.',	0),
(2,	'The Hobbit',	'-',	'J. R. R. Tolkien',	'The Hobbit, or There and Back Again is a children\'s fantasy novel by English author J. R. R. Tolkien. It was published in 1937 to wide critical acclaim, being nominated for the Carnegie Medal and awarded a prize from the New York Herald Tribune for best juvenile fiction. The book remains popular and is recognized as a classic in children\'s literature.',	1),
(3,	'Maus: A Survivor\'s Tale: 1. My Father Bleeds History',	'-',	'Art Speigelman',	'The first installment of the Pulitzer Prize-winning graphic novel acclaimed as “the most affecting and successful narrative ever done about the Holocaust” (Wall Street Journal) and “the first masterpiece in comic book history” (The New Yorker).',	2),
(5,	'Maus: A Survivor\'s Tale: 2. And Here My Troubles Began',	'-',	'Art Speigelman',	'Acclaimed as a quiet triumph and a brutally moving work of art, the first volume of Art Spieglman\'s Maus introduced readers to Vladek Spiegleman, a Jewish survivor of Hitler\'s Europe, and his son, a cartoonist trying to come to terms with his father, his father\'s terrifying story, and History itself. Its form, the cartoon (the Nazis are cats, the Jews mice), succeeds perfectly in shocking us out of any lingering sense of familiararity with the events described, approaching, as it does, the unspeakable through the diminutive.',	3),
(6,	'Ray Browns Bass Method',	'-',	'Ray Brown',	'bass',	4);

DROP TABLE IF EXISTS `locations`;
CREATE TABLE `locations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `users` (`id`, `username`, `email`, `password`) VALUES
(1,	'user1',	'user1@gmail.com',	'password');

-- 2022-02-08 13:53:15