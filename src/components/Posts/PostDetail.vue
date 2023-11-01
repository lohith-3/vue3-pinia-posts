<template>
  <div>
    <p>{{ message }}</p>
    <p>{{ $route.params.id }}</p>
  </div>
</template>

<script>
import { ref } from 'vue'
// import { RouterLink } from 'vue-router'
export default {
  setup() {
    const message = ref('post details component')

    return {
      message
    }
  }
}
</script>
