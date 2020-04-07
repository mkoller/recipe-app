import Vue from 'vue'
import Vuex from 'vuex'
import client from 'api-client'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: [],
    specials: []
  },
  mutations: {
    setPosts (state, response) {
      state.posts = response[0]
      state.specials = response[1]
    }
  },
  actions: {
    fetchPosts ({ commit }) {
      return client
        .fetchPosts()
        .then(response => commit('setPosts', response))
    }
  }
})
