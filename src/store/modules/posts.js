const setPosts = (posts) => {
  localStorage.setItem('posts', JSON.stringify(posts))
}

export default {
  state: {
    posts: JSON.parse(localStorage.getItem('posts')) || [],
  },
  mutations: {
    createPost(state, newPost) {
      state.posts.push(newPost)
      setPosts(state.posts)
    },
    editPost(state, {id, title, preview, description}) {
      const posts = state.posts
      const postId = posts.findIndex(post => post.id === id)
      const post = posts[postId]
      posts[postId] = {
        ...post,
        title,
        preview,
        description
      }

      state.posts = posts

      setPosts(state.posts)
    },
    deletePost(state, id) {
      const postId = state.posts.findIndex(post => post.id === id)
      state.posts.splice(postId, 1)

      setPosts(state.posts)
    }
  },
  actions: {
    createPost({commit}, newPost) {
      commit('createPost', newPost)
    },
    editPost({commit}, id) {
      commit('editPost', id)
    },
    deletePost({commit}, id) {
      if (confirm('Вы уверены, что хотите удалить этот пост и все комментарии?')) {
        commit('deletePost', id)
        commit('deleteComments', id)
      }
    }
  },
  getters: {
    posts(state) {
      return state.posts.map((post) => post)
    },
    // post(id){
    //   return const currentPost = (state) => {
    //     return this.state.posts.find((post) => post.id === +id)
    //   }
    // }
    post: state => id => {
      return state.posts.find(post => post.id === +id)
    }
  }
}