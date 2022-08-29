const express = require('express')

const unprotected = require('./unprotected')

const router = express.Router

router.use('/unprotected', unprotected.router)

module.exports = {router}