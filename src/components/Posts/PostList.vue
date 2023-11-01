<template>
  <div>
    <p>{{ message }}</p>
    <ul>
      <li>
        <router-link to="/post/3">understand nodejs and its architecture</router-link>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam velit sit quas
          dignissimos, magnam nesciunt autem, veniam asperiores, at atque laborum numquam facilis
          tempora omnis a rerum suscipit exercitationem repudiandae!
        </p>
      </li>
      <li>
        <router-link to="/post/4">understand React js and its architecture</router-link>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam velit sit quas
          dignissimos, magnam nesciunt autem, veniam asperiores, at atque laborum numquam facilis
          tempora omnis a rerum suscipit exercitationem repudiandae!
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    const message = ref('post component')

    return {
      message
    }
  }
}
</script>
