-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : ven. 07 avr. 2023 à 04:51
-- Version du serveur : 8.0.31
-- Version de PHP : 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `compa-map`
--

-- --------------------------------------------------------

--
-- Structure de la table `t_companies`
--

DROP TABLE IF EXISTS `t_companies`;
CREATE TABLE IF NOT EXISTS `t_companies` (
  `id_company` int NOT NULL AUTO_INCREMENT,
  `name` text NOT NULL,
  `description` text NOT NULL,
  `phone` varchar(32) DEFAULT NULL,
  `mail` text NOT NULL,
  `website` text NOT NULL,
  `country` text NOT NULL,
  `city` text NOT NULL,
  `postal_code` int NOT NULL,
  `street` text NOT NULL,
  `longitude` double NOT NULL,
  `latitude` double NOT NULL,
  PRIMARY KEY (`id_company`)
) ENGINE=MyISAM AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb3;

--
-- Déchargement des données de la table `t_companies`
--

INSERT INTO `t_companies` (`id_company`, `name`, `description`, `phone`, `mail`, `website`, `country`, `city`, `postal_code`, `street`, `longitude`, `latitude`) VALUES
(1, 'Lidl', 'Magasins de produits gastronomiques de luxe', '+3360706070607', 'lidl@lidl.fr', 'lidl4ever.com', 'France', 'Besançon', 25000, '6 rue Xavier Marmier', 6.008029573150408, 47.24204623335334),
(2, 'name', 'description', '1564', 'mail@ss.ss', 'website', 'country', 'city', 525, 'street', 1, 1),
(3, 'totoSalsa', 'zffz', '06 07 96 69 42', 'hrhrh@gyjgj.tgjht', 'hdhdhdh.com', 'france', 'Paris', 75000, 'htfhfr', 6.0153222780961, 47.237724514231),
(4, 'sauce', 'fqfqf', '06 07 96 69 42', 'ff@gg.dd', 'hdhdhdh.com', 'france', 'fzfz', 75000, 'ffqfq', 6.0260709212348, 47.245598542027),
(5, 'totoSalsa', 'grg', '06 07 96 69 42', 'ff@gg.dd', 'hdhdhdh.com', 'france', 'Paris', 75000, 'htfhfr', 6.0112667780643, 47.237061007902),
(6, 'sauc', 'dzdz', '14141', 'hrhrh@gyjgj.tgjht', 'jytgjyg.jftjf', 'france', 'Paris', 75000, 'drghdgdg', 6.0202603332292, 47.242387588392),
(7, 'sauce', 'yrj', '14141', 'fsfsf@gjkgkj.bdd', 'jytgjyg.jftjf', 'fjfj', 'Paris', 75000, 'drghdgdg', 6.0221178306879, 47.240027660933),
(8, 'test', 'sfsf', 'fsfs', 'hrhrh@gyjgj.tgjht', 'sfsf', 'sffs', 'sfsf', 0, 'sfsf', 6.0279394828302, 47.241766391072),
(9, 'test', 'kuy', '1111', 'fsfsf@gjkgkj.bdd', 'hdhdhdh.com', 'tjt', 'tjtj', 477, 'utut', 6.0267751523997, 47.242845405754),
(10, 'jty', 'jt', 'jt', 'jt', 'jt', 'jt', 'jt', 0, 'jt', 6.0307533095432, 47.252421752835),
(11, 'sauce', 'kyg', '06 07 96 69 42', 'ff@gg.dd', 'jytgjyg.jftjf', 'france', 'Paris', 2424, 'htfhfr', 6.0118230269497, 47.2537629644),
(12, 'ibis', 'yryr', '06 07 96 69 42', 'ff@gg.dd', 'hdhdhdh.com', 'france', 'Paris', 1424, 'htfhfr', 6.0214360640592, 47.251488716061),
(13, 'dqdqdqd', 'dqdq', '06 07 96 69 42', 'ff@gg.dd', 'hdhdhdh.com', 'france', 'Paris', 0, 'drghdgdg', 6.0254034421717, 47.256815173637),
(14, 'sauce', 'dqdq', '14141', 'hrhrh@gyjgj.tgjht', 'hdhdhdh.com', 'france', 'dq', 444, 'drghdgdgt', 6.0439285657647, 47.264741914571);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
