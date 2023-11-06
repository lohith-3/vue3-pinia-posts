<template>
  <div class="comments-container">
    <h3>{{ title }}:</h3>
    <hr />
    <ul>
      <li v-for="comment in comments" :key="comment.id">
        <h4>{{ comment.name }}</h4>
        <p>{{ comment.body }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { useCommentsStore } from '../../store/comments'
import { storeToRefs } from 'pinia'
export default {
  props: {
    comments: {
      type: Array
    }
  },
  setup() {
    const commentsStore = useCommentsStore()
    const { title } = storeToRefs(commentsStore)

    return {
      title
    }
  }
}
</script>
<style scoped>
.comments-container {
  margin-top: 1.5rem;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
li {
  display: flex;
  flex-direction: column;
  margin: 1.5rem 0;
  gap: 1rem;
}
</style>
