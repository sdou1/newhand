<template>
  <div class="hello">
    <h1>Register</h1>
    <!--
      <v-layout>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Login form</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field prepend-icon="person" name="login" label="Login" type="text"></v-text-field>
                  <v-text-field id="password" prepend-icon="lock" name="password" label="Password" type="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-layout>
    -->
      <!--<v-form>-->
      <v-app>
        <v-layout row>
      <v-layout column>  
        <v-flex xs6 offset-xs3>
          <div class="elevation-2">
          <v-toolbar class='cyan' dark flat dense>
            <v-toolbar-title>Register</v-toolbar-title>
          </v-toolbar>
          <div class='pl-4 pr-4 pt-2 pb-2'>
                <v-flex>
                  <v-text-field
                    label="Email:"
                    v-model='email'
                  ></v-text-field>
                </v-flex>
                <v-flex>
                  <v-text-field
                    label="Password:"
                    v-model='password'
                    type='password'
                  ></v-text-field>
                </v-flex>
                <v-flex>
                  <v-btn @click="login">Register</v-btn>
                </v-flex>
          </div>
          </div>
        </v-flex>
      </v-layout>
        
        <v-layout column>
          <input 
            type='email' 
            placeholder="email"
            v-model='email' />
          <br>
          <input
            type='password'
            placeholder="password"
            v-model='password' />
          <p class='error' v-html="error" />
          <button 
            @click="login" >
            login
          </button> 
        </v-layout>
        </v-layout>
        </v-app>
  </div>
</template>
<script>
import loginAPI from '@/services/login'
var Console = console
export default {
  data(){
    return {
      email:'sdou1@ra.rockwell.com',
      password:'123456',
      error:''
    }
  },
  methods:{
    async login(){
        await loginAPI.login(this.email, this.password)
        .then((rs)=>
          {
            Console.log(rs)
            this.error=''
          }
        )
        .catch(
          (error)=>
            this.error = error.response.data.error
        );
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error{
  color:red
}

  .offset-xs3{
    margin-right: 25%
  }

</style>
