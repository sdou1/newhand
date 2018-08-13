const mongoose = require('mongoose')
var songSchema = new mongoose.Schema({
    title: String,
    artist: String,
    description: String
})
module.exports= mongoose.model('Song', songSchema)
