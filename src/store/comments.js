import { defineStore } from 'pinia'
import { usePostStore } from './posts'

export const useCommentsStore = defineStore({
  id: 'comments',
  state: () => ({
    title: 'Comments',
    comments: []
  }),
  getters: {
    getCommentsByPost(state) {
      const postStore = usePostStore()
      return state.comments.filter((cmt) => cmt.postId === +postStore.post.id)
    }
  },
  actions: {
    async fetchComments() {
      const response = await fetch('https://jsonplaceholder.typicode.com/comments')
      const data = await response.json()
      if (data.length) {
        this.comments = data
      }
    }
  }
})
