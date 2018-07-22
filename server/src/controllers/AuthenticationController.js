const {
    User
} = require('../models')
var Console = console
module.exports = {
    async register(req, res) {
        try {
            Console.log(req.body.email)
            var user = await User.create(req.body)
            res.send(user.toJSON())
            Console.log(user.toJSON())
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
            } else if (user.password !== req.body.password) {
                res.status(400).send({
                    error: 'the password is wrong!'
                })
            } else {
                res.send({
                    message: 'login successful, welcome!'
                })
            }


        } catch (error) {
            res.status(400).send(error.toJSON())
        }
    }
}