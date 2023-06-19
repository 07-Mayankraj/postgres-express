## Setting up Docker with PostgreSQL
---
### To run Docker with PostgreSQL, follow these steps:


1. Run the following command to createa and start a Docker container with PostgreSQL, specifying the desired - -  environmental variables and port:

    `sudo docker run --name postgres-0 -e POSTGRES_PASSWORD=password -d -p 5432:5432 postgres:alpine`

2. To view the running Docker images, use the following command:

    `sudo docker ps`


3. To view all images, including the running containers, use the following command:
    
    `sudo docker container ls -a`


4. If a container is stopped, you can start it using the following command:
    
    ``sudo docker container start <container_id>``


5. If the port is already in use, you can find the process using the following command and kill it:

    `sudo lsof -i :5432`

6. To run commands inside a prebuilt Docker container, use the following command:

    ``docker exec -it <container_id> /bin/bash``


7. Inside the container, you can use psql to interact with PostgreSQL:

    `psql -U postgres`

8. You can display all users using the following command:
  `\du`

9. To list all databases, use the following command: `` l ``

10. To create a new database, use the following command: ``create database <dbname>;``

11. To connect to a specific database, use the following command: ``\c <dbname>``
12. To create a table, use the following command:
    ```
    CREATE TABLE users (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      age INTEGER NOT NULL
    );

    ```
12. To display a table structure, use the following command:
``\d <table_name>``

13. To insert values into the table, use the following command:
    
    `insert into users(name, email, age) values ('Ayushi', 'ayushi@gmail.com', 22), ('Mayank raj', 'chikkuuu@gmail.com', 22);`

15. To display the data inside the table, use the following command:
`select * from users;`

    The output should look like this:
```
    id |    name    |       email       | age
    ---+------------+-------------------+-----
     3 | chikkuuu   | chikkuuu@gmail.com| 22
     1 | Ayushi     | ayushi@gmail.com  | 22
    (2 rows)

```

# User Management System : Node js and Fasity 

To build a Node.js API using the Fastify framework and PostgreSQL as the database for user management, follow these steps:


Step 1: Set up the project

  - Create a new directory for your project.
  
  - Initialize a new Node.js project by running the following command in your project directory:`npm init -y`

  - Install the required dependencies: Fastify, pg, and any other necessary packages:
   `npm install fastify pg`

Step 2: Set up the PostgreSQL database

  - Install PostgreSQL on your machine if you haven't already.
  - Create a new PostgreSQL database for your project.

Step 3: Create the API endpoints and database integration

Create a new file, e.g., index.js, and set up the basic structure of your Fastify server.
Import the necessary modules:
```
    const knex = require('knex')

    module.exports = knex({
    client: 'postgres',
    connection: {
        host: 'localhost',
        user: 'postgres',
        password: 'password',
        database: 'test',
    },
})

```


### node js code explanation


## now make requests to the API endpoints using a tool like cURL or Postman.
