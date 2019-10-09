import Vue from "vue";
import Vuex from "vuex";
import client from 'api-client';

Vue.use(Vuex);

// export default new Vuex.Store({
//   state: {},
//   mutations: {},
//   actions: {}
// });

export default new Vuex.Store({
  // state: {
  //   posts: [
  //     { title: 'Post Title 1' },
  //     { title: 'Post Title 2' },
  //     { title: 'Post Title 3' },
  //     { title: 'Post Title 4' },
  //     { title: 'Post Title 5' }
  //   ]
  // },
  // mutations: {},
  // actions: {}

  state: {
    posts: []
  },

  mutations: {
    setPosts (state, posts) {
      state.posts = posts
    }
  },

  actions: {
    fetchPosts ({ commit }) {
      return client
        .fetchPosts()
        .then(posts => commit('setPosts', posts))
    }
  }
})
