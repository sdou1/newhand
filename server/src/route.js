const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./controllerpolicy/AuthenticationControllerPolicy')
module.exports={
    register(exp)
    {
        exp.post('/login', 
            AuthenticationControllerPolicy.register,
            AuthenticationController.register)
    }
}