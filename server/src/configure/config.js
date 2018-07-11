module.exports={
    Port: process.env.PORT || 8081,
    db:{
        database: process.env.DB_NAME || 'server',
        user: process.env.DB_USER || 'server',
        password: process.env.DB_PASSWORD || 'server',
        options:{
            dialect: process.env.DB_DIALECT || 'sqlite',
            host: process.env.DB_HOST || 'localhost',
            storage: __dirname + 'mysql.sqlite'
        }
    }
}