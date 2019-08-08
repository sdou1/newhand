import API from "./Api"
export default {
    getAccessToken(){
        return API().get('/baiduai/accessToken')
    },
}