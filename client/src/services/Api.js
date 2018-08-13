import axios from 'axios'
import utility from '../utility'
export default () => {
    var instance = axios.create({
        baseURL: 'http://localhost:8082',
        withCredentials: true
    })
    instance.interceptors.request.use(
        config => {
            config.params=config.params || {}
            config.params.token = utility.getCookie('token')
            return config
        }, error => {
            Promise.reject(error)
        }
    )
    return instance
}