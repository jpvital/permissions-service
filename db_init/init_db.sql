CREATE USER 'root'@'%' IDENTIFIED BY '';
GRANT ALL ON *.* TO 'root'@'%';
CREATE DATABASE IF NOT EXISTS permissions;

DROP TABLE IF EXISTS `role`;

CREATE TABLE `role` (
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `avatar` varchar(255) NOT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `user_role` (
  `userUsername` varchar(255) NOT NULL,
  `roleName` varchar(255) NOT NULL,
  PRIMARY KEY (`userUsername`,`roleName`),
  KEY `IDX_0a46637fdeb8fdc74a6c702c6c` (`userUsername`),
  KEY `IDX_d0de24b67e93878c5beb80a24c` (`roleName`),
  CONSTRAINT `FK_0a46637fdeb8fdc74a6c702c6ce` FOREIGN KEY (`userUsername`) REFERENCES `user` (`username`) ON DELETE CASCADE ON UPDATE NO ACTION,
  CONSTRAINT `FK_d0de24b67e93878c5beb80a24ce` FOREIGN KEY (`roleName`) REFERENCES `role` (`name`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;