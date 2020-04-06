<template>
  <div class="row row-cols-1">
    <comment v-for="comment in comments" :key="comment.id" :data="comment" />
  </div>
</template>

<script>
import Comment from "./Comment.vue";

export default {
  components: {
    Comment,
  },
  props: ["id"],
  computed: {
    comments() {
      return this.$store.state.store.filteredComments;
    },
  },
  mounted() {
    this.$store.dispatch("store/fetchComments", this.id);
  },
};
</script>

<style></style>
