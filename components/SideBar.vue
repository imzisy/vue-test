<template>
  <div class="container">
    <div class="form-group">
      <input
        v-model="inputValue"
        type="text"
        class="form-control"
        @input="$store.commit('store/SET_INPUT_FILTER_Value', inputValue)"
      >
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <label class="input-group-text">Options</label>
        </div>
        <select
          v-model="selectedValue"
          class="custom-select"
          @change="
            $store.commit('store/SET_SELECTED_FILTER_Value', selectedValue)
          "
        >
          <option selected disabled>
            Choose...
          </option>
          <option value="email">
            email
          </option>
          <option value="name">
            name
          </option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      inputValue: "",
      selectedValue: "",
    }
  },
}
</script>

<style scoped>
.container {
  margin-top: 10px;
}
</style>
