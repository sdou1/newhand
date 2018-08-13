const path = require('path')
module.exports = {
    Port: process.env.PORT || 8082,
    RootPath: process.env.ROOTPATH || path.normalize(__dirname + '../../../../client/dist/'),
    db: {
        database: process.env.DB_NAME || 'server',
        user: process.env.DB_USER || 'server',
        password: process.env.DB_PASSWORD || 'server',
        options: {
            dialect: process.env.DB_DIALECT || 'sqlite',
            host: process.env.DB_HOST || 'localhost',
            storage: __dirname + '/mysql.sqlite'
        }
    },
    Bcrypt: {
        salt: 10 //bcryptjs
    },
    JwtToken: {
        JwtSecret: process.env.JWT_SECRET || 'secret'
    },
    CookieOption: {
        maxAge: 1000*300,
        httpOnly: false
    }
}