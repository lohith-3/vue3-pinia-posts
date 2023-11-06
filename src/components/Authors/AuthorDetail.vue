<template>
  <div class="author-detail">
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

    if (!authors.value.length) {
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
<style scoped>
.author-detail p {
  margin: 1rem;
}
ul {
  list-style-type: disc;
  margin: 2rem;
}
ul li {
  margin: 1.5rem 0;
}
</style>
