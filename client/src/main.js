import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import store from "./store"
import utility from './utility'
Vue.config.productionTip = false
Vue.use(Vuetify)
store.state.name = utility.getCookie('name')
store.state.token = utility.getCookie('token')
new Vue({
  render: h => h(App),
  store
}).$mount('#app')
