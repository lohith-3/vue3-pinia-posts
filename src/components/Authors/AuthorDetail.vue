<template>
  <div>
    <p>{{ message }}</p>
    <p>{{ $route.params.id }}</p>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    const message = ref('author detail component')

    return {
      message
    }
  }
}
</script>
