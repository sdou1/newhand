<template>
    <v-container>
        <Panel title="Songs">
            <div v-for="song in Songs" :key="song.title">
                {{song.title}}-{{song.artist}}
            </div>
            <p class='err'> {{error}}</p>
        </Panel>
    </v-container>
</template>
<script>
    import Panel from './Panel'
    import SongServices from '@/services/SongServices'
    var Console = console
    export default {
        data() {
            return {
                Songs: null,
                error: null
            }
        },
        components: {
            Panel,
        },
        mounted: async function () {
            SongServices.GetSongs().then((rs) => {
                Console.log('data:'+rs)
                this.Songs = rs.data
                this.error = null
            }).catch((error) => {
                Console.log(error)
                this.error = error.response.data
                this.$router.push('/login')
            });
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.err{
    color: red
}
</style>