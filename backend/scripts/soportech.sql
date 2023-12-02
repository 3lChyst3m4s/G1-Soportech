CREATE DATABASE IF NOT EXISTS soportech;

-------------------------------------------- INSERTS -----------------------------------------------------------------------

USE soportech;

INSERT INTO roles (name, description)
VALUES
('Cliente', 'Rol para usuarios que reportan incidencias o solicitudes de servicio'),
('Resolutor', 'Rol para usuarios encargados de resolver incidencias'),
('Supervisor', 'Rol para supervisores que evalúan el desempeño de resolutores');

INSERT INTO typerequests (name, description)
VALUES
('Requerimiento', 'Solicitud de servicio para nuevas funcionalidades o características.'),
('Incidente', 'Reporte de un problema o error en un sistema o servicio.');

INSERT INTO categoryrequests (name, description)
VALUES
('Hardware', 'Problemas o solicitudes relacionadas con componentes físicos de los sistemas.'),
('Software', 'Problemas o solicitudes relacionadas con programas o aplicaciones informáticas.'),
('Conectividad', 'Problemas o solicitudes relacionadas con la conexión a redes o internet.'),
('Ambiente', 'Solicitudes relacionadas con el entorno o configuración de trabajo.');

INSERT INTO connections (typeId, categoryId, quoteTime)
VALUES
(1, 1, '2 days'),    -- Requerimiento, Hardware (2 días)
(1, 2, '7 days'),    -- Requerimiento, Software (7 días)
(1, 3, '1 day'),    -- Requerimiento, Conectividad (1 día)
(1, 4, '1 day'),    -- Requerimiento, Ambiente (1 día)
(2, 1, '20 minutes'), -- Incidente, Hardware (20 minutos)
(2, 2, '20 minutes'), -- Incidente, Software (20 minutos)
(2, 3, '20 minutes'), -- Incidente, Conectividad (20 minutos)
(2, 4, '20 minutes'); -- Incidente, Ambiente (20 minutos))

INSERT INTO staterequests (name, description)
VALUES
('Por Atender', 'La solicitud está en espera de ser asignada a un resolutor.'),
('En Proceso', 'La solicitud se encuentra en proceso de resolución.'),
('Observado', 'La solicitud ha sido observada o necesita atención adicional.');

INSERT INTO conditionrequests (name, description)
VALUES
('Abierto', 'La solicitud está abierta y pendiente de resolución.'),
('Cerrado', 'La solicitud ha sido cerrada y se considera resuelta.'),
('Caducado', 'La solicitud ha caducado o ya no es válida.');