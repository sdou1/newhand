<template>
    <v-toolbar class="purple darken-1" fixed dark>
        <v-toolbar-title class="mr-4">
            <span class='home' @click="gotoregister('/hello')">
                Home
            </span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn to="/register" flat dark>
                Register
            </v-btn>
            <button @click="gotoregister('/login')">Login</button>
            <router-link to="/hello" flat dark>
                <v-btn>
                    goto home
                </v-btn>
            </router-link>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
    var Console = console;
    export default {
        methods: {
            gotoregister(pagename) {
                Console.log(pagename)
                //this.nextpagename=this.nextpagename==='/hello'?'/register':'/hello';
                this.$router.push(pagename)
            }
        }
    }
</script>
<style scoped>
</style>