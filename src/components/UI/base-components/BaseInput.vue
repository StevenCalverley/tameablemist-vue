<template>
  <div class="mt-1 relative flex">
    <input
      :id="id"
      :type="type"
      ref="input"
      class="form-input w-full sm:text-sm sm:leading-5 placeholder-gray-500"
      :class="[
        {
          'font-medium text-red-500 border-red-400 focus:border-red-400 focus:shadow-outline-error bg-red-100':
            state !== null && !state,
        },
      ]"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      v-bind="$attrs"
    />
    <div
      class="absolute inset-y-0 right-0 flex items-center pr-2 text-red-600"
      v-if="state !== null && !state"
    >
      <svg
        class="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
          clip-rule="evenodd"
        ></path>
      </svg>
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
    modelValue: {
      type: String,
      required: true,
    },
    state: {
      type: Boolean,
      default: null,
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
