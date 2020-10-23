<template>
<div
  class="mt-2"
  :class="[
    { 'md:flex items-center': inline}
  ]"
>
  <div
    :class="[
      { 'md:w-1/4': inline}
    ]"
  >
    <label
      class="block text-sm leading-5 font-medium text-gray-700"
      :for="inputId"
    >{{ label }}</label>
  </div>
  <div class="flex-grow">
    <slot></slot>
    <p
      v-if="state !== null && !state"
      class="mt-1 text-red-500 text-sm"
    >{{ invalidFeedback }}</p>
    <p
      v-if="description"
      class="mt-1 text-gray-600 text-xs"
    >{{ description }}</p>
  </div>
</div>
</template>
<script>
export default {
  props: {
    inputId: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: null
    },
    state: {
      type: Boolean,
      default: null,
    },
    inline: {
      type: Boolean,
      default: false,
    },
    invalidFeedback: {
      type: String,
      default: null
    }
  }
}
</script>