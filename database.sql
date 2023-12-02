-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Creato il: Dic 02, 2023 alle 22:12
-- Versione del server: 10.4.28-MariaDB
-- Versione PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `posts`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `posts`
--

CREATE TABLE `posts` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `body` varchar(255) NOT NULL,
  `user` int(11) NOT NULL,
  `created` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `posts`
--

INSERT INTO `posts` (`id`, `title`, `body`, `user`, `created`) VALUES
(2, 'Test3222', 'Sono un esempio di bod2222y', 15, '2023-11-18 21:20:29'),
(3, 'TestLogged', 'Sono un esempio di bod2222y', 15, '2023-11-18 22:04:01');

-- --------------------------------------------------------

--
-- Struttura della tabella `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`) VALUES
(1, 'Sergio', 'sergio@test.it', '$2a$12$rdxIJTABIwOq4cnjj0D1R.CWiyMfDfzHwR3lMZ1quTGpon1iXV126'),
(2, 'sergiolino', 'sergio@trr.it', '$2a$12$A9WDvK6DVrfkyOHrvCQDvOGstGDJZ6o6hVYNwPwN0Yx2oYy3KVEze'),
(3, 'sergio2', 'sergio2@io.it', '$2a$12$2cPFYZiT9CL/7SInVMPQne9oMXZLCgulAaAtEeNS2KUCxiyEBBzay'),
(4, 'sergio3', 'sergio3@io.it', '$2a$12$83IMEHyUl8uShqo5YGPx6ul6xn7Wgy3wjD6DJwObXv/gn6cynZvwu'),
(5, 'sergio4', 'sergio4@io.it', '$2a$12$0oZTM12q94DtDhvQCNTaHOMJMjkRVyoJAb9fVAoDhw9F5MhpdR3Lu');

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- Indici per le tabelle `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT per le tabelle scaricate
--

--
-- AUTO_INCREMENT per la tabella `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT per la tabella `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
