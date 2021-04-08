const setComments = (comments) => {
  localStorage.setItem('comments', JSON.stringify(comments))
}

export default {
  state: {
    comments: JSON.parse(localStorage.getItem('comments')) || [],
  },
  mutations: {
    addComment(state, newComment) {
      state.comments.push(newComment)

      setComments(state.comments)
    },
    deleteComment(state, id) {
      const commentId = state.comments.findIndex(comment => comment.id === id)
      state.comments.splice(commentId, 1)

      setComments(state.comments)
    },
    deleteComments(state, postId) {
      state.comments = state.comments.filter(comment => comment.postId !== postId)

      setComments(state.comments)
    },
  },
  actions: {
    addComment({ commit }, newComment) {
      commit('addComment', newComment)
    },
    deleteComment({ commit }, id) {
      commit('deleteComment', id)
    },
  },
  getters: {
    comments: state => id => {
      return state.comments.filter(comment => comment.postId === +id)
    },
  },
}
