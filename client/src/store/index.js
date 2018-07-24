import Vuex from 'vuex'
import Vue from 'vue'
import {Store} from 'vuex'
import user from "./user"
Vue.use(Vuex)
var Console = console
export default new Store({
    state: user,
    mutations: {
        SetUserInfo(state, payload) {
            state.name = payload.name
            state.password = payload.password
            state.login = payload.login
            Console.log('user: '+ payload.name)
        }
    },
    actions: {
        SetUserInfo({commit}, payload) {
            commit('SetUserInfo', payload);        
        }    
    }
}
)
