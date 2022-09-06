const {sequelize, Sequelize} = require('./index')

const User = sequelize.define('user', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
  },
  token: {
    type: Sequelize.STRING,
  },
  confirm: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  }
})

module.exports = {User}