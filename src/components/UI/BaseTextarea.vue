<template>
  <label
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
</template>

<script>
export default {
  props: ['modelValue', 'id', 'label'],
  emits: ['update:modelValue'],
};
</script>