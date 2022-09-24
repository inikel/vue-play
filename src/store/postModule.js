export const postsModule = {
  state: () => ({
    posts: '3'
  }),
  getters: {
    
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
  }, 
  actions: {
    async fetchPosts({ commit }) {
      try {
        const url = 'https://jsonplaceholder.typicode.com/posts?_limit=10'
        const posts = await fetch(url).then(res => res.json())

        commit('setPosts', posts)
        return posts
      } catch (e) {
        console.log(e)
      }
    }
  },
  namespaced: true
}