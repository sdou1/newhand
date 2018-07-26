<template>
    <v-layout>
        <v-flex xs6 offset-xs3>
            <div class="elevation-2">
                <v-toolbar class='cyan' dark flat dense>
                    <v-toolbar-title>{{title}}</v-toolbar-title>
                </v-toolbar>
                <slot />
            </div>
        </v-flex>
    </v-layout>
</template>
<script>
    export default {
        props: {
            title: {
                type: String,
                default:'Hello World' 
            },
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>