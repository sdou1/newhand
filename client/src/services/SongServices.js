import API from './Api'
export default {
    GetSongs() {
        return API().get('/song/getsongs')
    },
    PostSong(song){
        return API().post('/song/postsong',song)
    }
}