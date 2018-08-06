<template>
    <div>
        <v-layout>
            <Panel title="Create Song">
                <div class='pl-4 pr-4 pt-2 pb-2'>
                    <v-text-field label="Title:" v-model='title'></v-text-field>
                    <v-text-field label="Artist:" v-model='artist'></v-text-field>
                    <v-textarea label="Description:" multi-line v-model='description'></v-textarea>
                </div>
                <v-btn @click="PostSong">Add Song</v-btn>
            </Panel>
        </v-layout>
    </div>
</template>
<script>
    import Panel from './Panel'
    import SongService from '@/services/SongServices'
    var Console = console
    export default {
        data() {
            return {
                title: null,
                artist: null,
                description: null,
            }
        },
        methods: {
            PostSong() {
                SongService.PostSong({
                    'title': this.title,
                    'artist': this.artist,
                    'description': this.description
                }).then((rs)=>{
                    Console.log(rs)
                }

                ).catch(
                    (error) => {
                        Console.log(error.respone.data.error)
                        this.$router.push('/login')
                    })
            }
        },
        components: {
            Panel,
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>