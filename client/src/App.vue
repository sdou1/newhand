<template>
  <div id="app">
    <v-app>
      <PageHeader />
      <v-container>
        <img src="./assets/logo.png">
        <p>{{message}}</p>
        <router-view></router-view>
      </v-container>
    </v-app>
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
  </div>
</template>

<script>
  import router from './router/defineRouter'
  import pageheader from "./components/Header"
  import store from "./store"
  export default {
    data: function () {
      return {
        message: "I love you"
      }
    },
    store,
    router: router,
    components: {
      PageHeader: pageheader
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    
  }
</style>