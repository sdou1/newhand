<template>
    <v-toolbar class="purple darken-1" fixed dark>
        <v-toolbar-title class="mr-4">
            <span class='home' @click="gotoregister('/hello')">
                Home
            </span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="btn">
            <v-btn to="/register" flat dark v-if='UnLogin'>
                Register
            </v-btn>
            <button @click="gotoregister('/login')" v-if='UnLogin'>Login</button>
            <v-btn to='/song' flat dark v-if='!UnLogin'>Song</v-btn>
            <router-link to="/hello" flat dark>
                Go home
            </router-link>
<<<<<<< HEAD
            <button @click="getAccessToken()">AccessToken</button>
            <p>{{msg}}</p>
=======
            <v-btn to='/login' @click='$store.dispatch("SetToken","")' flat dark v-if='!UnLogin'>
                Log Out
            </v-btn>
>>>>>>> 3438c0509e313c24d5946208cc7457fd208a173d
        </v-toolbar-items>
        <v-toolbar-title class="btn" v-if='!UnLogin'>
            <span>{{this.$store.state.name}}</span>
        </v-toolbar-title>
    </v-toolbar>
</template>

<script>
    var Console = console;
    import baiduAiServices from '../services/BaiduAiServices'
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
<<<<<<< HEAD
.msgstyle{
    color: darkmagenta
=======
.btn{
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    color: green;    
    font-size: 16px
>>>>>>> 3438c0509e313c24d5946208cc7457fd208a173d
}
</style>