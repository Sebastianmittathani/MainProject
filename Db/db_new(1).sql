-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 04, 2024 at 01:14 PM
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
-- Table structure for table `tbl_assignduty`
--

CREATE TABLE `tbl_assignduty` (
  `assignduty_id` int(11) NOT NULL,
  `prisioner_id` int(11) NOT NULL,
  `jail_id` int(11) NOT NULL,
  `assignduty_date` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_booking`
--

CREATE TABLE `tbl_booking` (
  `booking_id` int(11) NOT NULL,
  `shop_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `booking_qty` int(11) NOT NULL,
  `booking_curdate` date NOT NULL,
  `booking_foredate` date NOT NULL,
  `booking_amount` int(11) NOT NULL,
  `booking_status` int(11) NOT NULL,
  `clear_status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_booking`
--

INSERT INTO `tbl_booking` (`booking_id`, `shop_id`, `product_id`, `booking_qty`, `booking_curdate`, `booking_foredate`, `booking_amount`, `booking_status`, `clear_status`) VALUES
(18, 5, 12, 1, '0000-00-00', '0000-00-00', 3, 2, 1),
(19, 5, 12, 10, '0000-00-00', '0000-00-00', 30, 3, 1);

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
(3, 'juteee'),
(29, 'rice');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_complaint`
--

CREATE TABLE `tbl_complaint` (
  `complaint_id` int(11) NOT NULL,
  `shop_id` int(11) NOT NULL,
  `booking_id` int(11) NOT NULL,
  `complaint_title` varchar(50) NOT NULL,
  `complaint_details` varchar(50) NOT NULL,
  `complaint_reply` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_complaint`
--

INSERT INTO `tbl_complaint` (`complaint_id`, `shop_id`, `booking_id`, `complaint_title`, `complaint_details`, `complaint_reply`) VALUES
(1, 5, 9, 'q', 'q', 'dghdgjhdg'),
(2, 5, 10, 'e', 'e', ''),
(3, 0, 0, '', '', ''),
(5, 0, 0, '', '', 'ok'),
(6, 5, 9, 'bad', 'bad', ''),
(8, 5, 9, 's', 's', ''),
(10, 5, 19, 'bad', 'bad', 'ok'),
(11, 5, 19, 'asaf', 'dfs', '');

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
(32, 'idukki'),
(34, 'hh');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_feedback`
--

CREATE TABLE `tbl_feedback` (
  `feedback_id` int(11) NOT NULL,
  `feedback_title` varchar(60) NOT NULL,
  `feedback_details` varchar(60) NOT NULL,
  `shop_id` int(11) NOT NULL,
  `booking_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_feedback`
--

INSERT INTO `tbl_feedback` (`feedback_id`, `feedback_title`, `feedback_details`, `shop_id`, `booking_id`) VALUES
(1, 'kk', 'good', 5, 0),
(3, 's', 's', 5, 19);

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
(2, 22, 'jail', 2147483647, 'pure', 'jail@gmail.com', 'jail1', '654321'),
(4, 0, '', 0, '', '', '', ''),
(5, 21, 'jvbj', 0, '', '', '', ''),
(6, 32, 'jail3', 88, 'ddhgv', 'jail3@gmail.com', 'sbj', '1234567');

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
(12, 1, 2, 'bread', 'sdv', 'd', 3),
(15, 1, 2, 'parotta', 'sc', 'asc', 0),
(17, 3, 2, 'dress', 'dvs', 'sf', 0),
(18, 3, 2, 'vs', 'dvs', 'xv', 76),
(19, 29, 2, 'dfs', 'xdvs', 'vsv', 43),
(20, 29, 2, 'xfv', 'xv', 'cv', 23);

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
  `shop_logo` varchar(300) NOT NULL,
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
(14, 32, 'rajas', 12345, 'asdgg', 'as@gmail.com', 'http://127.0.0.1:5000/images/WIN_2', 'kbh', 'jh', 'j', '123456', 'open'),
(15, 32, 'ovenfresh', 2147483647, 'vazhakulam', 'ovenfresh@gmail.com', 'http://127.0.0.1:5000/images/WIN_2', 'sss', 'sss', 'sss', '1234', 'open'),
(16, 32, 'open', 2147483647, 'vazhakulam', 'pulimala@gmail.com', 'http://127.0.0.1:5000/images/WIN_20240111_09_33_16_Pro.jpg', 'adipoli', 'shaji', 'shaji@123', '654321', 'close');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_admin`
--
ALTER TABLE `tbl_admin`
  ADD PRIMARY KEY (`admin_id`);

--
-- Indexes for table `tbl_assignduty`
--
ALTER TABLE `tbl_assignduty`
  ADD PRIMARY KEY (`assignduty_id`);

--
-- Indexes for table `tbl_booking`
--
ALTER TABLE `tbl_booking`
  ADD PRIMARY KEY (`booking_id`);

--
-- Indexes for table `tbl_category`
--
ALTER TABLE `tbl_category`
  ADD PRIMARY KEY (`category_id`);

--
-- Indexes for table `tbl_complaint`
--
ALTER TABLE `tbl_complaint`
  ADD PRIMARY KEY (`complaint_id`);

--
-- Indexes for table `tbl_district`
--
ALTER TABLE `tbl_district`
  ADD PRIMARY KEY (`district_id`);

--
-- Indexes for table `tbl_feedback`
--
ALTER TABLE `tbl_feedback`
  ADD PRIMARY KEY (`feedback_id`);

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
-- AUTO_INCREMENT for table `tbl_assignduty`
--
ALTER TABLE `tbl_assignduty`
  MODIFY `assignduty_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_booking`
--
ALTER TABLE `tbl_booking`
  MODIFY `booking_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `tbl_category`
--
ALTER TABLE `tbl_category`
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `tbl_complaint`
--
ALTER TABLE `tbl_complaint`
  MODIFY `complaint_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `tbl_district`
--
ALTER TABLE `tbl_district`
  MODIFY `district_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT for table `tbl_feedback`
--
ALTER TABLE `tbl_feedback`
  MODIFY `feedback_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `tbl_jail`
--
ALTER TABLE `tbl_jail`
  MODIFY `jail_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

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
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `tbl_shop`
--
ALTER TABLE `tbl_shop`
  MODIFY `shop_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
