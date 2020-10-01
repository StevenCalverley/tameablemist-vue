<template>
  <div
    class="w-full inline-flex"
    :class="[{ 'flex-col': !inline }, { 'items-center': inline }]"
  >
    <label
      v-if="label"
      :for="id"
      class="flex-shrink-0 block text-sm leading-5 font-medium text-gray-700"
      :class="{ 'w-1/4': inline }"
      >{{ label }}</label
    >
    <div
      class="mt-1 flex-grow relative rounded-md"
      :class="{ 'ml-4': label && inline }"
    >
      <select
        :id="id"
        class="form-select w-full h-full sm:text-sm sm:leading-5"
        @change="$emit('update:modelValue', $event.target.value)"
        v-bind="$attrs"
      >
        <option
          v-for="option in options"
          :key="option"
          :selected="option === modelValue"
        >
          {{ option }}
        </option>
      </select>
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
