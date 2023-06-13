const fastify = require('fastify')();
const db = require('./config/db');


fastify.post('/users', async (request, reply) => {
    const { name, email, age } = request.body;

    try {
        const user = await db('users').insert({ name, email, age }).returning('*');
        reply.send(user);
    } catch (error) {
        reply.status(500).send(error);
    }
});

fastify.get('/users', async (request, reply) => {
    try {
        const users = await db('users').select('*');
        reply.send(users);
    } catch (error) {
        reply.status(500).send(error);
    }
});

fastify.get('/users/:id', async (request, reply) => {
    const { id } = request.params;

    try {
        const user = await db('users').select('*').where({ id }).first();
        if (!user) {
            reply.status(404).send('User not found');
        } else {
            reply.send(user);
        }
    } catch (error) {
        reply.status(500).send(error);
    }
});

fastify.put('/users/:id', async (request, reply) => {
    const { id } = request.params;
    const { name, email, age } = request.body;

    try {
        const user = await db('users').where({ id }).update({ name, email, age }).returning('*');
        if (!user) {
            reply.status(404).send('User not found');
        } else {
            reply.send(user);
        }
    } catch (error) {
        reply.status(500).send(error);
    }
});

fastify.delete('/users/:id', async (request, reply) => {
    const { id } = request.params;

    try {
        const user = await db('users').where({ id }).del();
        if (!user) {
            reply.status(404).send('User not found');
        } else {
            reply.send('User deleted successfully');
        }
    } catch (error) {
        reply.status(500).send(error);
    }
});

// Start the server
fastify.listen(3000, (err) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log('Server running on port 3000');
});
