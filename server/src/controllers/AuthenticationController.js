//const jwt = require('jsonwebtoken')
const {
    User
} = require('../models')
const jwt = require('../jwttoken')
const config = require('../configure/config')
var Console = console
module.exports = {
    async register(req, res) {
        try {
            Console.log(req.body.email)
            Console.log(req.headers)
            var user = await User.create(req.body)
            var token = jwt.GenerateToken({
                name: req.body.email
            })
            res.cookie('username', req.body.email, config.CookieOption)
            res.cookie('token', token, config.CookieOption)
            res.json({
                user,
                JWT: token,
                message: 'register successful, welcome!'
            })
        } catch (err) {
            res.status(504).send({
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
                res.status(503).send({
                    error: `the mail (${req.body.email}) is not registered, please register first!`
                })
            } else if (!user.comparePassword(req.body.password)) {
                res.status(502).send({
                    error: 'the password is wrong!'
                })
            } else {
                var token = jwt.GenerateToken({
                    name: req.body.email
                })
                Console.log('login succesful')
                res.cookie('username', req.body.email, config.CookieOption)
                res.cookie('token', token, config.CookieOption)
                res.send({
                    user,
                    JWT: token,
                    message: 'login successful, welcome!'
                })
            }


        } catch (error) {
            res.status(501).send(error)
        }
    },

    async checkLogin(req, res) {
        //Console.log(req)
        Console.log(req.cookies)
        if (!req.query || !req.query.token || !(await jwt.CheckToken(req.cookies['token']))) //!jwt.CheckToken(req.query.token))
        {
            res.clearCookie('username').clearCookie('token')
            res.status(501).send('please log in!')
            return
        }
        res.send('log successful')
    }
}