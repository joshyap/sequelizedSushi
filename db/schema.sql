create database sushi_db;
use sushi_db;

create table sushi (
  id integer(11) auto_increment not null,
  sushi_name varchar(100),
  devoured boolean DEFAULT NULL,
  `date` timestamp,
  primary key(id)
);
