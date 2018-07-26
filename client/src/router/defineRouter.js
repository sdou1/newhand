import vueRouter from 'vue-router'
import vue from 'vue'
import HelloWorld from '../components/HelloWorld'
import Login from '../components/Login'
import Register from '../components/Register'
import Songs from '../components/Songs'
import CreateSong from '../components/CreateSong'
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
        path: '/Song',
        component: Songs
    },
    {
        path: '/register',
        component: Register
    },
    {
        path: '/song/add',
        component: CreateSong
    },
    {
        path:'/',
        redirect: '/hello'
    }
]
export default new vueRouter({
    routes: routers
})