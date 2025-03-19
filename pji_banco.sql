create database MapStory;
use MapStory;

create table usuarios(id int primary key auto_increment, 
usuario varchar(80) not null unique,
senha varchar(80) not null);

create table viagens(id int primary key auto_increment, 
cidade varchar(80) not null,
dia_inicio date, 
dia_fim date,
descricao varchar(10000));

create table usuario_viagem(id_usuario int, id_viagem int,
foreign key (id_usuario) references usuarios(id),
foreign key (id_viagem) references viagens(id),
primary key(id_usuario, id_viagem));

create table rotas(id int primary key auto_increment,
nome varchar(80),
dia date,
hora time,
descricao varchar (10000),
id_viagem int,
foreign key (id_viagem) references viagens(id));

create table pontos(id int primary key auto_increment,
latitude decimal(11, 8) not null,
logitude decimal(11,8) not null,
fui bit,
descricao varchar(10000));

create table rotas_pontos(id_rota int,
id_pontos int,
foreign key (id_rota) references rotas(id),
foreign key (id_pontos) references pontos(id),
primary key(id_rota, id_pontos));

create table imagens(
id int primary key auto_increment,
descricao varchar(5000),
img blob,
id_ponto int,
foreign key (id_ponto) references pontos(id));



