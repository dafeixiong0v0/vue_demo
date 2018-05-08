import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store= new Vuex.Store({
    // strict:true,
    state: {
        path: '',
    },
    mutations: {
        path(state, path) {
            console.log(state,path);
            state.path = path;
        }
    },
})
export default store