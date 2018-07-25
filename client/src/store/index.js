import Vuex from 'vuex'
import Vue from 'vue'
import {Store} from 'vuex'

Vue.use(Vuex)
var Console = console
export default new Store({
    state: {
        name:'',
        token:''
    },
    mutations: {
        SetUserName(state, name) {
            state.name = name
            Console.log('user: '+ name)
        },
        SetToken(state, token)
        {
            Console.log(token)
            state.token = token
        }
    },
    actions: {
        SetUserName({commit}, name) {
            commit('SetUserName', name);        
        },
        SetToken({commit}, token){
            commit('SetToken', token)
        }    
    }
}
)
