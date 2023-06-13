

- Docker-Postgres

- runing docker with some enviromental varibles and postgres

`sudo docker run --name postgres-0 -e POSTGRES_PASSWORD=password -d -p 5432:5432 postgres:alpine `

- showing the images   : ` sudo docker ps`
- showing the images includeing running containers  : ` sudo docker container ls -a`
- start stopped container   : ` sudo docker container ls -a`
    - if already porst is used : `sudo lsof -i :5432 ` kill it
- run docker container prebuilt : `docker exec -it 92caf236958c /bin/bash` 
- inside the images/ container , we'll use psql  : `psql -U postgres`
- display user :  `\du`
- list all db : `l`
- create db : `create database`
- use/connect db : `\c dbname` 
- create table : `create table table_name`
```
CREATE TABLE employee (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    salary DECIMAL(10,2) NOT NULL
);


```
- display table : `\d table_name`


- insert value : ```
insert into employee (id,name,salary) values (3,'Ayushi',63778),(4,'Mayank',63778),(5,'ayushi soni',63778),(6,'Mayank raj',63778);```

- show data inside table : 

```

select * from employee;
 id |    name     |  salary  
----+-------------+----------
  1 | ayu         | 65778.00
  2 | chikkuuu    | 63778.00
  5 | ayushi soni | 63778.00
  6 | Mayank raj  | 63778.00
(6 rows)

```






<!--   -->
# User manage system :
- Build a Node.js API using Fastify framework.
- Use PostgreSQL as the database to store user information.
- Implement the following endpoints:
- POST /users - Create a new user.
- GET /users - Retrieve a list of all users.
- GET /users/:id - Retrieve a specific user by ID.
- PUT /users/:id - Update an existing user.
- DELETE /users/:id - Delete a user.
- Each user should have the following properties:
- Name (string)
- Email (string)
- Age (integer)
- Implement database integration using a PostgreSQL library
- Implement basic validation for the incoming user data:
- Ensure that the required properties are present for create and update operations.
- Validate the data types and format (e.g., email validation).
- Implement error handling for invalid requests and database errors.