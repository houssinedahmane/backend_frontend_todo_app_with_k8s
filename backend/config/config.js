const dotenv = require('dotenv');
const path = require('path');
const envPath = path.resolve(process.cwd(), '.env');
dotenv.config({ path: envPath });
const Sequelize = require("sequelize");


const sequelize = new Sequelize({
    dialect: 'postgres',
    host: 'postgres',
    port: 5432,
    database: 'todos',
    username: 'postgres',
    password: 'password',
    dialectOptions: {
        // Additional options here
    },
    define: {
        // Model options here
    },
    logging: false, // Set to true to log SQL queries
});

module.exports = sequelize;
