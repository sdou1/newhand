import API from './Api'
export default {
    Login(email, pwd) {
        //alert('login function')
        return API().post('/login', {
            'email': email,
            'password': pwd
        })
    },
    Register(email, pwd) {
        return API().post('/Register', {
            'email': email,
            'password': pwd
        })
    }
}