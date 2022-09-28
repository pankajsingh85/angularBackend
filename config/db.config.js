// const env = require("./env.js")
const config = require('config');
const Sequelize = require("sequelize");
const tedious = require('tedious');


const database = config.get('server.database');
const username = config.get('server.username');
const password = config.get('server.password');
const host = config.get('server.host');

console.log(database+" "+username+" "+host)

const sequelize = new Sequelize(database, username, password, {
  host:host,
  dialect:"mssql",
  operatorsAliases: false
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






