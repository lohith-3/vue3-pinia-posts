import { defineStore } from 'pinia'
import { useAuthorStore } from './authors'

export const usePostStore = defineStore({
  id: 'posts',
  state: () => ({
    name: 'This is a post store',
    posts: [],
    post: {}
  }),
  getters: {
    getAuthorByPost(state) {
      const authorStore = useAuthorStore()
      return authorStore.authors.find((auth) => auth.id === +state.post.userId)
    }
  },
  actions: {
    async fetchPosts() {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      const data = await response.json()
      if (data.length > 0) {
        this.posts = data
      }
    },
    async fetchPost(id) {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      const data = await response.json()
      if (data) {
        this.post = data
      }
    }
  }
})
