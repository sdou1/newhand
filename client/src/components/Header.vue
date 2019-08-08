<template>
    <v-toolbar class="purple darken-1" fixed dark>
        <v-toolbar-title class="mr-4">
            <span class='home' @click="gotoregister('/hello')">
                Home
            </span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn to="/register" flat dark v-if='UnLogin'>
                Register
            </v-btn>
            <button @click="gotoregister('/login')" v-if='UnLogin'>Login</button>
            <v-btn to='/login' @click='$store.dispatch("SetToken","")' flat dark v-if='!UnLogin'>
                Log Out
            </v-btn>
            <router-link to="/hello" flat dark>
                Go home
            </router-link>
            <button @click="getAccessToken()">AccessToken</button>
            <p>{{msg}}</p>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
    var Console = console;
    import baiduAiServices from '../services/BaiduAiServices'
    import socketApi from '../services/WebSocketApi'
    export default {
        data(){
            return {
                msg: 'content'
            }
        },
        methods: {
            gotoregister(pagename) {
                Console.log(pagename)
                //this.nextpagename=this.nextpagename==='/hello'?'/register':'/hello';
                this.$router.push(pagename)
                Console.log("change page");
                if(socketApi.readyState === WebSocket.OPEN)
                {
                    Console.log('socket api is ready')
                    socketApi.send('hello services')
                }
            },
            getAccessToken(){
                        baiduAiServices.getAccessToken().then(
                            respone=>{
                                this.msg = respone.data.access_token;
                            }
                        ).catch(error=>{
                            this.msg = error.respone.data.error;
                        })
            },
        },
        computed: {
            UnLogin() {
                //return true
                //Console.log('status:' + this.$store.state.token)
                if (!this.$store.state.token || this.$store.state.token.trim().length===0)
                    return true
                return false
            }
        },
    }
</script>
<style scoped>
.msgstyle{
    color: darkmagenta
}
</style>