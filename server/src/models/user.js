const bcrypt = require('../bcrypt')
var Console = console
function hashPassword(user) {
    Console.log(user.toJSON())
    if (!user.changed('password')) {
        Console.log('is not changed')
        return
    }
    var hash = bcrypt.generateHash(user.password)
    user.setDataValue('password', hash)
}

module.exports = (sequelize, DataTypes) => {
    var User = sequelize.define('User', {
        email: {
            type: DataTypes.STRING,
            unique: true,
        },
        password: DataTypes.STRING
    }, {
        hooks: {
            beforeCreate: hashPassword,
            beforeUpdate: hashPassword,
            //beforeSave: hashPassword
        }
    })
    User.prototype.comparePassword = function (password) {
        Console.log(password)
        Console.log(this.password)
        return bcrypt.compareHash(password, this.password)
    }
    /*User.prototype.hashPassword = function(password){
        this.password = bcrypt.generateHash(password)
    }*/
    return User
}