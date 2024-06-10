\q
psql -d eventdb -U postgres

create table event(id varchar(30) primary key,
				   name varchar(50) not null ,
				   location varchar(100) not null,
				   participants int not null,
				  availability int not null
				  );	
				  
INSERT INTO event (id, name, location, participants, availability) VALUES
('e1', 'Tech Conference', 'Block A, First Floor', 22, 10),
('e2', 'Cultural Fest', 'Block B, Second Floor', 20, 5),
('e3', 'Science Fair', 'Block C, Ground Floor', 18, 0),
('e4', 'Art Exhibition', 'Block D, Third Floor', 15, 7),
('e5', 'Music Concert', 'Block E, First Floor', 22, 22);


				  
create table participants(pid uuid primary key default gen_random_uuid(), 
						  name varchar(30) , 
						  email varchar(50) not null , 
						  eventid varchar(30),
						  foreign key(eventid) references event(id)
						 );

select * from participants;

drop table participants;
truncate table participants;