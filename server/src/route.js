const authenticationController = require('./controllers/AuthenticationController')
module.exports={
    register(exp)
    {
        exp.post('/login', 
            authenticationController.register
        )
    }
}