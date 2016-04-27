-- phpMyAdmin SQL Dump
-- version 4.2.7.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 27 Apr 2016 pada 09.11
-- Versi Server: 5.6.20
-- PHP Version: 5.5.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `my_products`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `categories`
--

CREATE TABLE IF NOT EXISTS `categories` (
`id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `id_parent` int(11) DEFAULT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=7 ;

--
-- Dumping data untuk tabel `categories`
--

INSERT INTO `categories` (`id`, `name`, `id_parent`) VALUES
(1, 'Baju', NULL),
(2, 'Sepatu', NULL),
(3, 'Baju Wanita', 1),
(4, 'Baju Pria', 1),
(5, 'Sepatu Pria', 2),
(6, 'Sepatu Wanita', 2);

-- --------------------------------------------------------

--
-- Struktur dari tabel `products`
--

CREATE TABLE IF NOT EXISTS `products` (
`id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `image` varchar(200) NOT NULL DEFAULT 'no_image.jpg',
  `id_category` int(11) NOT NULL,
  `size` varchar(50) DEFAULT NULL,
  `color` varchar(50) DEFAULT NULL,
  `prize` int(20) NOT NULL,
  `description` text,
  `create_at` datetime DEFAULT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=15 ;

--
-- Dumping data untuk tabel `products`
--

INSERT INTO `products` (`id`, `name`, `image`, `id_category`, `size`, `color`, `prize`, `description`, `create_at`) VALUES
(1, 'Baju Batik Pria', 'no_image.jpg', 4, 'Allsize', 'Coklat, Emas', 100000, 'Baju batik yang cocok untuk segala macam acara', '2016-04-26 08:00:00'),
(13, 'Baju Cibitus Berkerah', 'no_image.jpg', 4, 'M', 'Biru, Merah', 150000, 'Baju Cibitus cocok dipakai semua umur', '2016-04-26 00:00:00'),
(14, 'Daster Belang', 'no_image.jpg', 3, 'XL', 'hitam, putih', 200000, 'Daster yang bagus untuk bergaya', '2016-04-27 00:00:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
 ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=15;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
