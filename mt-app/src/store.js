import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  position: {},
  userName: ''
}

const mutations = {
  setPosition (state, payload) {
    state.position = payload
  },
  setUserName (state, payload) {
    state.userName = payload
  }
}

const actions = {
  setPosition ({ commit }, val) {
    // 异步请求后端获取当前位置数据
    commit('setPosition', val)
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
