const morgan = require('morgan') // log
const cors = require('cors') // corss-domain access
const bodyparser = require('body-parser')
const express = require('express')
const config = require('./configure/config')
//const route = require('./route')
const {sequelize} = require('./models') //sqlite db
const cookieparser = require('cookie-parser')
const songRouter = require('./router/songRouter')
const userRouter = require('./router/userRouter')
var Console = console
var exp = express()
exp.use(morgan('combined')) //log
exp.use(bodyparser.json())
exp.use(cors({             
    credentials: true,                //access information from different domain 
    origin: 'http://localhost:8080'   //the ui domain
})) // http zone
exp.use(cookieparser()) //cookie-parser to set and parser the cookie information
//initialize route
//route.register(exp)  //use route.js
exp.use(express.static(config.RootPath))  //the client file, jpg, html, js and so on
exp.use('/song', songRouter)             // the song router, process get or post for path '/song/*' ,
exp.use('/user', userRouter)             // the user router, process get or post for path '/user/*' ,
sequelize.sync() //{force: true}
.then(()=>{
    exp.listen(config.Port)
    Console.log('server start at '+config.Port)
    Console.log('db path is '+ config.db.options.storage)
})