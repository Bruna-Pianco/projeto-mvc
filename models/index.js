const dbConfig = require("../config/db.config");
const Sequelize = require("sequelize");


const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD,{
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,


    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idel
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.tutorial = require ('./tutorial.model')(sequelize,Sequelize);
module.exports = db;