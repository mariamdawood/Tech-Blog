const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = process.env.JAWSDB_URL
    ? new Sequelize(process.env.JAWSDB_URL, {
        logging: console.log,
    })
    : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
        host: '127.0.0.1',
        dialect: 'mysql',
        dialectOptions: {
            decimalNumbers: true,
        },
        logging: console.log,
    });

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch((err) => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = sequelize;