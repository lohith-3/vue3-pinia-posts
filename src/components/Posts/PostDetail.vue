<template>
  <div class="post-container">
    <h3 class="post-title">{{ post.title }}</h3>
    <p class="post-detail">
      Written by: <strong>{{ getAuthorByPost?.name }}</strong> | Comments:
      <strong>{{ getCommentsByPost.length }}</strong>
    </p>
    <p class="post-body">{{ post.body }}</p>
    <comments-detail :comments="getCommentsByPost" />
  </div>
</template>

<script>
import CommentsDetail from '../Comments/CommentsDetail.vue'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { usePostStore } from '../../store/posts'
import { useAuthorStore } from '../../store/authors'
import { storeToRefs } from 'pinia'
import { useCommentsStore } from '../../store/comments'
export default {
  components: {
    CommentsDetail
  },
  setup() {
    const message = ref('post details component')
    const route = useRoute()

    const postStore = usePostStore()
    const authorStore = useAuthorStore()
    const commentsStore = useCommentsStore()
    const { post, getAuthorByPost } = storeToRefs(postStore)
    const { authors } = storeToRefs(authorStore)
    const { comments, getCommentsByPost } = storeToRefs(commentsStore)

    postStore.fetchPost(route.params.id)

    if (!authors.value.length > 0) {
      authorStore.fetchAuthors()
    }

    if (!comments.value.length > 0) {
      commentsStore.fetchComments()
    }

    return {
      message,
      post,
      route,
      getAuthorByPost,
      comments,
      getCommentsByPost
    }
  }
}
</script>
<style scoped>
.post-container {
  margin: 1.5rem;
}
.post-title {
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  font-family: Arial, Helvetica, sans-serif;
}
.post-detail {
  margin-bottom: 1.5rem;
}
</style>
