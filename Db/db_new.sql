-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 01, 2024 at 10:55 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_new`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_admin`
--

CREATE TABLE `tbl_admin` (
  `admin_id` int(11) NOT NULL,
  `admin_name` varchar(50) NOT NULL,
  `admin_email` varchar(50) NOT NULL,
  `admin_password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_admin`
--

INSERT INTO `tbl_admin` (`admin_id`, `admin_name`, `admin_email`, `admin_password`) VALUES
(1, 'admin', 'admin@gmail.com', 'admin123');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_category`
--

CREATE TABLE `tbl_category` (
  `category_id` int(11) NOT NULL,
  `category_name` varchar(35) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_category`
--

INSERT INTO `tbl_category` (`category_id`, `category_name`) VALUES
(1, 'wheate'),
(3, 'juteee');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_district`
--

CREATE TABLE `tbl_district` (
  `district_id` int(11) NOT NULL,
  `district_name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_district`
--

INSERT INTO `tbl_district` (`district_id`, `district_name`) VALUES
(21, 'kollam'),
(22, 'kannur'),
(29, 'jfghjhjfg'),
(32, 'idukki');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_jail`
--

CREATE TABLE `tbl_jail` (
  `jail_id` int(11) NOT NULL,
  `district_id` int(11) NOT NULL,
  `jail_name` varchar(50) NOT NULL,
  `jail_contact` int(11) NOT NULL,
  `jail_address` varchar(50) NOT NULL,
  `jail_email` varchar(50) NOT NULL,
  `jail_username` varchar(50) NOT NULL,
  `jail_password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_jail`
--

INSERT INTO `tbl_jail` (`jail_id`, `district_id`, `jail_name`, `jail_contact`, `jail_address`, `jail_email`, `jail_username`, `jail_password`) VALUES
(1, 22, 'idukki', 2147483647, 'fwfwgg', 'dfgddbhdhd', 'kshvshg', 'fsfdsfs'),
(2, 22, 'poli', 2147483647, 'fwfwgg', 'jail@gmail.com', 'kshvshg', '123456'),
(4, 0, '', 0, '', '', '', ''),
(5, 21, 'jvbj', 0, '', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_place`
--

CREATE TABLE `tbl_place` (
  `place_id` int(11) NOT NULL,
  `district_id` int(11) NOT NULL,
  `place_name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_place`
--

INSERT INTO `tbl_place` (`place_id`, `district_id`, `place_name`) VALUES
(7, 23, 'thodupuzha'),
(19, 22, 'arikuzhatfcvgyb'),
(32, 21, 'Pala'),
(33, 21, 'SD'),
(35, 32, 'arikuzka'),
(36, 32, 'tpa');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_prisioner`
--

CREATE TABLE `tbl_prisioner` (
  `prisioner_id` int(11) NOT NULL,
  `jail_id` int(11) NOT NULL,
  `prisioner_name` varchar(50) NOT NULL,
  `prisioner_gender` varchar(50) NOT NULL,
  `prisioner_address` varchar(50) NOT NULL,
  `prisioner_contact` int(11) NOT NULL,
  `prisioner_email` varchar(50) NOT NULL,
  `prisioner_photo` varchar(50) NOT NULL,
  `prisioner_code` int(11) NOT NULL,
  `prisioner_crimedetails` varchar(50) NOT NULL,
  `prisioner_duration` varchar(50) NOT NULL,
  `prisioner_joindate` varchar(50) NOT NULL,
  `prisioner_releasedate` varchar(50) NOT NULL,
  `prisioner_status` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_prisioner`
--

INSERT INTO `tbl_prisioner` (`prisioner_id`, `jail_id`, `prisioner_name`, `prisioner_gender`, `prisioner_address`, `prisioner_contact`, `prisioner_email`, `prisioner_photo`, `prisioner_code`, `prisioner_crimedetails`, `prisioner_duration`, `prisioner_joindate`, `prisioner_releasedate`, `prisioner_status`) VALUES
(1, 0, 'james tomy', 'male', 'mttathuparambil h', 2147483647, 'james@gmail.com', 'whiwhf', 10, 'drug', '1 yr', '3242dfs', '2423tff', 'rewdcd');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_product`
--

CREATE TABLE `tbl_product` (
  `product_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `jail_id` int(11) NOT NULL,
  `product_name` varchar(50) NOT NULL,
  `product_details` varchar(50) NOT NULL,
  `product_photo` varchar(50) NOT NULL,
  `product_rate` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_product`
--

INSERT INTO `tbl_product` (`product_id`, `category_id`, `jail_id`, `product_name`, `product_details`, `product_photo`, `product_rate`) VALUES
(1, 1, 0, 'bread', 'high quality wheat', 'dbhj', 0),
(4, 4, 0, 'cotto', 'high quality cotton', 'dbhj', 0),
(5, 3, 2, 'cotton', 'high quality cotton', 'dbhj', 0),
(6, 3, 2, 'cotton', 'high quality cotton', 'dbhj', 30),
(7, 1, 0, 'bread', 'pure', 'cfs', 34),
(8, 27, 0, 'dfw', 'df', 'fw3', 33);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_shop`
--

CREATE TABLE `tbl_shop` (
  `shop_id` int(11) NOT NULL,
  `place_id` int(11) NOT NULL,
  `shop_name` varchar(50) NOT NULL,
  `shop_contact` int(11) NOT NULL,
  `shop_address` varchar(50) NOT NULL,
  `shop_email` varchar(45) NOT NULL,
  `shop_logo` varchar(34) NOT NULL,
  `shop_licenseproof` varchar(50) NOT NULL,
  `shop_ownername` varchar(30) NOT NULL,
  `shop_username` varchar(50) NOT NULL,
  `shop_password` varchar(50) NOT NULL,
  `shop_status` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_shop`
--

INSERT INTO `tbl_shop` (`shop_id`, `place_id`, `shop_name`, `shop_contact`, `shop_address`, `shop_email`, `shop_logo`, `shop_licenseproof`, `shop_ownername`, `shop_username`, `shop_password`, `shop_status`) VALUES
(5, 7, 'shop2', 1234254, 'kavana', 'shop2@gmail.com', 'dfsaggsheh', 'sgshfsdh', 'robert', 'rbt', '123456', ''),
(6, 0, 'undefined', 0, 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', ''),
(9, 0, 'ayana', 42525, 'sgshbd', 'fbzsdf', 'undefined', 'sfgsg', 'fbgsgfs', 'sgfs', 'sfgs', 'sfg'),
(14, 32, 'rajas', 12345, 'asdgg', 'as@gmail.com', 'http://127.0.0.1:5000/images/WIN_2', 'kbh', 'jh', 'j', '123456', 'open');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_admin`
--
ALTER TABLE `tbl_admin`
  ADD PRIMARY KEY (`admin_id`);

--
-- Indexes for table `tbl_category`
--
ALTER TABLE `tbl_category`
  ADD PRIMARY KEY (`category_id`);

--
-- Indexes for table `tbl_district`
--
ALTER TABLE `tbl_district`
  ADD PRIMARY KEY (`district_id`);

--
-- Indexes for table `tbl_jail`
--
ALTER TABLE `tbl_jail`
  ADD PRIMARY KEY (`jail_id`);

--
-- Indexes for table `tbl_place`
--
ALTER TABLE `tbl_place`
  ADD PRIMARY KEY (`place_id`);

--
-- Indexes for table `tbl_prisioner`
--
ALTER TABLE `tbl_prisioner`
  ADD PRIMARY KEY (`prisioner_id`);

--
-- Indexes for table `tbl_product`
--
ALTER TABLE `tbl_product`
  ADD PRIMARY KEY (`product_id`);

--
-- Indexes for table `tbl_shop`
--
ALTER TABLE `tbl_shop`
  ADD PRIMARY KEY (`shop_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_admin`
--
ALTER TABLE `tbl_admin`
  MODIFY `admin_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tbl_category`
--
ALTER TABLE `tbl_category`
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `tbl_district`
--
ALTER TABLE `tbl_district`
  MODIFY `district_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `tbl_jail`
--
ALTER TABLE `tbl_jail`
  MODIFY `jail_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `tbl_place`
--
ALTER TABLE `tbl_place`
  MODIFY `place_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT for table `tbl_prisioner`
--
ALTER TABLE `tbl_prisioner`
  MODIFY `prisioner_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `tbl_product`
--
ALTER TABLE `tbl_product`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `tbl_shop`
--
ALTER TABLE `tbl_shop`
  MODIFY `shop_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
