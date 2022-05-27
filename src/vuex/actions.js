//actions.js
import { CHANGE_MSG, INCREMENT_COUNTER } from './mutation_types'

export default{
    changeMessage(store, msg) {
        store.commit(CHANGE_MSG, msg)
    },

    incrementCounter(store) {
        store.commit(INCREMENT_COUNTER)
    },

    handleMessageInputChanges ({ commit }, event) {
        commit(CHANGE_MSG, event.target.value)
        if (event.keyCode === 13) {
            commit(INCREMENT_COUNTER)
        }
    }    
}