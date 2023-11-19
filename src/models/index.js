const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false
});

const db = {};

db.Sequelize = Sequelize;
db.connection = sequelize;

db.user = require('./users.js')(db.connection, db.Sequelize)
db.vote = require('./votes.js')(db.connection, db.Sequelize)
db.article = require('./articles.js')(db.connection, db.Sequelize)

module.exports = db;