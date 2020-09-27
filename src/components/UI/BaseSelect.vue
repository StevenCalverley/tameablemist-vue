<template>
  <select
    class="form-select w-full h-full sm:text-sm sm:leading-5"
    @change="$emit('update:modelValue', $event.target.value)"
  >
    <option v-for="option in options" :key="option" :selected="option === modelValue">{{ option }}</option>
  </select>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true
    },
    modelValue: {
      type: String,
      required: true,
    }
  }
}
</script>