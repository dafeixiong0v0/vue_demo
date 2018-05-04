import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store= new Vuex.Store({
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