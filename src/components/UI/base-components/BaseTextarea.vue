<template>
  <div>
    <label
      v-if="label"
      class="flex-shrink-0 block text-sm leading-5 font-medium text-gray-700"
      >{{ label }}</label
    >
    <textarea
      :id="id"
      class="form-input mt-1 block w-full"
      rows="3"
      :value="modelValue"
      v-bind="$attrs"
      @input="$emit('update:modelValue', $event.target.value)"
    ></textarea>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    modelValue: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      default: '',
    },
  },
  emits: ['update:modelValue'],
};
</script>
