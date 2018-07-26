const {
    Song
} = require('../models')
const jwt = require('../jwttoken')
var Console = console
module.exports = {
    async PostSong(req, res) {
        try {
            Console.log(req.body.title)
            var song = await Song.create(req.body)
            
            res.send({
                song,
                message: 'create song successful!'
            })
        } catch (err) {
            res.status(400).send({
                error: `the song(${req.body.title}) is already added`
            })
            Console.log('error : ')
        }
    },

    async GetAllSongs(req, res) {
        try {
            Console.log(req.url)
            var index = req.url.indexOf('token=')
            var token = req.url.substring(index+'token='.length, req.url.length)
            var userinfo = await jwt.VerifyToken(token)
            Console.log(userinfo)
            const songs = await Song.findAll()            
            if (songs){
                res.send(songs)
            }
        } catch (error) {
            res.status(400).send(error.toJSON())
        }
    }
}