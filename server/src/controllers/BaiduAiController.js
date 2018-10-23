//var https = require('https')
const axios = require('axios')
var qs = require('querystring')
var Console = console
module.exports = {
    AccessToken(req, res) {
        try {
            const param = qs.stringify({
                'grant_type': 'client_credentials',
                'client_id': 'TbZVwcPv5HKNGBOMpcOAMmS6',
                'client_secret': '6NY1q4z05HYoF5t8OhTqVmEaVlqsMigz'
            })
            //TODO: Https
            /*
            https.get({
                        hostname: 'aip.baidubce.com',
                        path: '/oauth/2.0/token?' + param,
                        agent: false
                    },
                    function (rs) {
                        Console.log(rs.data)
                        rs.pipe(process.stdout)
                        Console.log('Spring Result')
                        
                        var data = ''
                        rs.on('data', function (dt) {
                            data += dt
                        })
                        rs.on('end', function () {
                            Console.log('Spring Result-3')
                            Console.log(JSON.parse(data).access_token)
                            res.send(JSON.parse(data))
                            Console.log('Spring Result-4')
                        })
                        //Console.log('Spring Result-2')
                    }
                )
                .on('error', err => {
                    res.status(506).send({
                        error: err
                    })
                })*/
                //Axios plugin
                var instance = axios.create({
                    baseURL: 'https://aip.baidubce.com',
                    withCredentials: true
                })
                instance.get('/oauth/2.0/token?' + param).then(rs=>{
                    Console.log(rs.data)
                    res.send(rs.data)
                })
        } catch (error) {
            res.status(507).send(error)
        }
    },
}