import { defineStore } from 'pinia'

export const usePostStore = defineStore({
  id: 'posts',
  state: () => ({
    name: 'This is a post store',
    posts: []
  }),
  getters: {},
  actions: {
    async getposts() {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      const data = await response.json()
      if (data.length > 0) {
        this.posts = data
      }
    }
  }
})
