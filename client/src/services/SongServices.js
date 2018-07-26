import API from './Api'
export default {
    GetSongs(token) {
        return API().get('/getsongs'+'/token='+token)
    },
    PostSong(song){
        return API().post('/postsong',song)
    }
}