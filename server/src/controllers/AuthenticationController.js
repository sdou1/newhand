//const jwt = require('jsonwebtoken')
const {
    User
} = require('../models')
const jwt = require('../jwttoken')
var Console = console
module.exports = {
    async register(req, res) {
        try {
            Console.log(req.body.email)
            var user = await User.create(req.body)
            var token = jwt.GenerateToken({
                name: req.body.email
            })

            res.send({
                user,
                JWT: token,
                message: 'register successful, welcome!'
            })
        } catch (err) {
            res.status(400).send({
                error: `the email(${req.body.email}) account is already in use`
            })
            Console.log('error : ')
        }
        Console.log('register end')
    },

    async login(req, res) {
        try {
            Console.log(req.body.email)
            const user = await User.findOne({
                where: {
                    email: req.body.email
                }
            })

            if (!user) {
                res.status(400).send({
                    error: `the mail (${req.body.email}) is not registered, please register first!`
                })
            } else if (!user.comparePassword(req.body.password)) {
                res.status(400).send({
                    error: 'the password is wrong!'
                })
            } else {
                var token = jwt.GenerateToken({
                    name: req.body.email
                })

                res.send({
                    user,
                    JWT: token,
                    message: 'login successful, welcome!'
                })
            }


        } catch (error) {
            res.status(400).send(error.toJSON())
        }
    },

    async checkLogin(req, res) {
        //Console.log(req)
        if (!req.query || !req.query.token || !jwt.CheckToken(req.query.token))
            res.status(501).send('please log in!')
        res.send('log successful')
    }
}