import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

const state = {
    num: 0
};
const mutations = {
    //事件
    add() {
        state.num++
    },
    reduce() {
        if (state.num == 0) {
            state.num = 0
        } else {
            state.num--
        }
    }
};
const getters = {

};
const actions = {
    //分发事件
};
export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})