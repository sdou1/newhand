<template>
  <div class="hello">
    <input type='email' placeholder="email" v-model='email'>
    <br>
    <input type='password' placeholder="password" v-model='password'>
    <button @click="login">login</button> 
  </div>
</template>
<script>
import loginAPI from '@/services/login'
var Console = console
export default {
  data(){
    return {
      email:'sdou1@ra.rockwell.com',
      password:'123456'
    }
  },
  methods:{
    async login(){
        var res = await loginAPI.login(this.email, this.password);
        Console.log(res.data);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
