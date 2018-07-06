<template>
  <div id="mainvue">
    <img src="./assets/logo.png">
    <p>{{message}}</p>
    <router-link to="/">home</router-link>
    <router-link to="/login">login</router-link>
    <router-view></router-view>
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
  </div>
</template>

<script>
import router from './router/defineRouter'
export default {
  data:function(){
    return {
      message: "I love you"
    }
  },
  router: router
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
