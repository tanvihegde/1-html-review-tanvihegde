create database if not exists msisdb;
use msisdb;

DROP TABLE IF EXISTS books;
CREATE TABLE books (
	title varchar(100) ,
    author varchar(50) NOT NULL,
    yearpublished int NOT NULL,
    publisher varchar(50) NOT NULL,
    pagecount int NOT NULL,
    msrp int NOT NULL
);

INSERT INTO books (title, author, yearpublished,publisher,pagecount,msrp) VALUES 
('Harry Potter','JK Rowling',1999,'Blaze Vox Books',199,200),
('To Kill a Mockingbird','Ayn Rand',2003,'Blaze Vox Books',299,100),
('The Lord of the Rings','Robert Ervin Howard',2011,'On Stage',378,330);
