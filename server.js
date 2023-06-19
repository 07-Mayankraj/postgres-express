const fastify = require('fastify')({ logger: true });
const controller = require('./controllers/user.controller');




fastify.get('/users', controller.getAllUser);
fastify.get('/users/:id', controller.getUser);

fastify.post('/users', controller.registerUser);

fastify.put('/users/:id', controller.updateUser);

fastify.delete('/users/:id', controller.deleteUser);

// Start the server



const start = async () => {
    try {
        await fastify.listen({ port: 3000 })
    } catch (error) {
        fastify.log.error(error)
        process.exit(1);
    }
}

start();