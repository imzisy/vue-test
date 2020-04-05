<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{{ data.title }}</h5>
      <p class="card-text">{{ data.body }}</p>
      <router-link tag="li" :to="`/posts/${data.id}`" >
        <a class="card-link">comments link</a>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"],
  created() {},
}
</script>

<style>
.card {
  top: 10px;
}
</style>
