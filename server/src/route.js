const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./controllerpolicy/AuthenticationControllerPolicy')
const ClientController = require('./clientcontrollers/ClientControllers')
module.exports = {
    register(exp) {
        exp.post('/register',
            AuthenticationControllerPolicy.register,
            AuthenticationController.register)
        exp.post('/login',
            AuthenticationController.login
        )
        //exp.get('*.*',ClientController)
        exp.get('/',ClientController)
        
    },
}