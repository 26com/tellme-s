const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {Sequelize} = require('sequelize')

require('../models')
const {configs} = require('../config')
const {User} = require('../models/user')

const register = async (req, res, next) => {
  try {
    const exist = await User.findOne({
      where: {
        [Sequelize.Op.and]: [
          {email: req.body.email},
          {confirm: true}
        ]
      }
    })
  
    if (exist) {
      res.status(409).json({
        message: 'email is busy'
      })
      return
    }
  
    const salt = await bcrypt.genSalt(10)
    const password = await bcrypt.hash(req.body.password, salt)
  
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password,
      confirm: false,
    })
  
    res.status(201).json({
      message: 'User created'
    })
  }
  catch (err) {
    err.message = 'User create fail'
    next(err)
  }
}

module.exports = {
  register
}