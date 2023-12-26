// const Sequelize = require('sequelize');
// require('dotenv').config();

// const sequelize = process.env.JAWSDB_URL
//     ? new Sequelize(process.env.JAWSDB_URL, {
//         logging: console.log,
//     })
//     : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
//         host: 'localhost',
//         dialect: 'mysql',
//         dialectOptions: {
//             decimalNumbers: true,
//         },
//         logging: console.log,
//     });

// sequelize
//     .authenticate()
//     .then(() => {
//         console.log('Connection has been established successfully.');
//     })
//     .catch((err) => {
//         console.error('Unable to connect to the database:', err);
//     });

// module.exports = sequelize;
const { Sequelize } = require('sequelize');

const sequelize = process.env.DATABASE_URL
    ? new Sequelize(process.env.DATABASE_URL, {
        dialect: 'mysql',
    })
    : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
        host: 'localhost',
        dialect: 'mysql',
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
