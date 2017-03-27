import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  'loadingShow': false,
  'headTitle': '全部'
}

const mutations = {
  UPDATE_LOADING (state, data) {
    state.loadingShow = data
  },
  UPDATE_HEADTITLE (state, data) {
    state.headTitle = data
  }
}

export default new Vuex.Store({
  state,
  mutations
})
