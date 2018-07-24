import Vue from 'vue'
//import Vuex from 'vuex'

//import store from "./store"

Vue.config.productionTip = false
Vue.use(Vuetify)
//Vue.use(Vuex)
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
new Vue({
  render: h => h(App)
}).$mount('#app')
