import API from './Api' 
export default{
    login(email, pwd){
        //alert('login function')
        return API().post('/login',{
            'email': email,
            'password': pwd
        })
    }
}
