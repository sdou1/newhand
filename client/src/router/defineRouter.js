import vueRouter from 'vue-router'
import vue from 'vue'
import HelloWorld from '../components/HelloWorld'
import Login from '../components/Login'
import Register from '../components/Register'
import Songs from '../components/Songs'
import CreateSong from '../components/CreateSong'
import Cookie from "../utility"

vue.use(vueRouter)

var routers = [{
        path: '/hello',
        name: 'hello',
        component: HelloWorld,
        meta: {
            requrieLogin: true
        }
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/Song',
        name: 'song',
        component: Songs,
        meta: {
            requrieLogin: true
        }
    },

    {
        path: '/register',
        name: 'register',
        component: Register
    },
    {
        path: '/song/add',
        name: 'add song',
        component: CreateSong,
        meta: {
            requrieLogin: true
        }
    },
    {
        path: '/',
        name: 'main',
        redirect: '/hello'
    }
]
var router = new vueRouter({
    routes: routers
})
var Console = console
import store from "../store"
import authenticationServices from '../services/AuthenticationServices'
//before switch page
router.beforeEach(function (to, from, next) {
    if (to.meta.requrieLogin) {
        authenticationServices.CheckLogin().then(res => {
            Console.log('checklogin')
            Console.log(res)
            next()
        }).catch(error => {
            Cookie.delCookie('username')
            Cookie.delCookie('token')
            next({
                path: '/login'
            })
            Console.log(error)
        })
    } else if (to.fullPath === '/login' || to.fullPath === 'register') {
        Cookie.delCookie('username')
        Cookie.delCookie('token')
        store.dispatch('SetUserName', '')
        store.dispatch('SetToken', '')
        next()
    } else
        next()
})

export default router