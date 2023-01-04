drop database hust;

create database hust;

use hust;

create table accounts(
  id int primary key auto_increment,
  username varchar(255) not null,
  password varchar(255) not null
);

create table users(
  id int primary key auto_increment,
  account_id int not null unique,
  role enum('customer', 'administrator') not null,
  fullname varchar(255) not null,
  birthday datetime
);

create table customers(
  id int primary key auto_increment,
  user_id int not null unique,
  address varchar(255)
);

create table administrators(
  id int primary key auto_increment,
  user_id int not null unique
);

create table products(
  id int primary key auto_increment,
  name varchar(255) not null,
  price varchar(255) not null,
  image_url varchar(255)
);

create table categories(
  id int primary key auto_increment,
  name varchar(255) not null
);

create table collections(
  id int primary key auto_increment,
  name varchar(255) not null,
  created_data datetime default current_timestamp,
  expired_data datetime default current_timestamp
);

create table product_category(
  product_id int not null,
  category_id int not null,
  primary key (product_id, category_id)
);

create table product_collection(
  product_id int not null,
  collection_id int not null,
  primary key (product_id, collection_id)
);

create table orders(
  id int primary key auto_increment,
  user_id int not null,
  shipping_fee int default 0,
  created_date datetime default current_timestamp,
  modified_date datetime on update current_timestamp
);

create table product_order(
  product_id int not null,
  order_id int not null,
  primary key (product_id, order_id)
);

create table invoices(
  id int primary key auto_increment,
  order_id int not null,
  total_amount int not null
);

alter table users add foreign key (account_id) references accounts(id);

alter table customers add foreign key (user_id) references users(id);

alter table administrators add foreign key (user_id) references users(id);

alter table product_category add foreign key (product_id) references products(id);
alter table product_category add foreign key (category_id) references categories(id);

alter table product_collection add foreign key (product_id) references products(id);
alter table product_collection add foreign key (collection_id) references collections(id);

alter table orders add foreign key (user_id) references users(id);

alter table product_order add foreign key (product_id) references products(id);
alter table product_order add foreign key (order_id) references orders(id);

alter table invoices add foreign key (order_id) references orders(id);
