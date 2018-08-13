import API from './Api'
export default {
    Login(email, pwd) {
        //alert('login function')
        return API().post('/user/login', {
            'email': email,
            'password': pwd
        })
    },
    Register(email, pwd) {
        return API().post('/user/register', {
            'email': email,
            'password': pwd
        })
    },
    CheckLogin()
    {
        return API().get('/user/checklogin')
    }
}