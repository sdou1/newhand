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
            Console.log('GetAllSongs')
            var userinfo = await jwt.CheckToken(req.cookies['token'])
            if (!userinfo)
            {
                Console.log('no user info')
                throw 'the user is logged in so long, need log in again'
            }   
            const songs = await Song.findAll()
            if (songs) {
                res.send(songs)
            }
        } catch (error) {
            Console.log(error)
            res.status(500).send(error)
        }
    }
}