const jwt = require('jsonwebtoken')
const config = require('../configure/config')
var Console = console
module.exports = {
    GenerateToken(info) {
        const ONE_WEEK = 60 * 60 * 24 * 7
        return jwt.sign(info, config.JwtToken.JwtSecret, {
            expiresIn: ONE_WEEK
        })
    },
    async VerifyToken(token) {
        var info = null
        Console.log(token)
        await jwt.verify(token, config.JwtToken.JwtSecret, function (error, decode) {
            if (!error) {
                info = decode
            } else {
                Console.log(error)
            }
        })
        return info
    },

    async CheckToken(token) {
        Console.log('check token: '+ token)
        var userinfo = await this.VerifyToken(token)
        return userinfo
    }


}