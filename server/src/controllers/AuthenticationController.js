const { User } = require('../models')
var Console = console
module.exports = {
    async register(req, res){
    try {
        Console.log(req.body.email)
        var user = await User.create(req.body)
        res.send(user.toJSON())
        Console.log(user.toJSON())
    } catch (err)
    {
        res.status(400).send({
            error: `the email(${req.body.email}) account is already in use`
        })
        Console.log('error : ' + err.toJSON())
    }
    Console.log('register end')
}
}

