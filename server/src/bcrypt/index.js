const bcrypt = require('bcryptjs')
const config = require('../configure/config')
var Console = console
module.exports={
    generateHash(pwd){
        Console.log(pwd)
        var salt = bcrypt.genSaltSync(config.Bcrypt.salt)
        Console.log('salt: '+salt)
        return bcrypt.hashSync(pwd, salt)
    },
    compareHash(pwd, hash){
        return bcrypt.compareSync(pwd, hash)
    }
}