const Sequelize = require("sequelize");
const sequelize = new Sequelize("booking_app", "root", "ANni2616@sql%", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
