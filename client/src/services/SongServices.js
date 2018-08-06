import API from './Api'
export default {
    GetSongs() {
        return API().get('/getsongs')
    },
    PostSong(song){
        return API().post('/postsong',song)
    }
}