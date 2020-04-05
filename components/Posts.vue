<template>
  <div class="row row-cols-2">
    <post-info v-for="post in posts" :key="post.id" :data="post" />
  </div>
</template>

<script>
import PostInfo from "./PostInfo"

export default {
  components: {
    PostInfo,
  },
  computed: {
    posts() {
      return this.$store.state.store.all;
    },
  },
  mounted() {
    this.$store.dispatch("store/fetchPosts")
  },
}
</script>

<style></style>
