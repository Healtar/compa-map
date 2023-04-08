-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : sam. 08 avr. 2023 à 22:11
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
) ENGINE=MyISAM AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb3;

--
-- Déchargement des données de la table `t_companies`
--

INSERT INTO `t_companies` (`id_company`, `name`, `description`, `phone`, `mail`, `website`, `country`, `city`, `postal_code`, `street`, `longitude`, `latitude`) VALUES
(1, 'Lidl', 'Magasins de produits gastronomiques de luxe', '+33625469874', 'lidl@lidl.fr', 'https://www.lidl.fr/', 'France', 'Besançon', 25000, '6 rue Xavier Marmier', 6.008029573150408, 47.24204623335334),
(18, 'Action', 'Bienvenue chez Action. Notre magasin dispose d\'un vaste choix d\'articles d\'intérieur et de décoration, de fournitures de bureau, d\'outils, d\'accessoires, de produits de beauté et même de vêtements. Laissez-vous surprendre chaque semaine par 150 nouveaux produits. Tous nos articles sont commercialisés à des prix abordables.', '+3312345689', 'action@gmail.com', 'https://www.action.com/', 'France', 'Besançon', 25000, '2 Pl. du Maréchal Leclerc', 6.0137066154475125, 47.241932960797705),
(19, 'Data music Besançon', 'Depuis plus de 30 ans que nous sommes spécialisés dans la vente d\'instruments de musique et la location. Nous avons un grand choix d\'instruments allant du plus abordable au haut de gamme, des dernières avancées technologiques aux produits vintage. Nous sommes des professionnels de la musique.', '+33123456789', 'datamusic@gmail.com', 'http://www.datamusic.fr/', 'France', 'Besançon', 25000, '1 Pl. de Montrapon', 6.012395995253266, 47.24421142318952);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
