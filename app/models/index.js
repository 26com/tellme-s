const {Sequelize} = require('sequelize')

const {configs} = require('../config')

const {db} = configs

const sequelize = new Sequelize (
  db.name,
  db.user,
  db.password,
  {
    dialect: 'postgres',
    define: {timestamps: false}
  }
)

module.exports = {
  sequelize,
  Sequelize
}

sequelize.sync()
  .then(() => console.log('__/DB CONECTED'))
  .catch(err => console.log(err))