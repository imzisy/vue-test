<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">
        {{ data.name }}
      </h5>
      <p class="card-text">
        {{ data.email }}
      </p>
      <p class="card-text">
        {{ data.body }}
      </p>
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
