//store.js
import Vue from 'vue'
import Vuex from 'vuex'

import getters from './getters'
import actions from './actions'

import { INCREMENT_COUNTER, CHANGE_MSG } from './mutation_types'
Vue.use(Vuex)

const state = {
    msg: 'Hello Vue!',
    counter: 0
}

const mutations = {
    // changeMessage(state, msg) {
    //     state.msg = msg
    // },
    // incrementCounter(state) {
    //     state.counter ++;
    // }    
    [CHANGE_MSG](state, msg) {
        state.msg = msg
    },
    [INCREMENT_COUNTER](state) {
        state.counter ++;
    }    
}
    
export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})