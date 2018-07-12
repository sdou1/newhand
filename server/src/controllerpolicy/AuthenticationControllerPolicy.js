const Joi = require('joi')

module.exports={
    register (req, res, next)
    {
        var schema = {
            'email': Joi.string().email(),
            'password': Joi.string()
        }

        var result=Joi.validate(req.body, schema)
        if(result.error)
        {
            switch(result.error.details[0].context.key)
            {
                case 'email':
                {
                    res.status(400).send({
                        error: `the email (${req.body.email}) address is invalid`
                    })
                    break
                }    
                case 'password':
                {
                    res.status(400).send({
                        error: 'the passward is invalid'
                    })
                    break
                }
            }
        }
        else
            next()
    }
}