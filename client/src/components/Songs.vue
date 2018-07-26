<template>
    <v-container>
        <Panel title="Songs">
            <div v-for="song in Songs" :key="song.title">
                {{song.title}}-{{song.artist}}
            </div>
        </Panel>
    </v-container>
</template>
<script>
    import Panel from './Panel'
    import SongServices from '@/services/SongServices'
    export default {
        data() {
            return {
                Songs: null
            }
        },
        components: {
            Panel,
        },
        mounted: async function () {
            this.Songs = (await SongServices.GetSongs(this.$store.state.token)).data;
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>