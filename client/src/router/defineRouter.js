import vueRouter from 'vue-router'
import vue from 'vue'
import HelloWorld from '../components/HelloWorld'
import Login from '../components/Login'
import Register from '../components/Register'
vue.use(vueRouter)

var routers = [{
        path: '/hello',
        component: HelloWorld
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/',
        redirect: '/hello'
    },
    {
        path: '/register',
        component: Register
    }
]
export default new vueRouter({
    routes: routers
})