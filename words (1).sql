-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Хост: localhost
-- Время создания: Янв 14 2020 г., 10:55
-- Версия сервера: 10.3.16-MariaDB
-- Версия PHP: 7.3.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `10_09`
--

-- --------------------------------------------------------

--
-- Структура таблицы `words`
--

CREATE TABLE `words` (
  `id` int(11) NOT NULL,
  `img` varchar(255) NOT NULL,
  `tags` varchar(100) NOT NULL,
  `price` int(11) NOT NULL,
  `rating` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `words`
--

INSERT INTO `words` (`id`, `img`, `tags`, `price`, `rating`) VALUES
(1, 'https://images-na.ssl-images-amazon.com/images/I/61-uFOBDLDL.jpg', 'книга', 1000, 5),
(2, 'https://cdn.imgbin.com/10/7/14/imgbin-marker-pen-fudepen-fountain-pen-ballpoint-pen-black-ballpoint-pen-cPwbj23E7dpicGiUbVQdBJc7M.jpg', 'ручка', 200, 4),
(3, 'https://www.ikea.com/ru/ru/images/products/kallax-shelving-unit__0644182_PE702466_S5.JPG?f=s', 'полочка', 50, 10);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `words`
--
ALTER TABLE `words`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `words`
--
ALTER TABLE `words`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
