import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let Guser = new Vuex.Store({
    state:{
        i : 11
    },
    mutations:{
        changI (state) {
            state.i++
            console.log(state.i)
        }
    },
    getters:{
        getI (state) {
            return state.i
        }
    },
    actions:{
        setI ({commit}) {
            commit('changI')
        }
    }
})

export default Guser;