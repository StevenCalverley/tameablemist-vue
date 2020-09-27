<template>
  <div
    class="inline-flex"
    :class="[{ 'flex-col': !inline }, { 'items-center': inline }]"
  >
    <label
      v-if="label"
      :for="id"
      class="block text-sm leading-5 font-medium text-gray-700"
      >{{ label }}</label
    >
    <div class="mt-1 relative rounded-md shadow-sm">
      <input
        :id="id"
        :type="type"
        class="form-input"
        :class="{ 'ml-4': label && inline }"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        v-bind="$attrs"
      />
    </div>
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
    type: {
      type: String,
      default: 'text',
    },
    label: {
      type: String,
      default: null,
    },
    modelValue: {
      type: String,
      required: true,
    },
    inline: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:modelValue'],
}
</script>
