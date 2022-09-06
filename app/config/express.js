const express = require('express')
// const cookieParser = require('cookie-parser')
const cors = require('cors') 

const {router} = require('../routes')
const {configs} = require('../config')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(cors())

app.use(router)

module.exports = {app}

