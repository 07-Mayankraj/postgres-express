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