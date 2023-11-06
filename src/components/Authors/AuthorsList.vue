<template>
  <div>
    <ul>
      <li v-for="author in getAuthors" :key="author.id">
        <p>{{ author.name }}</p>
        <router-link :to="`/author/${author.id}`">Click here to view posts</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useAuthorStore } from '../../store/authors'
import { storeToRefs } from 'pinia'
export default {
  setup() {
    const message = ref('authors list component')
    const authorStore = useAuthorStore()
    const { getAuthors, authors } = storeToRefs(authorStore)

    if (!authors.value.length) {
      authorStore.fetchAuthors()
    }
    return {
      message,
      getAuthors
    }
  }
}
</script>
<style scoped>
ul {
  margin-left: 2rem;
}
li {
  margin: 1rem 0;
  display: flex;
  gap: 1rem;
  justify-content: flex-start;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  padding: 2rem 1rem;
}
</style>
