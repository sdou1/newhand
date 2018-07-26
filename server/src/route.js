const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./controllerpolicy/AuthenticationControllerPolicy')
const ClientController = require('./clientcontrollers/ClientControllers')
const SongController = require('./controllers/SongController')
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
        exp.get('/getsongs/*',SongController.GetAllSongs)
        exp.post('/postsong',SongController.PostSong)
    },
}