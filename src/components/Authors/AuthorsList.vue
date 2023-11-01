<template>
  <div>
    <p>{{ message }}</p>
    <ul>
      <li>
        <router-link to="/author/1">Ross Geller</router-link>
      </li>
      <li>
        <router-link to="/author/2">Monica Geller </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    const message = ref('authors list component')

    return {
      message
    }
  }
}
</script>
