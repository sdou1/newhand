const mongoose = require('mongoose')
const bcrypt = require('./bcrypt')
var userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true
    },
    password: String
})
userSchema.methods.comparePassword=function( pwd ){
    return bcrypt.compareHash(pwd, this.password)
}
module.exports = mongoose.model('User', userSchema)
 