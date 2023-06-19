const db = require("../config/db");

// register
exports.registerUser = async (request, reply) => {
    const { name, email, age } = request.body;

    try {
        const user = await db('users').insert({ name, email, age }).returning('*');
        reply.send(user);
    } catch (error) {
        reply.status(500).send(error);
    }
}



// get user with id 
exports.getUser = async (request, reply) => {
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
}

// gell all users
exports.getAllUser = async (request, reply) => {
    try {
        const users = await db('users').select('*');
        reply.send(users);
    } catch (error) {
        reply.status(500).send(error);
    }
}


//update a user
exports.updateUser = async (request, reply) => {
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
}


// delete a user 
exports.deleteUser = async (request, reply) => {
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
}