// const env = require("./env.js")
const env = require("./env.js")
const Sequelize = require("sequelize");
const tedious = require('tedious');

const sequelize = new Sequelize(process.env.database, process.env.username, process.env.password, {
  host: process.env.host,
  dialect:"mssql",
  operatorsAliases: false,
});




const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models
db.user = require("../model/user.model.js")(sequelize, Sequelize);
db.product = require("../model/product.model.js")(sequelize, Sequelize);
db.service = require("../model/serviceAbility.model.js")(sequelize, Sequelize);
db.admin = require("../model/admin.model.js")(sequelize, Sequelize);

module.exports = db;






