import Vue from 'vue'
import App from './App.vue'
//import VueRouter from '../node_modules/vue-router/dist/vue-router'

//import login from './components/login.vue'
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
