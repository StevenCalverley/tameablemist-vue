<template>
  <label class="inline-flex items-center">
    <input
      :id="id"
      type="radio"
      class="form-radio"
      :value="label"
      v-bind="$attrs"
      @change="$emit('update:modelValue', $event.target.value)"
    />
    <span class="ml-2">{{ label }}</span>
  </label>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    id: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    modelValue: {
      type: String,
      required: true,
    },
  },
  emits: ['update:modelValue'],
};
</script>
