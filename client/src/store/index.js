import Vuex from 'vuex'
import Vue from 'vue'
import {
    Store
} from 'vuex'
import cookie from '../utility'
Vue.use(Vuex)
var Console = console
export default new Store({
    state: {
        name: '',
        token: ''
    },
    mutations: {
        SetUserName(state, name) {
            state.name = name
            Console.log('user: ' + name)
            if (name)
                cookie.setCookie('username', name, 1)
            else
                cookie.delCookie('username')
        },
        SetToken(state, token) {
            Console.log(token)
            state.token = token
            if (token)
                cookie.setCookie('token', token, 1)
            else
                cookie.delCookie('token')
        }
    },
    actions: {
        SetUserName({
            commit
        }, name) {
            commit('SetUserName', name);
        },
        SetToken({
            commit
        }, token) {
            commit('SetToken', token)
        }
    }
})