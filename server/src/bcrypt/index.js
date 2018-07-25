const bcrypt = require('bcryptjs')
const config = require('../configure/config')
var Console = console
module.exports = {
    generateHash(pwd) {
        Console.log(pwd)
        var salt = bcrypt.genSaltSync(config.Bcrypt.salt)
        Console.log('salt: ' + salt)
        var hash = bcrypt.hashSync(pwd, salt)
        var btrue = this.compareHash(pwd, hash)
        Console.log('btrue: ' + btrue + ' hash: ' + hash + ' pwd:' + pwd)
        return hash
    },
    compareHash(pwd, hash) {
        Console.log(pwd)
        Console.log('hash:'+hash)
        var btrue = bcrypt.compareSync(pwd, hash)
        Console.log('login:btrue:'+ btrue)
        return btrue
    }
}