const Sequelize = require('sequelize');
require('dotenv').config();

const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, JAWSDB_URL } = process.env;

const sequelize = new Sequelize(
    JAWSDB_URL || DB_NAME,
    JAWSDB_URL ? {} : DB_USER,
    JAWSDB_URL ? {} : DB_PASSWORD,
    {
        host: JAWSDB_URL ? undefined : DB_HOST,
        port: JAWSDB_URL ? undefined : DB_PORT,
        dialect: 'mysql',
        dialectOptions: {
            decimalNumbers: true,
        },
        logging: console.log,
    }
);

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch((err) => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = sequelize;