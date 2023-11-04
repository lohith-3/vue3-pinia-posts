import { defineStore } from 'pinia'
import { usePostStore } from './posts'

export const useAuthorStore = defineStore({
  id: 'authors',
  state: () => ({
    authors: []
  }),
  getters: {
    getAuthors() {
      return this.authors.map((author) => ({ id: author.id, name: author.name }))
    },
    getAuthorPosts() {
      const postStore = usePostStore()
      return (authId) => postStore.posts.filter((post) => post.userId === +authId)
    }
  },
  actions: {
    async fetchAuthors() {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await response.json()
      if (data.length > 0) {
        this.authors = data
      }
    }
  }
})
