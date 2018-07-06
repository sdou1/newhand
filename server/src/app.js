const morgan = require('morgan')
const cors = require('cors')
const bodyparser = require('body-parser')
const express = require('express')
var Console = console
var exp = express()
exp.use(morgan('combined')) //log
exp.use(bodyparser.json())
exp.use(cors()) // http zone
exp.post('/login', (req, res)=>{
    res.send({
        message: `wellcome ${req.body.email}! your email register successfully, have fun!`
    })
    Console.log('/login command!')
})

var svr = exp.listen(process.env.PORT || 8081, ()=>{    
    var address = svr.address().address
    var port = svr.address().port
    Console.log('server start '+address+' port:'+ port)
})