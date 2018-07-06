import vueRouter from 'vue-router'
import vue from 'vue'
import HelloWorld from '../components/HelloWorld'
import login from '../components/login'
vue.use(vueRouter)

var routers = [
    {path:'/hello', component: HelloWorld },
    {path:'/login', component: login},
    {path:'/', redirect:'/hello'}
  ]
export default new vueRouter({
    routes: routers
})