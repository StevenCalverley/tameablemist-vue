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
    >
      {{ label }}
    </label>
    <div
      class="mt-1 flex-grow relative rounded-md"
      :class="{ 'ml-4': label && !inline }"
    >
      <input
        :id="id"
        :type="type"
        ref="input"
        class="form-input w-full sm:text-sm sm:leading-5 placeholder-gray-500"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        v-bind="$attrs"
      />
    </div>
  </div>
</template>

<script>
import useFocus from '../../../hooks/focus';

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
  setup() {
    const { element: input, focusElement: focusInput } = useFocus();

    return {
      input,
      focusInput,
    };
  },
};
</script>
