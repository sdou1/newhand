const morgan = require('morgan')
const cors = require('cors')
const bodyparser = require('body-parser')
const express = require('express')
const config = require('./configure/config')
const route = require('./route')
const {sequelize} = require('./models')

var Console = console
var exp = express()
exp.use(morgan('combined')) //log
exp.use(bodyparser.json())
exp.use(cors()) // http zone
//initialize route
route.register(exp)
exp.use(express.static(config.RootPath))
sequelize.sync()
.then(()=>{
    exp.listen(config.Port)
    Console.log('server start at '+config.Port)
    Console.log('db path is '+ config.db.options.storage)
})