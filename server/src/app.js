const morgan = require('morgan') // log
const cors = require('cors') // corss-domain access
const bodyparser = require('body-parser')
const express = require('express')
const config = require('./configure/config')
const http = require('http')
//const route = require('./route')
const { sequelize } = require('./models') //sqlite db
const cookieparser = require('cookie-parser')
const songRouter = require('./router/songRouter')
const userRouter = require('./router/userRouter')
const baiduAiRouter = require('./router/BaiduAiRouter')
const webSocket = require('websocket')
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
exp.use('/baiduai', baiduAiRouter)
sequelize.sync({force: true})
    .then(() => {
        //exp.listen(config.Port)
        var server = http.createServer(exp)
        var ws = new webSocket.server({ httpServer: server })
        var conn = null
        ws.on('request', (request) => {
            conn = request.accept(null, request.origin) //
            Console.log(conn)
        })
        var conn2 = null
        ws.on('connect', (connection) => {
            if(conn)
            {
                if(conn === connection){
                    Console.log('same connection')
                }
            }
            conn2 = connection
            Console.log('conn2: '+ conn2)
            //conn2.send('my email is 24425044@qq.com')
            conn2.on('message', (data) => {
                Console.log('socket message is ' + data.utf8Data)
                conn2.send('receive message from socket')
            })
            conn2.on('close', (reason, description) => {
                Console.log(`socket is closed, reason: ${reason}, description:${description}`)
            })
        })
        ws.on('close', (connection, reason, description) => {
            Console.log(connection)
            Console.log(`socket is closed, reason: ${reason}, description:${description}`)
        })
        
        server.listen(config.Port)
        
        Console.log('server start at ' + config.Port)
        Console.log('sqlite db path is ' + config.db.options.storage)
    })