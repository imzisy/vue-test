<template>
  <div class="container">
    <posts />
  </div>
</template>

<script>
import Posts from "~/components/Posts.vue"

export default {
  components: {
    Posts,
  },
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
