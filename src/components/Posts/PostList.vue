<template>
  <div>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <router-link :to="`/post/${post.id}`">{{ post.title }}</router-link>
        <p>{{ post.body }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
// import { ref } from 'vue'
import { usePostStore } from '../../store/posts'
import { storeToRefs } from 'pinia'
export default {
  setup() {
    const postStore = usePostStore()
    const { name, posts } = storeToRefs(postStore)

    // fetching the posts
    postStore.getposts()

    return {
      name,
      posts
    }
  }
}
</script>
<style scoped>
ul {
  list-style-type: none;
  margin-top: 2rem;
  padding: 0;
}
li {
  margin: 1.5rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 1rem;
}
li a {
  text-decoration: none;
  text-transform: capitalize;
  color: royalblue;
  font-weight: 700;
}
li a:hover {
  opacity: 0.8;
}
li p {
  margin-top: 0.8rem;
}
</style>
