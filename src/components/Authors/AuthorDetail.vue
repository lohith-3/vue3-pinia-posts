<template>
  <div>
    <p>{{ getAuthorDetail }}</p>
    <p>{{ getAuthorPosts(route.params.id).length }} posts written</p>
    <ul>
      <li v-for="author in getAuthorPosts(route.params.id)" :key="author.id">
        <router-link to="/">{{ author.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { computed, ref } from 'vue'
import { useAuthorStore } from '../../store/authors'
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'
export default {
  setup() {
    const route = useRoute()
    const message = ref('author detail component')
    const authorStore = useAuthorStore()
    const { authors, getAuthorPosts } = storeToRefs(authorStore)

    if (!authors.length) {
      authorStore.fetchAuthors()
    }

    const getAuthorDetail = computed(() => {
      if (authors.value.length > 0) {
        return authors.value.find((auth) => auth.id === +route.params.id).name
      }
      return ''
    })

    return {
      message,
      route,
      authors,
      getAuthorDetail,
      getAuthorPosts
    }
  }
}
</script>
