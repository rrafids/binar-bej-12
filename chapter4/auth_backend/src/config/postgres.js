const postgres = require('postgres')

const connection = postgres({
  host: 'localhost',            // Postgres ip address[s] or domain name[s]
  port: 5432,          // Postgres server port[s]
  database: 'binar',            // Name of database to connect to
  username: 'rrafids',            // Username of database user
  password: '',            // Password of database user
});

module.exports = connection;

