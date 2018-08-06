<template>
  <div class="hello">
    <h1>Register</h1>
    <v-container>
      <Panel title="Login">
        <div class='pl-4 pr-4 pt-2 pb-2'>
          <v-flex>
            <v-text-field label="Email:" v-model='email'></v-text-field>
          </v-flex>
          <v-flex>
            <v-text-field label="Password:" v-model='password' type='password'></v-text-field>
          </v-flex>
          <v-flex>
            <p class="errorStyle">{{error}}</p>
          </v-flex>
          <v-flex>
            <v-btn @click="login" class="cyan" flat dark>Login</v-btn>
          </v-flex>
        </div>
      </Panel>
    </v-container>
  </div>
</template>
<script>
  import AuthenticationServices from '@/services/AuthenticationServices'
  import Panel from './Panel'
  var Console = console
  export default {
    data() {
      return {
        email: '',
        password: '',
        error: ''
      }
    },
    methods: {
      async login() {
        Console.log(this.email + ":" + this.password)
        await AuthenticationServices.Login(this.email, this.password)
          .then((rs) => {
            //Console.log(rs)
            this.error = ''
            this.$store.dispatch('SetUserName', rs.data.user.email)
            this.$store.dispatch('SetToken', rs.data.JWT)
            this.$router.push('/hello')
          })
          .catch(
            (error) =>
            this.error = error.response.data.error
          );
      }
    },
    components: {
      Panel,
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .errorStyle {
    color: red
  }
</style>