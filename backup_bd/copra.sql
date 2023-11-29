-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 28-11-2023 a las 23:24:20
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `copra`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `practicas`
--

CREATE TABLE `practicas` (
  `id_practica` int(11) NOT NULL,
  `titulo` varchar(50) NOT NULL,
  `nombre_empresa` varchar(100) NOT NULL,
  `ubicacion` varchar(100) NOT NULL,
  `descripcion` varchar(500) NOT NULL,
  `categoria` varchar(50) NOT NULL,
  `imagen` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `practicas`
--

INSERT INTO `practicas` (`id_practica`, `titulo`, `nombre_empresa`, `ubicacion`, `descripcion`, `categoria`, `imagen`) VALUES
(30, 'ejemplo de practica', 'CCU', 'San Fernando', 'ejemplo de descripcion', 'practica', 'https://upload.wikimedia.org/wikipedia/commons/1/19/CCU_LOGO.png'),
(40, 'ejemplo part time', 'Walmart', 'Longavi', 'ejemplo de descripcion', 'part-time', 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Walmart_Chile_Logo_1.svg/1020px-Walmart_Chile_Logo_1.svg.png'),
(50, 'ejemplo full time', 'Codelco', 'Antofagasta', 'ejemplo de descripcion', 'full-time', 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Codelco_logo.svg/75px-Codelco_logo.svg.png'),
(60, 'ejemplo de practica', 'IBM', 'Antofagasta', 'ejemplo de descripcion', 'practica', 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/1200px-IBM_logo.svg.png'),
(70, 'ejemplo full time', 'Microsoft', 'Santiago', 'ejemplo de descripcion', 'full-time', 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/768px-Microsoft_logo_%282012%29.svg.png'),
(80, 'ejemplo part time', 'Banco de chile', 'Santiago', 'ejemplo de descripcion', 'full-time', 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b3/Banco_de_Chile_logo.svg/725px-Banco_de_Chile_logo.svg.png?20180321211128'),
(90, 'ejemplo de practica', 'Cencosud', 'Rancagua', 'ejemplo de descripcion', 'practica', 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Cencosud_logo.svg/300px-Cencosud_logo.svg.png'),
(100, 'ejemplo part time', 'Accenture', 'Santiago', 'ejemplo de descripcion', 'practica', 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Accenture.svg/768px-Accenture.svg.png');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `tipo_usuario` char(1) NOT NULL DEFAULT 'P',
  `email` varchar(50) NOT NULL,
  `password` varchar(32) NOT NULL,
  `nombre` varchar(150) NOT NULL,
  `descripcion` longtext NOT NULL,
  `area_trabajo` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`tipo_usuario`, `email`, `password`, `nombre`, `descripcion`, `area_trabajo`) VALUES
('P', 'joseurbina0208@gmail.com', '827ccb0eea8a706c4c34a16891f84e7b', 'José Urbina', 'Estudiante de ingeniería de ejecución en informática', 'Informática'),
('P', 'maria@gmail.com', '01cfcd4f6b8770febfb40cb906715822', 'Maria Gonzalez', 'Desarrolladora de software', 'Tecnología'),
('E', 'empresa@ejemplo.com', 'caff2749f2833128ee2d3fe5a61f8109', 'Empresa XYZ', 'Empresa de desarrollo de software', 'Tecnología'),
('P', 'carlos@hotmail.com', 'b993062e77a98231f705119c2a219380', 'Carlos Rodríguez', 'Estudiante de medicina', 'Salud'),
('P', 'sara@gmail.com', 'd4bf745d79c1673e822bc6d30dc61b88', 'Sara Pérez', 'Diseñadora gráfica', 'Diseño'),
('E', 'compania@xyz.com', '9a7330f0f3239ae6068ef434ed484c9b', 'Compañía ABC', 'Empresa de consultoría', 'Consultoría'),
('P', 'ana@ejemplo.com', '8ffdd9323147afa3ee6307fd90f555d9', 'Ana García', 'Ingeniera civil', 'Ingeniería'),
('E', 'tecnosoluciones@empresa.com', '7e29e8acbdae72f3af3e65e6f2399418', 'TecnoSoluciones', 'Empresa de soluciones tecnológicas', 'Tecnología'),
('P', 'juan@gmail.com', '5b69adb1af1fe70ab1ef0954127f5e07', 'Juan Pérez', 'Analista financiero', 'Finanzas'),
('E', 'ingenieros@empresa.com', 'd1d58664faa244c3db7fe02fd61071ca', 'Ingenieros S.A.', 'Empresa de ingeniería', 'Ingeniería');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `practicas`
--
ALTER TABLE `practicas`
  ADD PRIMARY KEY (`id_practica`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
