<template>
  <div>
    <div class="container">
      <side-bar />
      <comments :id="$route.params.id" />
    </div>
  </div>
</template>

<script>
import Comments from "~/components/Comments.vue"
import SideBar from "~/components/SideBar"

export default {
  components: {
    Comments,
    SideBar,
  },
  validate({ params }) {
    return !isNaN(+params.id)
  },
}
</script>
