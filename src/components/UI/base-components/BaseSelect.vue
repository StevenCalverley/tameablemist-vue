<template>
  <div
    class="mt-1 flex-grow relative rounded-md"
  >
    <select
      :id="id"
      class="form-select w-full h-full sm:text-sm sm:leading-5"
      :class="{ 'text-gray-500': modelValue === '' }"
      @change="$emit('update:modelValue', $event.target.value)"
      v-bind="$attrs"
    >
      <option v-if="modelValue === ''" disabled selected>Select...</option>
      <option
        v-for="option in options"
        :key="option"
        :selected="option === modelValue"
      >
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    id: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
    modelValue: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      default: '',
    },
    inline: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:modelValue'],
};
</script>
